const Contact = require('../models/contact');

const contactService = {
    createContact: async function(contactData) {
        try {
            const contact = new Contact(contactData);
            return await contact.save();
        } catch (error) {
            console.error('Error saving contact:', error);
            throw error;
        }
    },

    getAllContacts: async function() {
        return await Contact.find().populate('company');
    },

    getAllContactsByUserId: async function(userId) {
        return await Contact.find({ userId: userId }).populate('company');
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
