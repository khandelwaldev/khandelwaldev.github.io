import Link from 'next/link';
import Head from 'next/head';
import { getLatestBlogs } from '../utils/blogUtils';

const TagsPage = ({ blogs }) => {
  // Calculate the tags and their counts
  const tagsCounts = {};
  blogs.forEach((blog) => {
    if (blog.tags) {
      const tagsArray = blog.tags.split(',').map((tag) => tag.trim());
      tagsArray.forEach((tag) => {
        tagsCounts[tag] = tagsCounts[tag] ? tagsCounts[tag] + 1 : 1;
      });
    }
  });

  // Convert the tags counts to an array of objects
  const tagsWithCounts = Object.entries(tagsCounts).map(([tag, count]) => ({ tag, count }));

  return (
    <>
    <Head>
    <title>Tags - Dev Khandelwal</title>

<meta property="og:title" content='Tags - Dev Khandelwal'/>
<meta property="og:type" content="Article" />
<meta property="og:url" content='https://dev-khandelwal.netlify.app/tags'/>
<meta property="og:image" content='https://dev-khandelwal.netlify.app/img/og.png' />
<meta property="og:site_name" content="Dev Khandelwal" />
<meta name="author" content='Dev Khandelwal' />
<meta property="og:description" content='List of all the tags' />
    </Head>
    <div className='tags-container'>
      <div className='tags'>
        <h1>All Tags</h1>
        <ul>
          {tagsWithCounts.map(({ tag, count }) => (
            <li key={tag}>
              <Link href={`/tag/${tag}`} passHref className='tags-link'>
                {tag} ({count})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export async function getStaticProps() {
  const latestBlogs = getLatestBlogs(); // Fetch latest blog data

  return {
    props: {
      blogs: latestBlogs, // Pass the blog data directly to the component
    },
  };
}

export default TagsPage;
