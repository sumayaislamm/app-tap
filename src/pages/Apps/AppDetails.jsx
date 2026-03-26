import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../../../public/data.json";
import { getInstalled, saveInstalled, removeInstalled } from "../../utils/localStorage";
import { FaDownload, FaStar, FaUsers } from "react-icons/fa";
import ReviewChart from "../../components/ReviewChart/ReviewChart";
import toast from "react-hot-toast";
import Loading from "../../components/Loading/Loading";

const AppDetails = () => {
  const { id } = useParams();
  const app = data.find((a) => a.id == id);
  const [loading, setLoading] = useState(true);

  const [installed, setInstalled] = useState(false);


  useEffect(() => {
    const apps = getInstalled();
    const exists = apps.find((i) => i.id == id);
    setInstalled(!!exists);
      setLoading(false);
  }, [id]);

  const handleInstall = () => {
    if (!installed) {
      const apps = getInstalled();
      apps.push(app);
      saveInstalled(apps);
      setInstalled(true);
      toast.success("App Installed Successfully");
    }
  };

  const handleUninstall = () => {
    removeInstalled(app.id);
    setInstalled(false);
    toast.error("App Uninstalled Successfully");
  };
  if (loading) {
    return (
      <Loading></Loading>
    );
  }


  if (!app) return <h1>Not found</h1>;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row gap-5 mt-10">
        <div className="flex gap-5">
          <img src={app.image} className="w-full max-w-50 md:max-w-55 rounded-lg" />
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className="text-2xl font-bold">
              {app.title} - {app.description}
            </h1>
            <p>Developed by @{app.companyName}</p>
            <hr className="my-4 w-full border-gray-300" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mt-3">
            <div className="items-center gap-1">
              <FaDownload className="text-success text-xl" />
              <p>
                <span className="text-xs">Downloads</span> <br />{" "}
                <span className="text-2xl text-black font-bold">{app.downloads}k</span>
              </p>
            </div>
            <div className="items-center gap-1">
              <FaStar className="text-yellow-500 text-xl" />
              <p>
                <span className="text-xs">Average Ratings</span> <br />{" "}
                <span className="text-2xl text-black font-bold">{app.ratingAvg}</span>
              </p>
            </div>
            <div className="items-center gap-1">
              <FaUsers className="text-purple-500 text-xl" />
              <p>
                <span className="text-xs">Total Reviews</span> <br />{" "}
                <span className="text-2xl text-black font-bold">{app.reviews}k</span>
              </p>
            </div>
          </div>

          <div>
           
            <div className="flex flex-col sm:flex-row gap-3 mt-3">

              <button
                onClick={handleInstall}
                disabled={installed}
                className={`btn text-white ${installed ? "btn-disabled" : "btn-success"
                  }`}
              >
                {installed ? "Installed" : `Install Now (${app.size} MB)`}
              </button>

              {installed && (
                <button
                  onClick={handleUninstall}
                  className="btn btn-error text-white"
                >
                  Uninstall
                </button>
              )}

            </div>
          </div>
        </div>
      </div>

      <hr className="my-4 border-gray-300" />

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Review Chart</h2>
        <ReviewChart ratings={app.ratings} />
      </div>

      <hr className="my-4 border-gray-300" />
      <div className="my-10">
        <h3 className="text-2xl font-bold text-primary">Description</h3>
        <p className="mt-5 text-gray-700">{app.detailsDescription}</p>
      </div>
    </div>
  );
};

export default AppDetails;