import express from "express";
import { login } from '../controllers/auth.js';
import { updateChanelData, getAllChanels } from '../controllers/chanel.js';
import { sendOtpController } from '../controllers/otpController.js';

const routes = express.Router();

// Routes for phone login
routes.post('/login/phone', sendOtpController);

// Routes for Google login
routes.post('/login/google', login);

// Other routes
// routes.post('/login', login);  // This might need to be adjusted based on your requirements
routes.patch('/update/:id', updateChanelData);
routes.get('/getAllChanels', getAllChanels);

export default routes;

