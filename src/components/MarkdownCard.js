import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownCard = ({ heading, markdownContent }) => {
  return (
    <div className="rectangle-card">
      <h1>{heading}</h1>
      <ReactMarkdown children={markdownContent} />
    </div>
  );
}

export default MarkdownCard;
