const express = require('express');
const service = require('../services/jobService'); 

const router = express.Router();

// Endpoint to create a new job
router.post('/', async (req, res) => {
  try {
    const job = await service.createJob(req.body);
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to retrieve all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await service.getAllJobs();
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
