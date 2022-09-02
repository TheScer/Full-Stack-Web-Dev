const fetchData = async () => {
  console.log("Start fetching...");
  await new Promise((r) => setTimeout(r, 2000));
  console.log("Data received!");
};

console.log("Let's get some data from the internet!");
fetchData().then(function (value) {
  console.log("Let's use the data we fetched!");
});
