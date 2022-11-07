const axios = require("axios");

const restJobHandler = async (job) => {
    console.log(job)
    // const data = job?.attrs?.data;
    // const endpoint = data?.endpoint;
    // const response = await axios(endpoint);
    console.log(job.name);
    console.log(response);
};

module.exports.restJobHandler = restJobHandler;