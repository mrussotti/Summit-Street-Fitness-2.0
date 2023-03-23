import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
    const location = useLocation();
  
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
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
    
      // Decision tree logic
      const experience = parseFloat(event.target.elements.experience.value);
      const bodyFat = parseFloat(event.target.elements.bodyFat.value);
    
      let recommendation = 'Recomp';
      
      if (experience <= 1) {
        if (bodyFat <= 15) {
          recommendation = 'Bulk';
        } else {
          recommendation = 'Cut';
        }
      } else {
        if (bodyFat <= 10) {
          recommendation = 'Bulk';
        } else if (bodyFat >= 20) {
          recommendation = 'Cut';
        }
      }
    
      setRecommendation(recommendation);
      navigate(`/beginner?recommendation=${recommendation}`);
    };
  
    return (
      <>
        <h1 className={styles.pageTitle}>Beginner</h1>
        <div className={styles.rectangleCard}>
            <MarkdownCard heading='Outline Your Goals' markdownContent={Outline} />
        </div>
        {/* this is the form */}
        <div className={styles.rectangleCard}>

        {!recommendation && (
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="experience">Experience (years):</label>
            <input type="number" name="experience" id="experience" required />
  
            <label htmlFor="bodyFat">Body Fat Percentage:</label>
            <input type="number" name="bodyFat" id="bodyFat" required />
  
            <button type="submit">Submit</button>
          </form>
        )}
        {recommendation && (
          <div className={styles.rectangleCardContainer}>
            {/* Your existing Markdown cards go here */}
  
            
  
            {recommendation === 'Bulk' && (
              <div className={styles.rectangleCard}>
                <MarkdownCard heading='Mass Gaining Diet' markdownContent={content.BulkDiet} />
              </div>
            )}
  
            {recommendation === 'Cut' && (
              <div className={styles.rectangleCard}>
                <MarkdownCard heading='Reduce Body Fat Diet' markdownContent={content.CutDiet} />
              </div>
            )}

            {recommendation === 'Recomp' && (
              <div className={styles.rectangleCard}>
                <MarkdownCard heading='Body Recomposition Diet' markdownContent={content.RecompDiet} />
              </div>
            )}
  
            {/* Add more conditional rendering for other Markdown cards as needed */}
          </div>
        )}
        </div>


        <div className={styles.rectangleCard}>
        <MarkdownCard heading='Training' markdownContent={content.trainingContent} />
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
      </>
    );
  }
  