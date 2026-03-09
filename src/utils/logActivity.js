const ActivityLog = require("../models/ActivityLog");

const logActivity = async (action, description) => {
    try {
        await ActivityLog.create({ action, description });
    } catch (error) {
        console.error("Error logging activity:", error.message);
    }
}

module.exports = logActivity