const Score = require('../models/score.model')
const File = require('../models/file.model')
const bucketName = process.env.AWS_BUCKET_NAME


async function add_score(req, res) {
    const sections = {};

    for (const field in req.files) {
        const file = req.files[field][0];
        sections[field] = (await File.create({
            name: file.originalname,
            ref: `https://${bucketName}.s3.amazonaws.com/${file.originalname}`,
        })).id
    }

    const newScore = new Score({
        name: req.body.name,
        ...sections,
    });

    try {
        await newScore.save();
        res.status(200).json(newScore)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


module.exports={add_score};