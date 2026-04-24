import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  // Retrieve credentials from Vercel Environment variables, with fallbacks for local testing if not set
  const validEmail = process.env.ADMIN_EMAIL || 'admin@mmps.edu.in';
  const validPassword = process.env.ADMIN_PASSWORD || 'mmps@admin123';
  const secret = process.env.JWT_SECRET || 'mmps_super_secret_key_12345';

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  if (email === validEmail && password === validPassword) {
    // Issue a JWT token valid for 24 hours
    const token = jwt.sign(
      { role: 'admin', email: validEmail },
      secret,
      { expiresIn: '24h' }
    );

    return res.status(200).json({
      success: true,
      token,
      user: { email: validEmail, role: 'admin' }
    });
  }

  // Invalid credentials
  return res.status(401).json({ message: 'Invalid email or password' });
}
