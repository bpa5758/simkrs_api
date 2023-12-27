const About = require('../models/about');

module.exports = async function () {

    const aboutCount = await About.countDocuments();

    if (aboutCount === 0) {
        const user = new About({
            nama: 'RS BHAYANGKARA POLDA NAD',
            alias: 'SIMRS',
            keterangan: 'SISTEM INFORMASI MANAJEMEN RS',
            img: '1.png',
        });

        await user.save();
    }

}