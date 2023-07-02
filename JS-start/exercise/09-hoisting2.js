const createTree = function (folder, node) {
  // 여기에서 작업하세요.
  for (let i = 0; i < folder.length; i++) {
    const folderName = folder[i].name;
    const folderFile = folder[i].file;
    const lowerFolder = folder[i].folder;

    // 토글 생성
    const newToggle = document.createElement("details");

    // folder div 생성
    const newFolder = document.createElement("summary");
    newFolder.textContent = folderName;
    newToggle.appendChild(newFolder);
    node.prepend(newToggle);

    // 하위 file 생성
    if (folderFile) {
      for (let j = 0; j < folderFile.length; j++) {
        const newFile = document.createElement("li");
        newFile.textContent = folderFile[j];
        newToggle.appendChild(newFile);
      }
    }

    // 하위 folder 생성
    if (lowerFolder) {
      for (let k = 0; k < lowerFolder.length; k++) {
        createTree([lowerFolder[k]], newToggle);
      }
    } else {
      return;
    }
  }
};
