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

// Endpoint to retrieve all contacts for the logged-in user
router.get('/', authenticateToken, async (req, res) => {
    try {
        const contacts = await contactService.getAllContactsByUserId(req.user.userId);
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to retrieve a contact by ID
router.get('/:id', authenticateToken, async (req, res) => {
    try {
        const contact = await contactService.getContactById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        if (contact.userId.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to update a contact
router.put('/:id', authenticateToken, async (req, res) => {
    try {
        const contact = await contactService.getContactById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        if (contact.userId.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        const updatedContact = await contactService.updateContact(req.params.id, req.body);
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to delete a contact
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        const contact = await contactService.getContactById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        if (contact.userId.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        await contactService.deleteContact(req.params.id);
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
