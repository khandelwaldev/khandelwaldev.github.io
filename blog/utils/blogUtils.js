// utils/blogUtils.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getLatestBlogs = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  // Sort fileNames based on date in descending order (latest first)
  const sortedFileNames = fileNames.sort((a, b) => {
    const dateA = new Date(a.slice(0, 10));
    const dateB = new Date(b.slice(0, 10));
    return dateB - dateA;
  });

  const latestBlogs = sortedFileNames.slice(0, 5).map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(source);
    return { slug: fileName.replace(/\.mdx$/, ''), ...data };
  });

  return latestBlogs;
};

export const getBlogsByTag = (tag) => {
  const fileNames = fs.readdirSync(postsDirectory);

  const blogs = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(source);
    return { slug: fileName.replace(/\.mdx$/, ''), ...data };
  });

  // Filter the blogs based on the selected tag
  const blogsByTag = blogs.filter((blog) => {
    return blog.tags && blog.tags.includes(tag);
  });

  return blogsByTag;
};
