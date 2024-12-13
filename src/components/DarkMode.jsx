const DarkMode = () => {
  return document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("DarkMode");
    DarkMode.addEventListener("click", function () {
      if (document.documentElement.classList.includes("dark")) {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
      alert("click");
    });
  });
};

export default DarkMode;
