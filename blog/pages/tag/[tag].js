import Link from 'next/link';
import { useRouter } from 'next/router';
import { getBlogsByTag } from '../../utils/blogUtils';
import Head from 'next/head';

const TagPage = ({ tag, blogs }) => {

  const router = useRouter();
  const pageUrl = `https://slyro.vercel.app${router.asPath}`;

  return (
    <>
    <Head>
      <title>{tag} - Dev Khandelwal</title>

        <meta property="og:title" content={`${tag} - Dev Khandelwal`}/>
        <meta property="og:type" content="Article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content='https://slyro.vercel.app/img/og.png' />
        <meta property="og:site_name" content="Dev Khandelwal" />
        <meta name="author" content='Dev Khandelwal' />
        <meta property="og:description" content={`List of all the blogs associated with ${tag}`} />
    </Head>
<div class="grid">
        <div class="blog_title">
            <h1>Tag: {tag}</h1>
        </div>

        <div class="blog_wrapper">
        {blogs.map((blog) => (
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
      </div>

</>
  );
};

export async function getServerSideProps({ params }) {
  const { tag } = params;
  const blogs = getBlogsByTag(tag);

  return {
    props: {
      tag,
      blogs,
    },
  };
}

export default TagPage;
