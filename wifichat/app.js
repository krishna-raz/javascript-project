const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up multer for file uploads (store in public/img)
const upload = multer({
  dest: path.join(__dirname, 'public/img'),
  fileFilter: (req, file, cb) => {
    // Accept only image files
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

// In-memory storage for shared text (in a real app, you'd use a database)
let sharedText = '';

// Serve the main page
app.get('/', (req, res) => {
  res.render('index', { sharedText });
});

// Handle text updates
app.post('/update-text', express.json(), (req, res) => {
  sharedText = req.body.text;
  io.emit('textUpdate', sharedText);
  res.sendStatus(200);
});

// Handle file uploads
// app.post('/upload', upload.single('file'), (req, res) => {
//   if (req.file) {
//     // Emit the file URL to clients
//     const filePath = `/img/${req.file.filename}`;
//     io.emit('fileUploaded', {
//       name: req.file.originalname,
//       path: filePath
//     });
//     res.sendStatus(200);
//   } else {
//     res.status(400).send('No file uploaded.');
//   }
// });

// Serve file list (return URLs for images in public/img)
// app.get('/files', (req, res) => {
//   const imgDir = path.join(__dirname, 'public/img');
//   fs.readdir(imgDir, (err, files) => {
//     if (err) {
//       res.status(500).send('Error reading files');
//     } else {
//       // Send file URLs (relative to public directory)
//       const fileUrls = files.map(file => `/img/${file}`);
//       res.json(fileUrls);
//     }
//   });
// });

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.emit('textUpdate', sharedText);

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
http.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
