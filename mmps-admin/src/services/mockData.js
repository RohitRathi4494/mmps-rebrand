// Mock data store — mirrors what your Sveltia CMS JSON files would contain.
// Replace these functions with real Axios API calls when you have a backend.

const delay = (ms = 500) => new Promise(r => setTimeout(r, ms));

let _announcements = [
  { id: 1, title: 'School Reopens After Summer Break', content: 'School will reopen on July 1, 2026 for all classes.', date: '2026-06-20', priority: 'High', active: true },
  { id: 2, title: 'Annual Sports Day Registration', content: 'Registration for Annual Sports Day 2026 is now open.', date: '2026-05-15', priority: 'Medium', active: true },
  { id: 3, title: 'Parent-Teacher Meeting', content: 'PTM scheduled for April 30, 2026 from 9 AM to 1 PM.', date: '2026-04-20', priority: 'High', active: true },
  { id: 4, title: 'Library Closed for Renovation', content: 'The school library will remain closed from May 5–12.', date: '2026-05-01', priority: 'Low', active: false },
];

let _blogs = [
  { id: 1, title: 'Welcome to MMPS Blogs', slug: 'welcome-to-mmps', excerpt: 'Discover stories, achievements and news from our school community.', content: '<p>Welcome to the official MMPS blog!</p>', author: 'MMPS Administration', category: 'General', tags: ['welcome'], image: null, status: 'published', date: '2026-04-01' },
  { id: 2, title: 'Annual Science Fair 2026 Highlights', slug: 'science-fair-2026', excerpt: 'Students showcased extraordinary projects this year.', content: '<p>The Annual Science Fair was a resounding success...</p>', author: 'Ms. Priya Sharma', category: 'Academics', tags: ['science', 'students'], image: null, status: 'draft', date: '2026-04-10' },
];

let _faculty = [
  { id: 1, name: 'Dr. Sunita Mehta', designation: 'Principal', department: 'Administration', qualification: 'Ph.D. Education', email: 'principal@mmps.edu.in', phone: '9810012345', bio: 'Dr. Mehta has 25 years of experience in educational leadership.', order: 1, active: true, photo: null },
  { id: 2, name: 'Mr. Rajesh Gupta', designation: 'Senior Teacher', department: 'Mathematics', qualification: 'M.Sc. Mathematics, B.Ed', email: 'rgupta@mmps.edu.in', phone: '9810056789', bio: 'Specializes in advanced mathematics for Grades X–XII.', order: 2, active: true, photo: null },
  { id: 3, name: 'Ms. Kavita Nair', designation: 'Science Teacher', department: 'Science', qualification: 'M.Sc. Physics, B.Ed', email: 'knair@mmps.edu.in', phone: '9810098765', bio: '15 years of experience in teaching Physics and Chemistry.', order: 3, active: true, photo: null },
];

let _events = [
  { id: 1, title: 'Annual Sports Day 2026', description: 'A celebration of athletic talent and school spirit.', date: '2026-11-15', endDate: '2026-11-15', location: 'School Grounds', category: 'Sports', image: null, active: true },
  { id: 2, title: 'Independence Day Celebration', description: 'Flag hoisting and cultural programs by students.', date: '2026-08-15', endDate: '2026-08-15', location: 'Main Auditorium', category: 'Cultural', image: null, active: true },
  { id: 3, title: 'Board Exam Prep Workshop', description: 'Intensive prep workshop for Class X and XII students.', date: '2026-09-01', endDate: '2026-09-03', location: 'Classrooms', category: 'Academic', image: null, active: true },
];

let _achievements = [
  { id: 1, title: '100% Board Results 2025-26', description: 'All MMPS students cleared their board exams with distinction.', date: '2026-05-20', category: 'Academic', studentName: '', grade: '', image: null, active: true },
  { id: 2, title: 'State Level Chess Championship', description: 'Aryan Sharma won gold at the Haryana State Chess Championship.', date: '2026-03-10', category: 'Sports', studentName: 'Aryan Sharma', grade: 'X', image: null, active: true },
];

let _testimonials = [
  { id: 1, name: 'Mrs. Anjali Kapoor', role: 'Parent', content: 'MMPS has been a second home for my daughter. The teachers are dedicated and the environment is nurturing.', rating: 5, photo: null, active: true },
  { id: 2, name: 'Rohit Saxena', role: 'Alumni', content: 'The foundation I built at MMPS helped me excel at IIT Delhi. I am forever grateful.', rating: 5, photo: null, active: true },
];

let _gallery = [
  { id: 1, title: 'Annual Function 2025', url: null, category: 'Events', description: '' },
  { id: 2, title: 'Sports Day Trophy Ceremony', url: null, category: 'Sports', description: '' },
];

let _contact = {
  address: 'MM Public School, Sector 4,\nUrban Estate, Gurugram,\nHaryana - 122001, India',
  mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.8770732442436!2d77.021008076127!3d28.453118192209732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d6756610dd%3A0xc3c5756610dd0000!2sMM%20Public%20School%2C%20Sector%204!5e0!3m2!1sen!2sin!4v1713689234567!5m2!1sen!2sin',
  email: 'info@mmps.edu.in',
  phones: [{ phone: '0124-4570666' }, { phone: '0124-4270666' }, { phone: '+91 93109 53788 (WhatsApp)' }],
  facebook: 'https://facebook.com/mmpsgurugram',
  instagram: 'https://instagram.com/mmpsgurugram',
  youtube: 'https://youtube.com/@mmpsgurugram',
  timings: 'Monday – Saturday: 08:00 AM – 03:00 PM',
};

