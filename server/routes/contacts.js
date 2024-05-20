const express = require('express');
const contactService = require('../database/services/contactService');
const { authenticateToken } = require('../helpers'); // Ensure this path is correct

const router = express.Router();

// Endpoint to create a new contact, with token authentication
router.post('/', authenticateToken, async (req, res) => {
    try {
        const contactData = {
            ...req.body,
            userId: req.user.userId // Assuming the token decoding adds a userId
        };
        const contact = await contactService.createContact(contactData);
        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to retrieve all contacts
router.get('/', authenticateToken, async (req, res) => {
    try {
        const contacts = await contactService.getAllContacts();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to retrieve a contact by ID
router.get('/:id', async (req, res) => {
    try {
        const contact = await contactService.getContactById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to update a contact
router.put('/:id', async (req, res) => {
    try {
        const updatedContact = await contactService.updateContact(req.params.id, req.body);
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to delete a contact
router.delete('/:id', async (req, res) => {
    try {
        await contactService.deleteContact(req.params.id);
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
