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
    alert("already exist");
  } else {
    storedAppsData.push(id);

    const data = JSON.stringify(storedAppsData);
    localStorage.setItem("installedApp", data);
    console.log(storedAppsData);
  }
};

export { addToStoredDB };
