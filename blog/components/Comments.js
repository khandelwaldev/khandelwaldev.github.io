import { DiscussionEmbed } from 'disqus-react';
import { useRouter } from 'next/router';

const DisqusComments = ({ postId }) => {
  
  const router = useRouter();
  const pageUrl = `https://slyro.vercel.app${router.asPath}`;

  const disqusShortname = "islyro"
  const disqusConfig = {
    url: pageUrl,
    identifier: postId, 
    title: "Your Blog Post Title", 
  };

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default DisqusComments;
