const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { nanoid } = require('nanoid');
const fs = require('fs');
const path = require('path');

const USERS_FILE = path.join(__dirname, '../data/users.json');
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

const ensureUsersFile = () => {
   const dir = path.dirname(USERS_FILE);
   if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
   }
   if (!fs.existsSync(USERS_FILE)) {
      fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
   }
};

const readUsers = () => {
   ensureUsersFile();
   try {
      const data = fs.readFileSync(USERS_FILE, 'utf8');
      return JSON.parse(data);
   } catch (error) {
      return [];
   }
};

const writeUsers = (users) => {
   ensureUsersFile();
   fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

const findUserByEmail = (email) => {
   const users = readUsers();
   return users.find(user => user.email === email);
};

const findUserById = (id) => {
   const users = readUsers();
   return users.find(user => user.id === id);
};

const createUser = async (email, password, name) => {
   const users = readUsers();

   if (findUserByEmail(email)) {
      throw new Error('User with this email already exists');
   }

   const hashedPassword = await bcrypt.hash(password, 10);
   const newUser = {
      id: nanoid(),
      email,
      password: hashedPassword,
      name,
      createdAt: new Date().toISOString()
   };

   users.push(newUser);
   writeUsers(users);

   const { password: _, ...userWithoutPassword } = newUser;
   return userWithoutPassword;
};

const verifyPassword = async (password, hashedPassword) => {
   return await bcrypt.compare(password, hashedPassword);
};

const generateToken = (userId) => {
   return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
};

const verifyToken = (token) => {
   try {
      return jwt.verify(token, JWT_SECRET);
   } catch (error) {
      return null;
   }
};

module.exports = {
   findUserByEmail,
   findUserById,
   createUser,
   verifyPassword,
   generateToken,
   verifyToken,
   readUsers
};