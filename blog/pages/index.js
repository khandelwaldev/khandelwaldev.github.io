import Link from 'next/link';
import { getLatestBlogs } from '../utils/blogUtils'; 
import Head from 'next/head';

const Home = ({ latestBlogs }) => {
  return (
    <>
        <Head>
          <title>Dev Khandelwal</title>

          <meta property="og:title" content='Dev Khandelwal'/>
          <meta property="og:type" content="Article" />
          <meta property="og:url" content='https://slyro.vercel.app/'/>
          <meta property="og:image" content='https://slyro.vercel.app/img/og.png' />
          <meta property="og:site_name" content="Dev Khandelwal" />
          <meta name="author" content='Dev Khandelwal' />
          <meta property="og:description" content='This is my place for thoughts, reflections & everything in between. Have a good read!' />
        </Head>
      <div class="grid">
        <div class="blog_title">
            <h1>My Latest Blogs</h1>
        </div>

        <div class="blog_wrapper">
        {latestBlogs.map((blog) => (
            <div class="blog_item">

            <Link href={`/blog/${blog.slug}`} passHref>
              <div class="bi_img"><img src={blog.banner} /></div>
              <div class="bi_title">{blog.title}</div>
              <div class="bi_content">{blog.description}</div>
              <div class="reading_time">{blog.date}</div>
            </Link>

          </div>
))}
        </div>
        <div class="blog_button"><a href="#">See all blogs</a></div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const latestBlogs = getLatestBlogs(); // Call the getLatestBlogs function to fetch the latest blogs

  return {
    props: {
      latestBlogs,
    },
  };
}

export default Home;
