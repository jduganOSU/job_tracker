const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');

const contactService = {
    createContact: async function(contactData) {
        const contact = new Contact(contactData);
        return await contact.save();
    },

    getAllContacts: async function() {
        // Populates 'company' to get detailed information about the company for each contact
        return await Contact.find().populate('company');
    },

    getContactById: async function(id) {
        // Retrieves a specific contact by their ID and populate company details
        return await Contact.findById(id).populate('company');
    },

    updateContact: async function(id, contactData) {
        // Updates a contact by their ID with new data, returns the updated document
        return await Contact.findByIdAndUpdate(id, contactData, { new: true });
    },

    deleteContact: async function(id) {
        // Deletes a contact by their ID
        return await Contact.findByIdAndDelete(id);
    }
};

module.exports = contactService;
