const getInstalledApp = () => {
  const storedAppsStr = localStorage.getItem("installedApp");

  if (storedAppsStr) {
    const storedAppsData = JSON.parse(storedAppsStr);
    return storedAppsData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedAppsData = getInstalledApp();

  if (storedAppsData.includes(id)) {
    return "exists";
  } else {
    storedAppsData.push(id);
    localStorage.setItem("installedApp", JSON.stringify(storedAppsData));
    return "added";
  }
};

export { addToStoredDB, getInstalledApp };
