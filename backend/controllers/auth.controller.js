export const signup = (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    newUser.save((err, user) => {
        if (err) {
            return res.status(400).send(err);
        }
        res.send(user);
    });
};