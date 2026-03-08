const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");
const datasetController = require("../controllers/datasetController");

router.post(
    "/upload",
    upload.single("dataset"),
    datasetController.uploadDataset
)

module.exports = router