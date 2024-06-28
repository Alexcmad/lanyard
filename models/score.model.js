const mongoose = require("mongoose")

const ScoreSchema = mongoose.Schema(
    {

                name: {
                    type: String,
                    required: [true, "Name is required"],

                }


    }
)