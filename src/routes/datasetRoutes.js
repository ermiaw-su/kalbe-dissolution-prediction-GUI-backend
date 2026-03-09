const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");
const datasetController = require("../controllers/datasetController");

router.post(
    "/upload",
    upload.single("dataset"),
    datasetController.uploadDataset
)

router.get("/", datasetController.getDatasets)
router.get("/:id", datasetController.getDatasetById)
router.delete("/:id", datasetController.deleteDataset)

module.exports = router