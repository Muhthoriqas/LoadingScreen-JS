onload = function () {
  let id = document.getElementById("loading");
  let loading = document.createElement("div");

  loading.textContent = "Loading";
  id.appendChild(loading);
  let animation = setInterval(() => {
    loading.textContent = loading.textContent + ".";
  }, 1000);
  setTimeout(() => {
    clearInterval(animation);
    loading.textContent = "WELCOME TO OUR DASHBOARD";
  }, 3000);
};
