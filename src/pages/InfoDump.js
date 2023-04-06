import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MarkdownCard from "../components/MarkdownCard";
import ContentFilter from '../components/ContentFilter';
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

export default function InfoDump() {
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
  const [filter, setFilter] = useState(null);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRecomendationFormSubmit = (recommendation) => {
    setRecommendation(recommendation);
    navigate(`/InfoDump?recommendation=${recommendation}`);
  };

  const handleFilterFormSubmit = (filter) => {
    setFilter(filter);
    navigate(`/InfoDump?filter=${filter}`);
  };

  return (
    <>
      <h1 className={styles.pageTitle}>Info Dump</h1>
      <MarkdownCard heading='Outline Your Goals' markdownContent={Outline} />

      {!filter && (
        <ContentFilter onSubmit={handleFilterFormSubmit} />
      )}
      {filter && (
        <>
          {filter === 'Beginner' && (
            <>
            <MarkdownCard heading='Beginner Test' markdownContent={content.BulkDiet} />
            <MarkdownCard heading='Beginner Test 2' markdownContent={content.trainingContent} />
            <MarkdownCard heading='Beginner Test 3' markdownContent={content.recoveryContent} />
            </>
          )}

          {filter === 'Intermediate' && (
            <MarkdownCard heading='Intermediate Test' markdownContent={content.CutDiet} />
          )}

          {filter === 'Advanced' && (
            <MarkdownCard heading='Advanced Test' markdownContent={content.RecompDiet} />
          )}
        </>
      )}

      {!recommendation && (
            <RecommendationForm onSubmit={handleRecomendationFormSubmit} />
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
       
