import { useEffect, useState } from "react";import { removeInstalled, getInstalled } from "../../utils/localStorage";
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

if (sortType === "download-high") {
  sortedApps.sort((a, b) => b.downloads - a.downloads);
}

if (sortType === "download-low") {
  sortedApps.sort((a, b) => a.downloads - b.downloads);
}

if (sortType === "size-high") {
  sortedApps.sort((a, b) => b.size - a.size);
}

if (sortType === "size-low") {
  sortedApps.sort((a, b) => a.size - b.size);
}

  return (
    <div className="max-w-6xl mx-auto p-5">

      <ul className="list bg-base-100 rounded-box shadow-md">

        <li className="p-4 pb-2 text-xl opacity-60 tracking-wide">
          Total Installed Apps ({apps.length})
        </li>
           <select
              className="select select-bordered mb-4"
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="">Sort</option>

              <option value="download-high">Downloads High → Low</option>
              <option value="download-low">Downloads Low → High</option>
              <option value="size-high">Size High → Low</option>
              <option value="size-low">Size Low → High</option>
            </select>

        {sortedApps.map((app) => (

          <li key={app.id} className="list-row">

            <div>
              <img
                className="size-10 rounded-box"
                src={app.image}
              />
            </div>

            <div>
              <div>{app.title}: {app.description}</div>
              <div className='flex justify-between gap-5 w-50'>
                <p className='text-gray-500 text-sm flex items-center gap-1'><FaDownload className="text-blue-500" /> {app.downloads}</p>
                <p className='text-yellow-500 font-medium flex items-center gap-1'><AiFillStar className="text-yellow-400" />  {app.ratingAvg} </p>
                <p className='text-yellow-500 font-medium flex items-center gap-1'>{app.size}MB </p>
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
  );
};

export default InstalledApps;