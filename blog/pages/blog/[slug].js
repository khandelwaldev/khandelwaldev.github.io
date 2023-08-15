import { useRouter } from 'next/router';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogLayout from '../../components/BlogLayout';
import Link from 'next/link';
import DisqusComments from '@/components/Comments';

const BlogPost = ({ mdxSource, frontMatter }) => {
  const router = useRouter();
  const pageUrl = `https://slyro.vercel.app${router.asPath}`;

  const tagsArray = frontMatter.tags.split(',').map((tag) => tag.trim());

  const postId = frontMatter.id;

  return (
    <BlogLayout>
      <Head>
        <title>{frontMatter.title}</title>

        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:type" content="Article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`https://slyro.vercel.app${frontMatter.banner}`} />
        <meta property="og:site_name" content="Dev Khandelwal" />
        <meta name="author" content={frontMatter.author} />
        <meta property="og:description" content={frontMatter.description} />
      </Head>

      <article className="article">
        <div className="blog-info">
          <h1>{frontMatter.title}</h1>
          <div className="data">
            <img src="https://avatars.githubusercontent.com/u/122960451?v=4" alt="Profile Picture" />
            <div className="author-info">
              <a href="/about" target="_blank">{frontMatter.author}</a>
              <span>{frontMatter.date}</span>
            </div>
          </div>
        </div>

        <br></br><hr></hr><br></br>

        <div className="blog">
          <MDXRemote {...mdxSource} />
        </div>
        
        <br></br><hr></hr><br></br>
        
      </article>

{/** Tags and info */}
      <div className="side-menu" >
        <h1> Worikng</h1>

        <br></br> <hr></hr> <br></br>
        
        <div className="side-info">
          <img src="https://avatars.githubusercontent.com/u/122960451?v=4" />
          
          <br></br>
          
          <span>Dev Khandelwal</span>
          
          <br></br>
          
          <a href="https://instagram.com/_slyro" className="ul-effect">@_slyro</a>
        </div>
        
        <br></br> <hr></hr> <br></br>
        
        <div className='side-tags'>

          {tagsArray.map((tag, index) => (

          <Link href={`/tag/${tag}`} passHref key={index} className='tag-link'>
            {tag}
          </Link>

          ))}

        </div>

      </div>

      <div className='side-tags-mob'>
          {tagsArray.map((tag, index) => (
            <Link href={`/tag/${tag}`} passHref key={index} className='tag-link'>
              {tag}
            </Link>
          ))}

          <hr className='side-hr'></hr>
        </div>

        <div className='comments'>
          <DisqusComments post={postId} />
        </div>

    </BlogLayout>
  );
};

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);

  const paths = fileNames.map((fileName) => ({
    params: { slug: fileName.replace(/\.mdx$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postFilePath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath, 'utf8');

  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
}

export default BlogPost;
