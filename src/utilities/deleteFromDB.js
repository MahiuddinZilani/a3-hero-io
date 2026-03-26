const getInstalledApp = () => {
  const storedAppsStr = localStorage.getItem("installedApp");

  if (storedAppsStr) {
    const storedAppsData = JSON.parse(storedAppsStr);
    return storedAppsData;
  } else {
    return [];
  }
};

const deleteFromDB = (id) => {
  {
    const storedApps = getInstalledApp();

    const updatedStoredApps = storedApps.filter(
      (storedId) => parseInt(storedId) !== id,
    );

    localStorage.setItem("installedApp", JSON.stringify(updatedStoredApps));
  }
};

export { deleteFromDB };
