const completeFolderTree = function (folderList) {
  for (let i = 0; i < folderList.length; i++) {
    folderList[i].addEventListener("click", (event) => {
      // 여기에서 작업하세요.
      const visibleTarget = event.target.parentNode;
      const lowerFile = visibleTarget.querySelector(".lower-folder");
      const visible = lowerFile.style.display;
      visibleTarget.classList.toggle("isOpen");
      if (visible === "block") {
        lowerFile.style.display = "none";
      } else {
        lowerFile.style.display = "block";
      }
    });
  }
};
