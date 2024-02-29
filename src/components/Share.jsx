import { EmailShareButton, FacebookShareButton, RedditShareButton, WhatsappShareButton, EmailIcon, FacebookIcon, RedditIcon, WhatsappIcon } from 'react-share';
import { BsShare } from "react-icons/bs";
import { useState } from "react"
const Share = () => {
  const [showShareButtons, setShowShareButtons] = useState(false);

  const shareUrl = 'http://www.deltasportus.com';
  const title = 'Share with your team';

  return (
    <>
      <div className="flex items-center justify-center cursor-pointer" onClick={() => setShowShareButtons(!showShareButtons)}>
        <BsShare className="text-green-500 p-2 text-5xl font-bold" /> Share with your team
      </div>
      {showShareButtons && (
        <div className="flex flex-row justify-center gap-4">
          <EmailShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button">
            <EmailIcon size={32} round />
          </EmailShareButton>

          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button">
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <RedditShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <RedditIcon size={32} round />
          </RedditShareButton>

          <WhatsappShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

        </div>
      )}
    </>
  );
};

export default Share;