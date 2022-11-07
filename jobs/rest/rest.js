const restJobHandler = require("./rest.handler");

module.exports = async function (agenda) {
    const restJobs = await agenda.jobs({});
    
    restJobs.forEach(job => {
        agenda.define(job.attrs.name, restJobHandler);
    });
};