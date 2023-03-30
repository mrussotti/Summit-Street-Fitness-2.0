import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './markdownCard.module.css'; // Update the import

const MarkdownCard = ({ heading, markdownContent }) => {
  return (
    <div className={styles.rectangleCard}>
      <h1 className={styles.rectangleCardHeading}>{heading}</h1>
      <ReactMarkdown className={styles.rectangleCardText} children={markdownContent} />
    </div>
  );
};

export default MarkdownCard;