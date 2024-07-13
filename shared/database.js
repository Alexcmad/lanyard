const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');


const s3 = new AWS.S3();

const bucketName = process.env.AWS_BUCKET_NAME;

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: bucketName,
        key: function (req, file, cb) {
            cb(null, file.originalname);
        }
    })
});

module.exports = {
    s3,
    upload
}
