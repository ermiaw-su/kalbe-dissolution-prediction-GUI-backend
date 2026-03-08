const Dataset = require("../models/Dataset");

exports.uploadDataset = async (req, res) => {
    try{
        const file = req.file

        if(!file) {
            return res.status(400).json({
                message: "No file uploaded"
            })
        }

        const dataset = new Dataset({
            fileName: file.filename,
            originalName: file.originalname,
            filePath: file.path,
            fileSize: file.size,
            uploadedBy: "test-user" // Configure later after user created by Troy
        })
        await dataset.save()

        res.status(201).json({
            message: "File uploaded successfully",
            dataset
        })
    } catch (error) {
        res.status(500).json({
            message: "Error uploading file",
            error: error.message
        })
    }
}

