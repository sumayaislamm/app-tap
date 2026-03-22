import { useState } from "react";
import data from "../../../public/data.json";
import AppCard from "../../components/AppCards/AppCards";
import { FaSearch } from "react-icons/fa";

const AllApps = () => {
  const [search, setSearch] = useState("");

  const filtered = data.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold ">Our All Applications</h1>
        <p className="text-gray-700 text-xl">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className="max-w-6xl mx-auto p-5">
        <div className="flex justify-between gap-20">


          <h1 className="text-2xl font-bold mb-4">
            ({data.length}) Apps found
          </h1>

          <input
            type="text "
            placeholder=" Search app"
            className="input input-bordered mb-5"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

      </div>
    </div>
  );

};

export default AllApps;