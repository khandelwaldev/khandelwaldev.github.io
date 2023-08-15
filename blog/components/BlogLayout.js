// components/BlogLayout.js
import React from "react";

const BlogLayout = ({ children }) => {
  return (
    <div>
      <main className="blog">
        {children}
      </main>

    </div>
  );
};

export default BlogLayout;
