// Reference of Pure Function

const createFolderItem = (event) => {
    let folderName = document.getElementById("naming");
    if (!folderName.value) {
        return null;
    }

    let newLevel = findId(event);

    // Create a new div element for the folder item
    let childrenContainer = createChildrenContainer(folderName, "Folder");
    let newFolderDiv = createNewDiv(folderName, "Folder");

    // Create the child elements for the new folder item
    let arrowSpan = createArrow(folderName);
    let nameSpan = nameContainer(folderName);
    let folderSpan = createFolder(folderName);
    let fileSpan = createFile(folderName);
    let deleteSpan = createDeleteBtn(folderName);

    // Append the child elements to the new folder div
    newFolderDiv.appendChild(arrowSpan);
    newFolderDiv.appendChild(nameSpan);
    newFolderDiv.appendChild(folderSpan);
    newFolderDiv.appendChild(fileSpan);
    newFolderDiv.appendChild(deleteSpan);
    newFolderDiv.appendChild(childrenContainer);

    newLevel = newLevel * 10;
    newFolderDiv.style.paddingLeft = newLevel + "px";

    // Append the new folder div to the file explorer
    // let fileExplorer = document.getElementById("fileExplorer");
    let temp = document.getElementById(event.id).parentNode.parentNode.id;
    let targetDiv = temp + "Children";
    let childDiv = document.getElementById(targetDiv);
    childDiv.appendChild(newFolderDiv);
};

const createFileItem = (event) => {
    let fileName = document.getElementById("naming");
    if (!fileName.value) {
        return null;
    }

    let newLevel = findId(event);

    // Create a new div element for the folder item
    let newFileDiv = createNewDiv(fileName, "File");
    let childrenContainer = createChildrenContainer(fileName, "File");

    // Create the child elements for the new folder item
    let arrowSpan = createArrow(fileName);
    let nameSpan = nameContainer(fileName);
    let fileSpan = createFile(fileName);
    let deleteSpan = createDeleteBtn(fileName);

    // Append the child elements to the new folder div
    newFileDiv.appendChild(arrowSpan);
    newFileDiv.appendChild(nameSpan);
    newFileDiv.appendChild(fileSpan);
    newFileDiv.appendChild(deleteSpan);
    newFileDiv.appendChild(childrenContainer);

    newLevel = newLevel * 10;
    newFileDiv.style.paddingLeft = newLevel + "px";

    let temp = document.getElementById(event.id).parentNode.parentNode.id;
    let targetDiv = temp + "Children";
    let childDiv = document.getElementById(targetDiv);
    childDiv.appendChild(newFileDiv);

    // Append the new folder div to the file explorer
    // let fileExplorer = document.getElementById("fileExplorer");
    // fileExplorer.appendChild(newFileDiv);
};

const deleteFolderOrFile = (event) => {
    // Deleted
    let deleted = findId(event);
};

const createNewDiv = (folderName, type) => {
    if (type === "Folder") {
        let newFolderDiv = document.createElement("div");
        newFolderDiv.className = "item";
        newFolderDiv.id = folderName.value.replace(/ /g, "_") + "FolderDiv";
        return newFolderDiv;
    } else {
        let newFileDiv = document.createElement("div");
        newFileDiv.className = "item";
        newFileDiv.id = folderName.value.replace(/ /g, "_") + "FileDiv";
        return newFileDiv;
    }
};

const createChildrenContainer = (name, type) => {
    let containerDiv = document.createElement("div");
    if (type === "Folder") {
        containerDiv.id = name.value.replace(/ /g, "_") + "FolderDivChildren";
    } else {
        containerDiv.id = name.value.replace(/ /g, "_") + "FileDivChildren";
    }
    return containerDiv;
};

const createFolder = (folderName) => {
    let folderSpan = document.createElement("span");
    folderSpan.className = "folder";
    let folderBtn = document.createElement("img");
    // folderBtn.addEventListener("click", findId);
    folderBtn.src = "images/icons8-folder-480.png";
    folderBtn.className = "folderBtn";
    folderBtn.id = folderName.value.replace(/ /g, "_") + "FolderBtn";
    folderBtn.setAttribute("onclick", "handleClick(this)");
    folderSpan.appendChild(folderBtn);
    folderSpan.id = folderName.value.replace(/ /g, "_") + "FolderSpan";
    return folderSpan;
};

