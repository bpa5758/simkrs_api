const { response } = require("../utils/response");
const companyModel = require("../models/company");

module.exports = {
    getCompanyData: async (req, res) => {
        try {
            const data = await companyModel.findOne();
            return response(200, "Ok", data, res);
        } catch (error) {
            return response(400, "error", error, res);
        }
    },

}