const ActivityLog = require("../models/ActivityLog");

exports.getActivityLogs = async (req, res) => {
    try {
        const logs = await ActivityLog.find().sort({ timestamp: -1 });
        res.status(200).json({
            count: logs.lenght,
            logs
        });
    } catch (error) {
        res.status(500).json({
            message: "Error getting activity logs",
            error: error.message
        });
    }
}