const express = require('express');
const service = require('../database/services/jobService'); 
const { authenticateToken } = require('../helpers'); // make sure this path is correct

const router = express.Router();

// Endpoint to create a new job, with token authentication
router.post('/', authenticateToken, async (req, res) => {
  try {
    // Include user ID in the job data or use it otherwise
    const jobData = {
      ...req.body,
      userId: req.user.userId // Assuming the token decoding adds a userId
    };

    const job = await service.createJob(jobData);
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to retrieve all jobs for user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const jobs = await service.getAllJobsForUser(userId);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to retrieve a job by ID
router.get('/:id', async (req, res) => {
  try {
    const job = await service.getJobById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to update a job
router.put('/:id', async (req, res) => {
  try {
    const updatedJob = await service.updateJob(req.params.id, req.body);
    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to delete a job
router.delete('/:id', async (req, res) => {
  try {
    await service.deleteJob(req.params.id);
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
