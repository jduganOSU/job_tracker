const express = require('express');
const service = require('../database/services/companyService'); 
const { authenticateToken } = require('../helpers'); // make sure this path is correct

const router = express.Router();

// Endpoint to create a new company
router.post('/', authenticateToken, async (req, res) => {
  try {
    // Include user ID in the company data or use it otherwise
    const companyData = {
      ...req.body,
      userId: req.user.userId // Assuming the token decoding adds a userId
    };
    const company = await service.createCompany(companyData);
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to retrieve all companies for user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const companies = await service.getAllCompaniesForUser(userId);
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
