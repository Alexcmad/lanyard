const jwt = require('jsonwebtoken');

// Middleware to authenticate user using JWT
const auth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Fix here

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, "lanyard"); // Ensure you have a secret key
        req.user = decoded; // Attach the decoded user data (e.g., user ID) to req.user
        next();
    } catch (err) {
        res.status(400).json({ error: 'Invalid token.' });
    }
};

module.exports = auth;
