const { MongoClient, GridFSBucket } = require('mongodb');
const express = require('express');
const multer = require('multer');
const stream = require('stream');
const FileMetadata = require('../models/fileMetadata.model'); // Import the new metadata model
const auth = require('../middleware/auth');
const router = express.Router();

// MongoDB URI
const url = process.env.MONGO_URI;

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create a MongoDB connection and GridFS bucket
let bucket;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('panoridimDB');
        bucket = new GridFSBucket(db, { bucketName: 'uploads' });
        console.log('Connected to MongoDB and GridFSBucket initialized.');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });


// Upload route using native GridFS
router.post('/upload',auth, upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }


    const readStream = new stream.PassThrough();
    readStream.end(req.file.buffer);

    const uploadStream = bucket.openUploadStream(req.file.originalname);
    readStream.pipe(uploadStream)
        .on('error', (error) => {
            console.error('Upload error:', error);
            return res.status(500).json({ error: 'Error uploading file' });
        })
        .on('finish', async () => {
            console.log('File uploaded successfully.');

            // Save metadata in FileMetadata model
            const fileMetadata = new FileMetadata({
                filename: req.file.originalname,
                contentType: req.file.mimetype,
                fileId: uploadStream.id, // GridFS file ID
                uploadedBy: req.user._id, // Assuming req.user contains the authenticated user's info
                // Add songId if the file is linked to a song
            });

            try {
                await fileMetadata.save();
                res.json({ fileId: uploadStream.id, metadata: fileMetadata });
            } catch (err) {
                console.error('Error saving file metadata:', err);
                res.status(500).json({ error: 'Error saving file metadata' });
            }
        });
});

// Get all files (metadata)
router.get('/files', async (req, res) => {
    try {
        const files = await FileMetadata.find();
        if (!files || files.length === 0) {
            return res.status(404).json({ error: 'No files found' });
        }
        res.json(files);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching files' });
    }
});

module.exports = router;
