import { useState, useEffect } from "react";
import data from "../../../public/data.json";
import AppCard from "../../components/AppCards/AppCards";
import Loading from "../../components/Loading/Loading";

const AllApps = () => {
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  let filtered = data.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sortType === "high") {
    filtered.sort((a, b) => b.downloads - a.downloads);
  }

  if (sortType === "low") {
    filtered.sort((a, b) => a.downloads - b.downloads);
  }

  if (loading) {
  return (
  <Loading></Loading>
  );
}

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
          <div className="flex">
            <select
              onChange={(e) => setSortType(e.target.value)}
              defaultValue="Pick a method" className="select appearance-none w-50 mx-10 bg-primary border-none text-white"
            >
               <option className=" text-black" disabled={true}>Pick a method</option>
              <option value="high">High to Low</option>
              <option value="low">Low to High</option>
            </select>
            
              <input
                type="text "
                placeholder="🔍Search app"
                className="input input-bordered mb-5"
                onChange={(e) => {
                  setLoading(true);
                  setTimeout(() => {
                    setSearch(e.target.value);
                    setLoading(false);
                  }, 300);
                }}
              />
          </div>

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