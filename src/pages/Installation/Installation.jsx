import { useEffect, useState } from "react";
import { getInstalled } from "../../utils/localStorage";
import AppCard from "../../components/AppCards/AppCards";

const InstalledApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    setApps(getInstalled());
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-5">

      <h1 className="text-2xl font-bold mb-5">
        Installed Apps
      </h1>

      <div className="grid grid-cols-4 gap-5">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

    </div>
  );
};

export default InstalledApps;