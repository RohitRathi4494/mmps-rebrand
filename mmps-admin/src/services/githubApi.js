const getHeaders = () => {
  const sessionData = localStorage.getItem('mmps_admin_session');
  let token = '';
  if (sessionData) {
    try {
      token = JSON.parse(sessionData).token;
    } catch (e) {}
  }
  
  if (!token) throw new Error('Not authenticated.');
  return {
    'Authorization': `Bearer ${token}`,
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
    const res = await fetch(`/api/github`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ action: 'GET', path })
    });

    if (res.status === 404) {
      return null;
    }

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || `Failed to fetch ${path}`);
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
      action: 'PUT',
      path,
      message,
      content: toBase64(contentStr),
      sha
    };

    const res = await fetch(`/api/github`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || `Failed to save ${path}`);
    }

    return await res.json();
  } catch (err) {
    console.error('saveGitHubFile error:', err);
    throw err;
  }
};

/**
 * Upload a media file (image) to public/media/ on GitHub
 * @param {string} base64Data - Base64 encoded file content
 * @param {string} fileName - Destination filename
 */
export const uploadMedia = async (base64Data, fileName) => {
  try {
    // Strip the data URL prefix if present (e.g., data:image/png;base64,)
    const cleanBase64 = base64Data.replace(/^data:image\/\w+;base64,/, '');
    const path = `public/media/${fileName}`;
    
    const body = {
      action: 'PUT',
      path,
      message: `Upload media ${fileName} via Admin Dashboard`,
      content: cleanBase64
    };

    const res = await fetch(`/api/github`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || `Failed to upload ${fileName}`);
    }

    const data = await res.json();
    // Return the relative path that the website can use
    return `/media/${fileName}`;
  } catch (err) {
    console.error('uploadMedia error:', err);
    throw err;
  }
};
