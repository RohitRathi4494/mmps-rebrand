import jwt from 'jsonwebtoken';

const REPO_OWNER = 'RohitRathi4494';
const REPO_NAME = 'mmps-rebrand';
const BRANCH = 'main';

export default async function handler(req, res) {
  // Only allow POST requests for this generic proxy endpoint
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // 1. Verify Authentication
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing Authorization header' });
  }

  const token = authHeader.split(' ')[1];
  const secret = process.env.JWT_SECRET || 'mmps_super_secret_key_12345';

  try {
    jwt.verify(token, secret);
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired session token' });
  }

  // 2. Extract GitHub Proxy arguments
  const { action, path, content, message, sha } = req.body;
  const githubToken = process.env.GITHUB_TOKEN;

  if (!githubToken) {
    console.error('GITHUB_TOKEN Vercel environment variable is missing.');
    return res.status(500).json({ message: 'Server configured incorrectly. Missing GitHub Access Token.' });
  }

  if (!action || !path) {
    return res.status(400).json({ message: 'Missing target action or path' });
  }

  const GITHUB_API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`;
  const githubHeaders = {
    'Authorization': `Bearer ${githubToken}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
    'User-Agent': 'MMPS-Admin-Dashboard'
  };

  try {
    if (action === 'GET') {
      const url = `${GITHUB_API_URL}?ref=${BRANCH}`;
      const response = await fetch(url, { headers: githubHeaders });

      if (response.status === 404) {
        return res.status(404).json({ message: 'File not found' });
      }

      if (!response.ok) {
        throw new Error(`GitHub API Error: ${response.statusText}`);
      }

      const data = await response.json();
      return res.status(200).json(data);

    } else if (action === 'PUT') {
      const body = {
        message: message || `Update ${path} via Admin Dashboard`,
        content: content,
        branch: BRANCH
      };

      if (sha) {
        body.sha = sha;
      }

      const response = await fetch(GITHUB_API_URL, {
        method: 'PUT',
        headers: githubHeaders,
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(`GitHub API Error: ${errData.message || response.statusText}`);
      }

      const data = await response.json();
      return res.status(200).json(data);

    } else {
      return res.status(400).json({ message: 'Invalid action. Use GET or PUT.' });
    }

  } catch (err) {
    console.error('GitHub Proxy Error:', err.message);
    return res.status(500).json({ message: err.message });
  }
}
