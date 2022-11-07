const Agenda = require("agenda");
const { jobs } = require("../jobs/index");

const connectionOpts = {
    db: {
        address: "mongodb://127.0.0.1/agendaDb",
        collection: "agendaJobs"
    },
};

const agenda = new Agenda(connectionOpts);

// TBD
// const jobTypes = process.env.JOB_TYPES ? process.env.JOB_TYPES.split(",") : [];

// jobTypes.forEach((type) => {
//     require("../jobs/" + type)(agenda);
// });

// console.log(jobTypes)
// if (jobTypes.length) {
//     agenda.start(); // Returns a promise, which should be handled appropriately
//     console.log('here')
// }

// const jobs = () => {
//     testJob(agenda);
// };

agenda
    .on('ready', async () => {
        await agenda.start();
        console.log(`🚀 Agenda is now started.`);
        jobs(agenda);
    })
    .on('error', () => console.log(`❌ Agenda connection to database error.`));

async function graceful() {
    await agenda.stop();
    process.exit(0);
}

process.on("SIGTERM", graceful);
process.on("SIGINT", graceful);

module.exports = agenda;