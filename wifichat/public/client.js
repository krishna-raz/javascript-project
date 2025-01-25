const socket = io();
const sharedText = document.getElementById('sharedText');
const uploadForm = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');

// Handle text updates
sharedText.addEventListener('input', () => {
    fetch('/update-text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: sharedText.value }),
    });
});
async function fetchAndDisplayFiles() {
    const response = await fetch('/files');
    const fileUrls = await response.json();

    const container = document.getElementById('file-container');
    container.innerHTML = ''; // Clear existing content
    fileUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url; // Use the URL from the server
        img.alt = 'Uploaded File';
        img.style.width = '150px';
        img.style.margin = '10px';
        container.appendChild(img);
    });
}


socket.on('textUpdate', (text) => {
    sharedText.value = text;
});

// Handle file uploads
uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    fetch('/upload', {
        method: 'POST',
        body: formData,
    }).then(() => {
        fileInput.value = '';
        updateFileList();
    });
});

socket.on('fileUploaded', () => {
    updateFileList();
});

function updateFileList() {
    fetch('/files')
        .then(response => response.json())
        .then(files => {
            fileList.innerHTML = '';
            files.forEach(file => {
                const li = document.createElement('li');
                li.textContent = file;
                fileList.appendChild(li);
            });
        });
}

// Initial file list update
updateFileList();

