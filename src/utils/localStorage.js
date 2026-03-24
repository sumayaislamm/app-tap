export const getInstalled = () => {
  const data = localStorage.getItem("installed");
  return data ? JSON.parse(data) : [];
};

export const saveInstalled = (apps) => {
  localStorage.setItem("installed", JSON.stringify(apps));
};

export const removeInstalled = (id) => {
  const apps = getInstalled();
  const filtered = apps.filter((a) => a.id !== id);
  saveInstalled(filtered);
};