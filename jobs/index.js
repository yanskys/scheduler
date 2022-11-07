const restJob = require("./rest/rest");

function jobs(agenda) {
    restJob(agenda);
}

module.exports.jobs = jobs;