import { useState, useEffect } from "react";
import data from "../../../public/data.json";
import AppCard from "../../components/AppCards/AppCards";
import Loading from "../../components/Loading/Loading";

const AllApps = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  let filtered = data.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );



  if (loading) {
    return (
      <Loading></Loading>
    );
  }

  return (
    <div>
      <div className="text-center my-10 mb-5 px-3 sm:px-5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold ">Our All Applications</h1>
        <p className="text-gray-700 text-sm sm:text-lg">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className="max-w-6xl mx-auto px-3 sm:px-5 py-5">


        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-5">

          <h1 className="text-lg sm:text-2xl font-bold">
            ({filtered.length}) Apps found
          </h1>

          <input
            type="text"
            placeholder="🔍 Search app"
            className="input input-bordered w-full sm:w-64"
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>



        {filtered.length === 0 ? (

          <p className="text-center text-xl font-semibold text-red-500 mt-10">
            No App Found
          </p>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:grid-cols-4">
            {filtered.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

        )}


      </div>
    </div>
  );

};

export default AllApps;