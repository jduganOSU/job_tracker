const express = require('express');
const service = require('../services/companyService'); 

const router = express.Router();

// Endpoint to create a new company
router.post('/', async (req, res) => {
  try {
    const company = await service.createCompany(req.body);
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to retrieve all companies
router.get('/', async (req, res) => {
  try {
    const companies = await service.getAllCompanies();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to retrieve a company by ID
router.get('/:id', async (req, res) => {
  try {
    const company = await service.getCompanyById(req.params.id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to update a company
router.put('/:id', async (req, res) => {
  try {
    const updatedCompany = await service.updateCompany(req.params.id, req.body);
    if (!updatedCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json(updatedCompany);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to delete a company
router.delete('/:id', async (req, res) => {
  try {
    await service.deleteCompany(req.params.id);
    res.status(200).json({ message: 'Company deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
