const Job = require('../models/Job');

const jobService = {
    createJob: async function(jobData) {
        const job = new Job(jobData);
        return await job.save();
    },

    // Function to fetch all jobs for a specific user
    getAllJobsForUser: async function(userId) {
        return await Job.find({ userId: userId });
    },

    getAllJobs: async function() {
        return await Job.find().populate('company skills');
    },

    getJobById: async function(id) {
        return await Job.findById(id).populate('company skills');
    },

    updateJob: async function(id, jobData) {
        return await Job.findByIdAndUpdate(id, jobData, { new: true }).populate('company skills');
    },

    deleteJob: async function(id) {
        return await Job.findByIdAndDelete(id);
    }
};

module.exports = jobService;
