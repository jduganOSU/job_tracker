const Contact = require('../models/Contact');

const contactService = {
    createContact: async function(contactData) {
        const contact = new Contact(contactData);
        return await contact.save();
    },

    getAllContacts: async function() {
        return await Contact.find().populate('company');
    },

    getContactById: async function(id) {
        return await Contact.findById(id).populate('company');
    },

    updateContact: async function(id, contactData) {
        return await Contact.findByIdAndUpdate(id, contactData, { new: true }).populate('company');
    },

    deleteContact: async function(id) {
        return await Contact.findByIdAndDelete(id);
    }
};

module.exports = contactService;
