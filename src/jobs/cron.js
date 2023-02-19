const cron = require("node-cron");
const ParticipantsService = require('../services/openBankingService');

const CronOneHour = async () => {
    var currentHour = new Date().toLocaleTimeString();
    console.log(`CRON JOB ${currentHour} - WAITING NEXT TIME`);
    cron.schedule("0 * * * *", async () => {
        currentHour = new Date().toLocaleTimeString();
        const nextHour = new Date();
        nextHour.setHours(nextHour.getHours() + 1);
        console.log(`CRON RUNNING - ${currentHour} - NEXT HOUR: ${nextHour.toLocaleTimeString()}`)
        await ParticipantsService.UpdateDatabaseData();
        console.log(`CRON FINISHED`)
    })
}



module.exports = CronOneHour;