const createFile = (fileName) => {
    let fileSpan = document.createElement("span");
    fileSpan.className = "file";
    let fileBtn = document.createElement("img");
    fileBtn.src = "images/newFile.png";
    fileBtn.className = "fileBtn";
    fileBtn.id = fileName.value.replace(/ /g, "_") + "FileBtn";
    fileBtn.setAttribute("onclick", "handleClick(this)");
    fileSpan.appendChild(fileBtn);
    fileSpan.id = fileName.value.replace(/ /g, "_") + "FileSpan";
    return fileSpan;
};

const createDeleteBtn = (userInput) => {
    let deleteSpan = document.createElement("span");
    deleteSpan.className = "delete";
    let deleteBtn = document.createElement("img");
    deleteBtn.src = "images/icons8-delete-24.png";
    deleteBtn.className = "deleteBtn";
    deleteBtn.id = userInput.value.replace(/ /g, "_") + "DeleteBtn";
    deleteBtn.setAttribute("onclick", "handleClick(this)");
    deleteBtn.textContent = "🗑";
    deleteSpan.appendChild(deleteBtn);
    deleteSpan.id = userInput.value.replace(/ /g, "_") + "DeleteSpan";
    return deleteSpan;
};

const createArrow = (folderName) => {
    let arrowSpan = document.createElement("span");
    arrowSpan.className = "arrow";
    let arrowImg = document.createElement("img");
    arrowImg.src = "images/icons8-right-button-48.png";
    arrowImg.alt = "➡";
    arrowSpan.id = folderName.value.replace(/ /g, "_") + "ArrowSpan";
    arrowSpan.appendChild(arrowImg);
    return arrowSpan;
};

const nameContainer = (folderName) => {
    let nameSpan = document.createElement("span");
    nameSpan.className = "name";
    const userInput = document.getElementById("naming");
    nameSpan.textContent = `${userInput.value}`;
    nameSpan.style.fontSize = "30px";
    nameSpan.id = folderName.value.replace(/ /g, "_") + "NameSpan";
    return nameSpan;
};

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    let toogleBtn = document.getElementById("darkModeButton");
    let displayText = toogleBtn.innerHTML;
    if (displayText === "Dark Mode") {
        // In Dark Mode
        toogleBtn.innerHTML = "Light Mode";
    } else {
        // In Light Mode
        toogleBtn.innerHTML = "Dark Mode";
    }
};

// const createFileItem = (event) => {
//     let fileName = document.getElementById("naming");

//     // Create a new div element for the folder item
//     let newFileDiv = document.createElement("div");
//     newFileDiv.className = "item"; // Set the CSS class
//     newFileDiv.id = fileName.value.replace(/ /g, "_") + "FileDiv";

//     // Create the child elements for the new folder item
//     let arrowSpan = createArrow();
//     arrowSpan.id = fileName + "ArrowSpan";

//     let nameSpan = nameContainer(fileName);
//     nameSpan.id = fileName.value.replace(/ /g, "_") + "NameSpan";

//     let fileSpan = createFile(fileName);
//     fileSpan.id = fileName.value.replace(/ /g, "_") + "FileSpan";

//     let deleteSpan = createDeleteBtn(fileName);
//     deleteSpan.id = fileName.value.replace(/ /g, "_") + "DeleteSpan";

//     // Append the child elements to the new folder div
//     newFileDiv.appendChild(arrowSpan);
//     newFileDiv.appendChild(nameSpan);
//     newFileDiv.appendChild(fileSpan);
//     newFileDiv.appendChild(deleteSpan);

//     // Append the new folder div to the file explorer
//     let fileExplorer = document.getElementById("fileExplorer");
//     fileExplorer.appendChild(newFileDiv);
// };
