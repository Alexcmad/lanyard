const UserProgress = require('../models/userProgress.model');

async function updateUserProgress (req, res) {
    const songId = req.params.id;
    const {hoursSpent, progressPercentage} = req.body;

    try {
        let progress = await UserProgress.findOne({user: req.user._id, song: songId});
        if(!progress){
            progress = new UserProgress({
                user: req.user._id,
                song: songId,
                hoursSpent,
                progressPercentage

            })
            console.log("Progress Added from scratch");
            console.log(progress)
        } else {
            progress.hoursSpent += hoursSpent;
            progress.progressPercentage = progressPercentage;
            progress.lastUpdated =Date.now();
        }
        await progress.save();
        res.json({message: 'Progressed successfully updated', progress: progress});
    } catch (error) {
        res.status(500).json({error: error});
    }
};

module.exports = {
    updateUserProgress
}