import { PostType } from "../types";
import Heading from "./Heading";
import {FC} from 'react';

interface PostInfoProps {
   post: PostType
}

const PostInfo:FC<PostInfoProps> = ({post}) => {
   const {title, body} = post || {};

   if(!post) {
       return <Heading tag="h3" text="Empty post"/>
   }
  return (
     <>
        <Heading tag="h3" text={title}/>
        <p>{body}</p>
     </>
  );
}

export default PostInfo;