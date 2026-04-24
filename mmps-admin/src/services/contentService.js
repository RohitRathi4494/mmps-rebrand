import { getGitHubFile, saveGitHubFile } from './githubApi';

// ─── Hero ────────────────────────────────────────────────
const HERO_PATH = 'src/content/pages/home.json';

export const getHero = async () => {
  const file = await getGitHubFile(HERO_PATH);
  // If it doesn't exist yet on GitHub, return a safe fallback structure
  if (!file) {
    return {
      data: {
        badge: 'Admissions Open', title: 'Welcome', highlight: 'To MMPS', subtitle: '', stats: []
      },
      sha: null
    };
  }
  return { data: file.content, sha: file.sha };
};

export const updateHero = async (data, sha) => {
  return await saveGitHubFile(HERO_PATH, data, 'Update Hero Section via Admin Dashboard', sha);
};

// ─── Contact ─────────────────────────────────────────────
const CONTACT_PATH = 'src/content/pages/contact.json';

export const getContact = async () => {
  const file = await getGitHubFile(CONTACT_PATH);
  if (!file) {
    return {
      data: {
        address: '', mapLink: '', email: '', phones: [], facebook: '', instagram: '', youtube: '', timings: ''
      },
      sha: null
    };
  }
  return { data: file.content, sha: file.sha };
};

export const updateContact = async (data, sha) => {
  return await saveGitHubFile(CONTACT_PATH, data, 'Update Contact Info via Admin Dashboard', sha);
};

// ─── Collection Manager helper ───────────────────────────

const getCollection = async (path) => {
  const file = await getGitHubFile(path);
  if (!file) return { data: [], sha: null };
  return { data: Array.isArray(file.content) ? file.content : [], sha: file.sha };
};

const saveCollectionItem = async (path, item, action, subject) => {
  const file = await getCollection(path);
  let newData = [...file.data];
  
  if (action === 'create') {
    item.id = Date.now(); // Simple unique ID
    newData.unshift(item);
  } else if (action === 'update') {
    newData = newData.map(existing => existing.id === item.id ? { ...existing, ...item } : existing);
  } else if (action === 'delete') {
    newData = newData.filter(existing => existing.id !== item.id);
  }

  await saveGitHubFile(path, newData, `${action === 'create' ? 'Add' : action === 'update' ? 'Update' : 'Delete'} ${subject} via Admin Dashboard`, file.sha);
};

// ─── Announcements ───────────────────────────────────────
const ANNOUNCEMENTS_PATH = 'src/content/data/announcements.json';

export const getAnnouncements = async () => (await getCollection(ANNOUNCEMENTS_PATH)).data;
export const createAnnouncement = async (data) => saveCollectionItem(ANNOUNCEMENTS_PATH, data, 'create', 'Announcement');
export const updateAnnouncement = async (id, data) => saveCollectionItem(ANNOUNCEMENTS_PATH, { ...data, id }, 'update', 'Announcement');
export const deleteAnnouncement = async (id) => saveCollectionItem(ANNOUNCEMENTS_PATH, { id }, 'delete', 'Announcement');

// ─── Blogs ───────────────────────────────────────────────
const BLOGS_PATH = 'src/content/data/blogs.json';

export const getBlogs = async () => (await getCollection(BLOGS_PATH)).data;
export const createBlog = async (data) => saveCollectionItem(BLOGS_PATH, data, 'create', 'Blog Post');
export const updateBlog = async (id, data) => saveCollectionItem(BLOGS_PATH, { ...data, id }, 'update', 'Blog Post');
export const deleteBlog = async (id) => saveCollectionItem(BLOGS_PATH, { id }, 'delete', 'Blog Post');

// ─── Events ──────────────────────────────────────────────
const EVENTS_PATH = 'src/content/data/events.json';
export const getEvents = async () => (await getCollection(EVENTS_PATH)).data;
export const createEvent = async (data) => saveCollectionItem(EVENTS_PATH, data, 'create', 'Event');
export const updateEvent = async (id, data) => saveCollectionItem(EVENTS_PATH, { ...data, id }, 'update', 'Event');
export const deleteEvent = async (id) => saveCollectionItem(EVENTS_PATH, { id }, 'delete', 'Event');

// ─── Achievements ────────────────────────────────────────
const ACHIEVEMENTS_PATH = 'src/content/data/achievements.json';
export const getAchievements = async () => (await getCollection(ACHIEVEMENTS_PATH)).data;
export const createAchievement = async (data) => saveCollectionItem(ACHIEVEMENTS_PATH, data, 'create', 'Achievement');
export const updateAchievement = async (id, data) => saveCollectionItem(ACHIEVEMENTS_PATH, { ...data, id }, 'update', 'Achievement');
export const deleteAchievement = async (id) => saveCollectionItem(ACHIEVEMENTS_PATH, { id }, 'delete', 'Achievement');

// ─── Faculty ─────────────────────────────────────────────
const FACULTY_PATH = 'src/content/data/faculty.json';
export const getFaculty = async () => (await getCollection(FACULTY_PATH)).data;
export const createFaculty = async (data) => saveCollectionItem(FACULTY_PATH, data, 'create', 'Faculty Member');
export const updateFaculty = async (id, data) => saveCollectionItem(FACULTY_PATH, { ...data, id }, 'update', 'Faculty Member');
export const deleteFaculty = async (id) => saveCollectionItem(FACULTY_PATH, { id }, 'delete', 'Faculty Member');

// ─── Testimonials ────────────────────────────────────────
const TESTIMONIALS_PATH = 'src/content/data/testimonials.json';
export const getTestimonials = async () => (await getCollection(TESTIMONIALS_PATH)).data;
export const createTestimonial = async (data) => saveCollectionItem(TESTIMONIALS_PATH, data, 'create', 'Testimonial');
export const updateTestimonial = async (id, data) => saveCollectionItem(TESTIMONIALS_PATH, { ...data, id }, 'update', 'Testimonial');
export const deleteTestimonial = async (id) => saveCollectionItem(TESTIMONIALS_PATH, { id }, 'delete', 'Testimonial');

// ─── Gallery ─────────────────────────────────────────────
const GALLERY_PATH = 'src/content/data/gallery.json';
export const getGallery = async () => (await getCollection(GALLERY_PATH)).data;
export const addGalleryItem = async (data) => saveCollectionItem(GALLERY_PATH, data, 'create', 'Gallery Photo');
export const deleteGalleryItem = async (id) => saveCollectionItem(GALLERY_PATH, { id }, 'delete', 'Gallery Photo');

// ─── Stats ───────────────────────────────────────────────
export const getStats = async () => {
  const [a, b, f, e, ac, t, g] = await Promise.all([
    getAnnouncements(), getBlogs(), getFaculty(), getEvents(), getAchievements(), getTestimonials(), getGallery()
  ]);
  return {
    announcements: a.length, blogs: b.length, published: b.filter(x => x.status === 'published').length,
    faculty: f.length, events: e.length, achievements: ac.length, testimonials: t.length, gallery: g.length
  };
};