let _hero = {
  badge: 'Admissions Open · Session 2026-27',
  title: 'Where Vision',
  highlight: 'Meets Values',
  subtitle: "Shaping global citizens with strong roots and global wings \u2014 Gurugram's trusted name in CBSE education since 1992.",
  stats: [
    { value: '800+', label: 'Students', emoji: '🎓' },
    { value: '5 Acres', label: 'Green Campus', emoji: '🌿' },
    { value: '30+', label: 'Years of Legacy', emoji: '🏆' },
    { value: '100%', label: 'Board Results', emoji: '📊' },
  ],
};

let _nextId = 100;
const genId = () => ++_nextId;

// ─── Stats ──────────────────────────────────────────────
export const getStats = async () => {
  await delay(300);
  return {
    announcements: _announcements.length,
    blogs: _blogs.length,
    faculty: _faculty.length,
    events: _events.length,
    achievements: _achievements.length,
    testimonials: _testimonials.length,
    gallery: _gallery.length,
    published: _blogs.filter(b => b.status === 'published').length,
  };
};

// ─── Announcements ───────────────────────────────────────
export const getAnnouncements = async () => { await delay(300); return [..._announcements]; };
export const createAnnouncement = async (data) => { await delay(400); const item = { ...data, id: genId() }; _announcements.unshift(item); return item; };
export const updateAnnouncement = async (id, data) => { await delay(400); _announcements = _announcements.map(a => a.id === id ? { ...a, ...data } : a); return _announcements.find(a => a.id === id); };
export const deleteAnnouncement = async (id) => { await delay(300); _announcements = _announcements.filter(a => a.id !== id); };

// ─── Blog ────────────────────────────────────────────────
export const getBlogs = async () => { await delay(300); return [..._blogs]; };
export const getBlog = async (id) => { await delay(200); return _blogs.find(b => b.id === +id); };
export const createBlog = async (data) => { await delay(500); const item = { ...data, id: genId(), date: new Date().toISOString().split('T')[0] }; _blogs.unshift(item); return item; };
export const updateBlog = async (id, data) => { await delay(400); _blogs = _blogs.map(b => b.id === id ? { ...b, ...data } : b); return _blogs.find(b => b.id === id); };
export const deleteBlog = async (id) => { await delay(300); _blogs = _blogs.filter(b => b.id !== id); };

// ─── Faculty ─────────────────────────────────────────────
export const getFaculty = async () => { await delay(300); return [..._faculty].sort((a,b) => a.order - b.order); };
export const createFaculty = async (data) => { await delay(400); const item = { ...data, id: genId(), order: _faculty.length + 1 }; _faculty.push(item); return item; };
export const updateFaculty = async (id, data) => { await delay(400); _faculty = _faculty.map(f => f.id === id ? { ...f, ...data } : f); return _faculty.find(f => f.id === id); };
export const deleteFaculty = async (id) => { await delay(300); _faculty = _faculty.filter(f => f.id !== id); };

// ─── Events ──────────────────────────────────────────────
export const getEvents = async () => { await delay(300); return [..._events]; };
export const createEvent = async (data) => { await delay(400); const item = { ...data, id: genId() }; _events.unshift(item); return item; };
export const updateEvent = async (id, data) => { await delay(400); _events = _events.map(e => e.id === id ? { ...e, ...data } : e); return _events.find(e => e.id === id); };
export const deleteEvent = async (id) => { await delay(300); _events = _events.filter(e => e.id !== id); };

// ─── Achievements ────────────────────────────────────────
export const getAchievements = async () => { await delay(300); return [..._achievements]; };
export const createAchievement = async (data) => { await delay(400); const item = { ...data, id: genId() }; _achievements.unshift(item); return item; };
export const updateAchievement = async (id, data) => { await delay(400); _achievements = _achievements.map(a => a.id === id ? { ...a, ...data } : a); return _achievements.find(a => a.id === id); };
export const deleteAchievement = async (id) => { await delay(300); _achievements = _achievements.filter(a => a.id !== id); };

// ─── Testimonials ────────────────────────────────────────
export const getTestimonials = async () => { await delay(300); return [..._testimonials]; };
export const createTestimonial = async (data) => { await delay(400); const item = { ...data, id: genId() }; _testimonials.unshift(item); return item; };
export const updateTestimonial = async (id, data) => { await delay(400); _testimonials = _testimonials.map(t => t.id === id ? { ...t, ...data } : t); return _testimonials.find(t => t.id === id); };
export const deleteTestimonial = async (id) => { await delay(300); _testimonials = _testimonials.filter(t => t.id !== id); };

// ─── Gallery ─────────────────────────────────────────────
export const getGallery = async () => { await delay(300); return [..._gallery]; };
export const addGalleryItem = async (data) => { await delay(400); const item = { ...data, id: genId() }; _gallery.unshift(item); return item; };
export const deleteGalleryItem = async (id) => { await delay(300); _gallery = _gallery.filter(g => g.id !== id); };

// ─── Contact ─────────────────────────────────────────────
export const getContact = async () => { await delay(200); return { ..._contact }; };
export const updateContact = async (data) => { await delay(400); _contact = { ..._contact, ...data }; return _contact; };

// ─── Hero ────────────────────────────────────────────────
export const getHero = async () => { await delay(200); return { ..._hero }; };
export const updateHero = async (data) => { await delay(400); _hero = { ..._hero, ...data }; return _hero; };
