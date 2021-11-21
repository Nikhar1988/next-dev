import {FC, HtmlHTMLAttributes} from 'react';

interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3',
  text : string
}

const Heading:FC<HeadingProps> = ({tag, text}) => {
    const Tag = tag || 'h1';
    return <Tag>{text}</Tag>  
  };
  
  export default Heading;