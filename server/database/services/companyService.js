const Company = require('../models/Company');

const companyService = {
    createCompany: async function(companyData) {
        const company = new Company(companyData);
        return await company.save();
    },

     // Function to fetch all jobs for a specific user
     getAllCompaniesForUser: async function(userId) {
        return await Company.find({ userId: userId });
    },

    getAllCompanies: async function() {
        return await Company.find();
    },

    getCompanyById: async function(id) {
        return await Company.findById(id);
    },

    updateCompany: async function(id, companyData) {
        return await Company.findByIdAndUpdate(id, companyData, { new: true });
    },

    deleteCompany: async function(id) {
        return await Company.findByIdAndDelete(id);
    }
};

module.exports = companyService;
