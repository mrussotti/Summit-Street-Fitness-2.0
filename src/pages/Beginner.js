import React, { useState, useEffect } from 'react';
import MarkdownCard from "../components/MarkdownCard";
import styles from './universal.module.css';
import progress from './BeginnerContent/Progress.md';
import diet from './BeginnerContent/Diet.md';
import etiquette from './BeginnerContent/GymEtiquette.md';
import gear from './BeginnerContent/GymGear.md';
import recovery from './BeginnerContent/Recovery.md';
import supplements from './BeginnerContent/Supplements.md';
import training from './BeginnerContent/Training.md';

const Myths = ['Jeff Nippard and RP Mythbusting videos'];
const Outline = [""];

export default function Beginner() {
  const [content, setContent] = useState({
    progressContent: '',
    dietContent: '',
    etiquetteContent: '',
    gearContent: '',
    recoveryContent: '',
    trainingContent: '',
    supplementsContent: '',
  });

  const fetchMarkdownContent = async (url, contentKey) => {
    try {
      const response = await fetch(url);
      const text = await response.text();
      setContent((prevState) => ({ ...prevState, [contentKey]: text }));
    } catch (error) {
      console.error('Error fetching markdown content:', error);
    }
  };

  useEffect(() => {
    fetchMarkdownContent(progress, 'progressContent');
    fetchMarkdownContent(diet, 'dietContent');
    fetchMarkdownContent(etiquette, 'etiquetteContent');
    fetchMarkdownContent(gear, 'gearContent');
    fetchMarkdownContent(recovery, 'recoveryContent');
    fetchMarkdownContent(supplements, 'supplementsContent');
    fetchMarkdownContent(training, 'trainingContent');
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className={styles.pageTitle}>Beginner</h1>
      <div className={styles.rectangleCardContainer}>

      <div className={styles.rectangleCard}>
        <MarkdownCard heading='Outline Your Goals' markdownContent={Outline} />
        </div>
        <div className={styles.rectangleCard}>

        <MarkdownCard heading='Training' markdownContent={content.trainingContent} />
        </div>
        <div className={styles.rectangleCard}>

        <MarkdownCard heading='Diet' markdownContent={content.dietContent} />
        </div>
        <div className={styles.rectangleCard}>

        <MarkdownCard heading='Recovery' markdownContent={content.recoveryContent} />
        </div>
        <div className={styles.rectangleCard}>

        <MarkdownCard heading='Supplements To Start With' markdownContent={content.supplementsContent} />
        </div>
        <div className={styles.rectangleCard}>

        <MarkdownCard heading='What Gym Gear Do You Need?' markdownContent={content.gearContent} />
        </div>
        <div className={styles.rectangleCard}>

        <MarkdownCard heading='Gym Etiquette' markdownContent={content.etiquetteContent} />
        </div>
        <div className={styles.rectangleCard}>

        <MarkdownCard heading='Myth Busting' markdownContent={Myths} />
        </div>
        <div className={styles.rectangleCard}>

        <MarkdownCard
          heading="How To Know When You Are An Intermediate Lifter"
          markdownContent={content.progressContent}
        />
      </div>
      </div>

    </>
  );
}
