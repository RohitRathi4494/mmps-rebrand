import React from 'react';
import PageHero from '../components/ui/PageHero';
import { Newspaper, Calendar, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    date: 'April 10, 2025',
    category: 'Academics',
    title: 'How MMPS Prepares Students for the AI-Driven Future',
    excerpt: 'From coding clubs to AI workshops, here\'s how our curriculum is evolving to equip students with the skills they\'ll need in tomorrow\'s world.',
    image: '/images/classroom.png',
    readTime: '4 min read',
  },
  {
    date: 'March 22, 2025',
    category: 'Sports',
    title: 'XXIV MMMICT 2024 — A Tournament to Remember',
    excerpt: 'The annual inter-school cricket tournament saw participation from 24 schools. A detailed recap of the matches, highlights, and the winning team\'s story.',
    image: '/images/cricket-tournament.png',
    readTime: '6 min read',
  },
  {
    date: 'March 5, 2025',
    category: 'Student Stories',
    title: '5 MMPS Alumni Who Are Making a Difference',
    excerpt: 'We trace the journeys of five outstanding MMPS alumni who have gone on to pursue careers in medicine, engineering, arts, and social entrepreneurship.',
    image: '/images/investiture-ceremony.png',
    readTime: '5 min read',
  },
  {
    date: 'February 15, 2025',
    category: 'School Life',
    title: 'Behind the Scenes: How Investiture Ceremony is Organised',
    excerpt: 'An exclusive look at the months of preparation, rehearsals, and teamwork that go into MMPS\'s annual Investiture Ceremony — from the students who live it.',
    image: '/images/scholarship-test.png',
    readTime: '3 min read',
  },
  {
    date: 'January 28, 2025',
    category: 'Parenting Tips',
    title: 'Building Study Habits That Last: A Guide for Parents',
    excerpt: 'Our school counselor shares research-backed strategies to help your child develop consistent, healthy study habits from an early age.',
    image: '/images/faculty.png',
    readTime: '7 min read',
  },
  {
    date: 'January 10, 2025',
    category: 'Events',
    title: 'Annual Day 2025 — A Celebration of Talent and Pride',
    excerpt: 'This year\'s Annual Day at MMPS was a spectacular showcase of music, dance, drama, and creative expression. See highlights from the evening.',
    image: '/images/holistic.png',
    readTime: '4 min read',
  },
];

const categoryColors = {
  Academics: 'bg-primary/10 text-primary',
  Sports: 'bg-green-100 text-green-700',
  'Student Stories': 'bg-purple-100 text-purple-700',
  'School Life': 'bg-sky-100 text-sky-700',
  'Parenting Tips': 'bg-amber-100 text-amber-700',
  Events: 'bg-accent/10 text-accent',
};

import cmsBlogs from '../content/data/blogs.json';

const cmsPosts = cmsBlogs
  .filter(post => post.status === 'published')
  .map(post => {
    const formattedDate = post.date 
      ? new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
      : 'Recently Added';

    return {
      date: formattedDate,
      category: post.category || 'Updates',
      title: post.title || 'Untitled',
      excerpt: post.excerpt || (post.content && post.content.replace(/<[^>]*>/g, '').substring(0, 120) + '...') || 'No description provided.',
      image: post.image || '/school.webp',
      readTime: 'New Post',
    };
  });

// Combine dynamic posts first (newest to oldest), then fallback static posts
const allPosts = [...cmsPosts, ...posts];

export default function Blog() {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHero
        title="School Blog"
        subtitle="Stories, insights, and updates from the heart of M M Public School — by our teachers, students, and community."
      />

      <section className="py-12 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Post */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 mb-12 lg:grid lg:grid-cols-2">
            <div className="relative overflow-hidden aspect-video lg:aspect-auto border-r border-gray-100">
              <img
                src={allPosts[0].image}
                alt={allPosts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-5 left-5">
                <span className="px-3 py-1.5 bg-accent text-white text-xs font-heading font-bold rounded-full shadow-lg">
                  Featured Post
                </span>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-heading font-medium ${categoryColors[allPosts[0].category] || 'bg-gray-100 text-gray-700'}`}>
                  {allPosts[0].category}
                </span>
                <span className="font-body text-xs text-gray-400 flex items-center gap-1">
                  <Calendar size={12} /> {allPosts[0].date}
                </span>
              </div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-4 leading-tight">
                {allPosts[0].title}
              </h2>
              <p className="font-body text-navy/60 leading-relaxed mb-6">{allPosts[0].excerpt}</p>
              <div className="flex items-center gap-2 text-accent font-heading font-semibold text-sm group/link cursor-pointer">
                Read Full Article
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.slice(1).map((post, i) => (
              <article
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-heading font-medium ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                      {post.category}
                    </span>
                    <span className="font-body text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-navy text-lg mb-2 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-body text-navy/60 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 font-body">
                    <span className="flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
                    <span className="flex items-center gap-1 text-accent font-medium">
                      Read More <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-heading font-semibold rounded-full hover:bg-primary hover:text-white transition-all">
              <Newspaper size={18} />
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
