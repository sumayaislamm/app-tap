import { useEffect, useState } from "react"; import { removeInstalled, getInstalled } from "../../utils/localStorage";
import toast from "react-hot-toast";
import { FaDownload } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const InstalledApps = () => {
  const [apps, setApps] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    setApps(getInstalled());
  }, []);

  const handleUninstall = (id) => {
    removeInstalled(id);
    setApps(getInstalled());
    toast.error("App Uninstalled");
  };


  let sortedApps = [...apps];


  if (sortType === "size-high") {
    sortedApps.sort((a, b) => b.size - a.size);
  }

  if (sortType === "size-low") {
    sortedApps.sort((a, b) => a.size - b.size);
  }

  if (sortType === "download-high") {
    sortedApps.sort((a, b) => b.downloads - a.downloads);
  }

  if (sortType === "download-low") {
    sortedApps.sort((a, b) => a.downloads - b.downloads);
  }

  return (
    <div className="p-5 max-w-6xl mx-auto">
      <div className="flex flex-col text-center justify-center mb-5">
        <h1 className="text-4xl font-bold pb-5">Your Installed Apps</h1>
        <p className="2xl">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5 gap-3">
        <h2 className="text-2xl">Total Apps {apps.length}</h2>
        <select
          onChange={(e) => setSortType(e.target.value)}
          defaultValue="Sort"
          className="select  sm:w-52 bg-primary border-none text-white"
        >
          <option className=" text-black" disabled={true}>Sort</option>
          <option value="size-high">Size High → Low</option>
          <option value="size-low">Size Low → High</option>
          <option value="download-high">Download High → Low</option>
          <option value="download-low">Download Low → High</option>
        </select>
      </div>
      <div>


        <ul className="list bg-base-100 rounded-box shadow-md">


          {sortedApps.map((app) => (

            <li key={app.id} className="list-row">

              <div>
                <img className="w-[60px] h-[60px] rounded-box " src={app.image} />
              </div>

              <div className="flex flex-col justify-center">
                <div>{app.title}: {app.description}</div>
                <div className="flex flex-row justify-between gap-3 sm:gap-5  w-50">
                  <p className='text-gray-500 text-sm flex items-center gap-1'><FaDownload className="text-blue-500" /> {app.downloads}</p>
                  <p className='text-yellow-500 font-medium flex items-center gap-1'><AiFillStar className="text-yellow-400" />  {app.ratingAvg} </p>
                  <p className='text-primary font-medium flex items-center gap-1'>{app.size}MB </p>
                </div>

              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="btn btn-error btn-sm"
              >
                Uninstall
              </button>

            </li>

          ))}

        </ul>
      </div>
    </div>
  );
};

export default InstalledApps;