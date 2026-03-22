// const KEY = "installed_apps";

// export const getInstalledApps = () => {
//   const data = localStorage.getItem(KEY);
//   return data ? JSON.parse(data) : [];
// };

// export const installApp = (app) => {
//   const apps = getInstalledApps();

//   const exists = apps.find((a) => a.id === app.id);
//   if (!exists) {
//     apps.push(app);
//     localStorage.setItem(KEY, JSON.stringify(apps));
//   }
// };

// export const uninstallApp = (id) => {
//   const apps = getInstalledApps().filter((a) => a.id !== id);
//   localStorage.setItem(KEY, JSON.stringify(apps));
// };

// export const isInstalled = (id) => {
//   const apps = getInstalledApps();
//   return apps.some((a) => a.id === id);
// };

export const getInstalled = () => {
  const data = localStorage.getItem("installed");
  return data ? JSON.parse(data) : [];
};

export const saveInstalled = (apps) => {
  localStorage.setItem("installed", JSON.stringify(apps));
};