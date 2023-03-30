import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MarkdownCard from "../components/MarkdownCard";
import styles from './universal.module.css';
import progress from './BeginnerContent/Progress.md';
import bulkDiet from './BeginnerContent/BulkDiet.md';
import cutDiet from './BeginnerContent/CutDiet.md';
import RecompDiet from './BeginnerContent/RecompDiet.md';
import etiquette from './BeginnerContent/GymEtiquette.md';
import gear from './BeginnerContent/GymGear.md';
import recovery from './BeginnerContent/Recovery.md';
import supplements from './BeginnerContent/Supplements.md';
import training from './BeginnerContent/Training.md';
import RecommendationForm from '../components/RecommendationForm';

const Myths = ['Jeff Nippard and RP Mythbusting videos'];
const Outline = [""];

export default function Beginner() {
  const [content, setContent] = useState({
    progressContent: '',
    BulkDiet: '',
    CutDiet: '',
    RecompDiet: '',
    etiquetteContent: '',
    gearContent: '',
    recoveryContent: '',
    supplementsContent: '',
    trainingContent: '',
  });

  const [recommendation, setRecommendation] = useState(null);
  const navigate = useNavigate();

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
    fetchMarkdownContent(bulkDiet, 'BulkDiet');
    fetchMarkdownContent(cutDiet, 'CutDiet');
    fetchMarkdownContent(RecompDiet, 'RecompDiet');
    fetchMarkdownContent(etiquette, 'etiquetteContent');
    fetchMarkdownContent(gear, 'gearContent');
    fetchMarkdownContent(recovery, 'recoveryContent');
    fetchMarkdownContent(supplements, 'supplementsContent');
    fetchMarkdownContent(training, 'trainingContent');
  }, []);

  //   This makes sure when you load the page you start at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (recommendation) => {
    setRecommendation(recommendation);
    navigate(`/beginner?recommendation=${recommendation}`);
  };

  return (
    <>

      <h1 className={styles.pageTitle}>Beginner</h1>
      <MarkdownCard heading='Outline Your Goals' markdownContent={Outline} />
      {!recommendation && (
        <RecommendationForm onSubmit={handleFormSubmit} />
      )}
      {recommendation && (
        <>
          {recommendation === 'Bulk' && (
            <MarkdownCard heading='Bulking for Beginner Lifters' markdownContent={content.BulkDiet} />
          )}

          {recommendation === 'Cut' && (
            <MarkdownCard heading='Cutting for Beginner Lifters' markdownContent={content.CutDiet} />
          )}

          {recommendation === 'Recomp' && (
            <MarkdownCard heading='Body Recomposition for Beginner Lifters' markdownContent={content.RecompDiet} />
          )}
        </>
      )}
      <MarkdownCard heading='Training' markdownContent={content.trainingContent} />
      <MarkdownCard heading='Recovery' markdownContent={content.recoveryContent} />
      <MarkdownCard heading='Supplements To Start With' markdownContent={content.supplementsContent} />
      <MarkdownCard heading='What Gym Gear Do You Need?' markdownContent={content.gearContent} />
      <MarkdownCard heading='Gym Etiquette' markdownContent={content.etiquetteContent} />
      <MarkdownCard heading='Myth Busting' markdownContent={Myths} />
      <MarkdownCard
        heading="How To Know When You Are An Intermediate Lifter"
        markdownContent={content.progressContent}
      />

    </>
  );
}

