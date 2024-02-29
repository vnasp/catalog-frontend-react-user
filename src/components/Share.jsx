import { FaShareAlt } from "react-icons/fa";
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
} from "react-share";

const Share = () => {

  return (
    <>
    <a href="" target="_blank" rel="noopener noreferrer" 
    className="flex items-center justify-center">
      <FaShareAlt className=" text-green-500 p-2 text-5xl font-bold" /> Share with your team
    </a>
    <div>{EmailShareButton}{FacebookShareButton}{RedditShareButton} </div>
    </>
  );
};

export default Share;