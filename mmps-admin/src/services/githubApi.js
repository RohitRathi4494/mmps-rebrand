const REPO_OWNER = 'RohitRathi4494';
const REPO_NAME = 'mmps-rebrand';
const BRANCH = 'main';

const getToken = () => {
  try {
    const session = JSON.parse(localStorage.getItem('mmps_github_session'));
    return session?.token || '';
  } catch {
    return '';
  }
};

const getHeaders = () => {
  const token = getToken();
  if (!token) throw new Error('Not authenticated with GitHub.');
  return {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  };
};

/**
 * Safely encode UTF-8 string to Base64
 */
export const toBase64 = (str) => {
  return btoa(unescape(encodeURIComponent(str)));
};

/**
 * Safely decode Base64 to UTF-8 string
 */
export const fromBase64 = (b64) => {
  // GitHub returns base64 with newlines, remove them
  const scrubbed = b64.replace(/\n/g, '');
  return decodeURIComponent(escape(atob(scrubbed)));
};

/**
 * Get a file from GitHub
 * @param {string} path - path inside the repo (e.g. 'src/content/pages/home.json')
 */
export const getGitHubFile = async (path) => {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${BRANCH}`, {
      headers: getHeaders()
    });

    if (res.status === 404) {
      return null; // File doesn't exist yet
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch ${path}: ${res.statusText}`);
    }

    const data = await res.json();
    const content = fromBase64(data.content);
    return {
      content: JSON.parse(content),
      sha: data.sha
    };
  } catch (err) {
    console.error('getGitHubFile error:', err);
    throw err;
  }
};

/**
 * Create or update a file on GitHub
 * @param {string} path - path inside the repo
 * @param {object} contentObj - JSON object to save
 * @param {string} message - commit message
 * @param {string} sha - optional SHA if updating existing file
 */
export const saveGitHubFile = async (path, contentObj, message, sha = null) => {
  try {
    const contentStr = JSON.stringify(contentObj, null, 2);
    const body = {
      message: message,
      content: toBase64(contentStr),
      branch: BRANCH
    };

    if (sha) {
      body.sha = sha;
    }

    const res = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(`Failed to save ${path}: ${errorData.message}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error('saveGitHubFile error:', err);
    throw err;
  }
};
