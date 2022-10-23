app.post('/login-user', async (req, res) => {
    const { email, password } = req.body;

    // To find if user has email/password
    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ error: 'User Not Found' });
    }
    if (!password) {
        return res.json({ status: 'error', error: 'Invalid Password' });
    }
});
