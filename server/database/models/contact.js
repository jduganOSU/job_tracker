const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: { type: String, required: true },
    company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true } // Ensure this matches your user reference
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
