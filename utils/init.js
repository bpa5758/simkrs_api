const companyModel = require('./../models/company');

module.exports = async function () {

    const companyCount = await companyModel.countDocuments();

    if (companyCount === 0) {
        const user = new companyModel({
            nama: 'RS BHAYANGKARA POLDA ACEH',
            alias: 'RSBPA',
        });

        await user.save();
    }

}