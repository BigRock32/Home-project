const router = require('express').Router();
const {
   createUser,
   findUserByEmail,
   verifyPassword,
   generateToken,
   findUserById
} = require('../auth');
const { authenticateToken } = require('../middleware/auth');

router.post('/register', async (req, res) => {
   try {
      const { email, password, name } = req.body;

      if (!email || !password || !name) {
         return res.status(400).json({
            error: 'Email, password and name are required'
         });
      }

      if (password.length < 6) {
         return res.status(400).json({
            error: 'Password must be at least 6 characters long'
         });
      }

      const user = await createUser(email, password, name);
      const token = generateToken(user.id);

      res.status(201).json({
         user: {
            id: user.id,
            email: user.email,
            name: user.name
         },
         token
      });
   } catch (error) {
      if (error.message === 'User with this email already exists') {
         return res.status(409).json({
            error: 'User with this email already exists'
         });
      }

      res.status(500).json({
         error: 'Internal server error'
      });
   }
});

router.post('/login', async (req, res) => {
   try {
      const { email, password } = req.body;

      if (!email || !password) {
         return res.status(400).json({
            error: 'Email and password are required'
         });
      }

      const user = findUserByEmail(email);
      if (!user) {
         return res.status(401).json({
            error: 'Invalid email or password'
         });
      }

      const isPasswordValid = await verifyPassword(password, user.password);
      if (!isPasswordValid) {
         return res.status(401).json({
            error: 'Invalid email or password'
         });
      }

      const token = generateToken(user.id);

      res.json({
         user: {
            id: user.id,
            email: user.email,
            name: user.name
         },
         token
      });
   } catch (error) {
      res.status(500).json({
         error: 'Internal server error'
      });
   }
});

router.get('/me', authenticateToken, (req, res) => {
   res.json({
      user: req.user
   });
});

module.exports = router;

