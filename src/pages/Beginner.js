import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
    supplementsContent: '',
    trainingContent: '',
  });

  const [recommendation, setRecommendation] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if there is a stored recommendation in local storage
    const storedRecommendation = localStorage.getItem('recommendation');
    if (storedRecommendation) {
      setRecommendation(storedRecommendation);
    }
  }, []);

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
    // Save the recommendation to local storage
    localStorage.setItem('recommendation', recommendation);
    navigate(`/beginner?recommendation=${recommendation}`);
  };

  return (
    <>
      <h1 className={styles.pageTitle}>Beginner</h1>
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

          <div className={styles.rectangleCard}>
            <MarkdownCard heading='Outline Your Goals' markdownContent={Outline} />
          </div>

          {recommendation === 'Bulk' && (
            <div className={styles.rectangleCard}>
              <MarkdownCard heading='Training' markdownContent={content.trainingContent} />
            </div>
          )}

          {recommendation === 'Bulk' && (
            <div className={styles.rectangleCard}>
              <MarkdownCard heading='Diet' markdownContent={content.dietContent} />
            </div>
          )}

          {/* Add more conditional rendering for other Markdown cards as needed */}
        </div>
      )}
    </>
  );
}
