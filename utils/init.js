const About = require('../models/about');

module.exports = async function () {

    const aboutCount = await About.countDocuments();

    if (aboutCount === 0) {
        const user = new About({
            nama: 'SISTEM INFORMASI MANAJEMEN KLINIK & RS',
            alias: 'SIMKRS',
        });

        await user.save();
    }

}