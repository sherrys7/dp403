function fetchData(url) {
  const cachedData = localStorage.getItem(url);
  if (cachedData) {
    return Promise.resolve(JSON.parse(cachedData));
  } else {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem(url, JSON.stringify(data));
        return data;
      });
  }
}
