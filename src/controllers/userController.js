const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const user = new User(req.body);
    try {
        const { firstName, lastName, email, role, password } = req.body;
        const user = new User({ firstName, lastName, email, role, password });
        const savedUser = await user.save();
        res.status(201).json({ message: 'User registered successfully', userId: savedUser._id });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    
    // Log incoming request
    console.log(`[INFO] Incoming login request: ${JSON.stringify({ email })}`);
    
    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            console.warn(`[WARN] User not found: ${email}`);
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check if password matches
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            console.warn(`[WARN] Invalid password attempt for user: ${email}`);
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, role: user.role }, 'FSAFDA_432432', { expiresIn: '1h' });
        
        // Log successful login
        console.log(`[INFO] User logged in successfully: ${email}`);
        
        // Respond with token
        res.status(200).json({ token });
    } catch (err) {
        console.error(`[ERROR] An error occurred during login: ${err.message}`);
        res.status(500).json({ message: 'Internal server error' });
    }
};

