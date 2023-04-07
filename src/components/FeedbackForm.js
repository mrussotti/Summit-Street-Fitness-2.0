import React from 'react';
import styles from './FeedbackForm.module.css';

const FeedbackForm = () => {
    return (
        <div className={styles.feedbackForm}>
            <h2>Feedback</h2>
            <iframe
            title= "Feedback Form"
             src="https://docs.google.com/forms/d/e/1FAIpQLSc82qeyNee7U8Xk58Um4N4_W7wj3HuwO9P82iY6iSWnSpcmaw/viewform?embedded=true" 
            width="640" 
            height="1000" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0"
            >
            Loading…
        </iframe>
    </div >
  );
};

export default FeedbackForm;
