const jwt = require('jsonwebtoken');

const auth = (roles = []) => {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return (req, res, next) => {
        console.log('Authorization middleware triggered');

        const authHeader = req.headers.authorization;
        if (!authHeader) {
            console.log('No authorization header found');
            return res.status(401).json({ message: 'Access denied' });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            console.log('No token found in authorization header');
            return res.status(401).json({ message: 'Access denied' });
        }

        try {
            console.log('Verifying token...',token);
            const decoded = jwt.verify(token,'FSAFDA_432432');
            console.log('Token verified successfully:', decoded);

            if (roles.length && !roles.includes(decoded.role)) {
                console.log(`User role ${decoded.role} is not authorized for this action`);
                return res.status(403).json({ message: 'Forbidden' });
            }

            req.user = decoded;
            console.log('User authorized:', req.user);
            next();
        } catch (err) {
            console.log('Token verification failed:', err.message);
            res.status(401).json({ message: 'Invalid token' });
        }
    };
};

module.exports = auth;
