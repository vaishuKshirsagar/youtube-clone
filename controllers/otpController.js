import mongoose from 'mongoose';
import twilio from 'twilio';
import dotenv from "dotenv";

dotenv.config();
const accountSid = 'AC508bd9d736ea7e34c29b5824d1beea7c';
const authToken = '58dc55a4b14ea1591d49ef3add31fb65';
const twilioPhoneNumber = '+12244125439';

const client = twilio(accountSid, authToken);

export const sendOtpController = async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Send the OTP via SMS
    const message = await client.messages.create({
      body: `Your OTP for login is: ${otp}`,
      from: twilioPhoneNumber,
      to: phoneNumber,
    });

    // Respond with success message
    res.status(200).json({ success: true, message: 'OTP sent successfully.' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

