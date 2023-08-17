const handleClick = (event) => {
    console.log();
    let id = document.getElementById(event.id).id;
    if (id.includes("Folder")) {
        // Create New Folder under id
        createFolderItem(event);
    } else if (id.includes("File")) {
        // Create New File under id
        createFileItem(event);
    } else {
        if (
            confirm("Are you sure you want to permanently delete this?") == true
        ) {
            deleteFolderOrFile(event);
        } else {
            return null;
        }
    }
};
