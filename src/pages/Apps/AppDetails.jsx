import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../../../public/data.json";
import { getInstalled, saveInstalled, removeInstalled } from "../../utils/localStorage";
import { FaDownload, FaStar, FaUsers } from "react-icons/fa";
import ReviewChart from "../../components/ReviewChart/ReviewChart";

const AppDetails = () => {
  const { id } = useParams();
  const app = data.find((a) => a.id == id);

  const [installed, setInstalled] = useState(false);

  // check if app is installed on mount
  useEffect(() => {
    const apps = getInstalled();
    const exists = apps.find((i) => i.id == id);
    setInstalled(!!exists);
  }, [id]);

  const handleInstallToggle = () => {
    if (installed) {
      // uninstall
      removeInstalled(app.id);
      setInstalled(false);
    } else {
      // install
      const apps = getInstalled();
      apps.push(app);
      saveInstalled(apps);
      setInstalled(true);
    }
  };

  if (!app) return <h1>Not found</h1>;

  return (
    <div className="mx-10">
      <div className="flex gap-5 mt-10">
        <div className="flex gap-5">
          <img src={app.image} className="w-40" />
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className="text-2xl font-bold">
              {app.title} - {app.description}
            </h1>
            <p>Developed by @{app.companyName}</p>
            <hr className="my-4 w-full border-gray-300" />
          </div>

          <div className="flex items-center gap-4 text-gray-600">
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
            <button
              onClick={handleInstallToggle}
              className={`btn mt-3 text-white ${installed ? "btn-error" : "btn-success"}`}
            >
              {installed ? "Uninstall" : `Install Now (${app.size} MB)`}
            </button>
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