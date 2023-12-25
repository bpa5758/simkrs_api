async function seed() {
    await User.create({
        username: 'admin',
        password: 'password123', // hashed password
    });
}

seed();