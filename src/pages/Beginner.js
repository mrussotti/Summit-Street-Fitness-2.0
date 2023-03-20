
import RectangleCard from "../components/RectangleCard"; 
import styles from './universal.module.css';
import React, { useEffect } from 'react';



const Progress = ["After many months of beginner gains, you will start to reach a plateau. Your lifts won't be improving and you will feel like you are doing something wrong. You have now reached the intermediate lifting level. It's important to adjust your training program to continue making progress. This may involve incorporating more advanced techniques such as periodization, progressive overload, and accessory exercises. Periodization involves cycling through different training phases to prevent plateaus and promote continued progress. Progressive overload involves gradually increasing the weight or reps of your lifts to challenge your muscles and stimulate growth. Accessory exercises can help to target specific muscle groups and improve weaknesses. It's also important to continue focusing on proper form and technique to prevent injury and maximize results. By staying consistent and making adjustments to your training program, you can continue to make progress and reach your goals. Refer to our Intermediate page for more information."]
const Myths = ['Jeff Nippard and RP Mythbusting videos']
const Etiquette = ["Gym etiquette is essential for a safe and respectful workout environment. When using equipment, it is important to wipe it down with disinfectant after use to prevent the spread of germs. Additionally, if someone is waiting for a machine, offer to let them work in with you or complete your set quickly. When using the mirrors, be aware of your surroundings and give others space to use them too. Don't hog the mirror, and avoid blocking other people's view. Overall, being mindful of others and their needs can make the gym a more enjoyable and productive place for everyone."]
const Gear = ["Gym gear can be a useful tool for improving performance, but it's not always necessary, especially for beginners. In the beginning of a workout journey, mastering proper form and technique should be the priority. However, as you progress and start to lift heavier weights, gym gear can help you lift safely and more effectively. For example, weightlifting belts can provide additional support for your lower back during heavy lifts, and wrist wraps can stabilize your wrists and prevent injury. Straps can help you maintain a better grip on heavy weights, and lifting shoes can provide a solid base for lifting movements. It's important to remember that gym gear is not a substitute for proper technique and training, but can complement your efforts in the gym."]
const Supps = ["When it comes to gym supplements, there are a few key options that any beginner can add to their regimen to boost their performance and results. These supplements include whey protein, creatine monohydrate, and pre-workout formulas. Whey protein is a highly popular supplement that provides a quick and easily digestible source of protein for the body. This is especially important after a workout when the body needs protein to repair and rebuild muscle tissue. Whey protein is also a cost-effective way to get your daily protein intake, with prices ranging from $0.40 to $1.50 per 30 grams of protein. However, if you have an allergy to whey, there are many alternative protein sources available on the market."]
const Supps2 = ["Creatine monohydrate is another popular supplement, especially for those who engage in strength training or high-intensity exercise. This naturally occurring compound can help to increase the body's stores of creatine, providing a quick source of energy during intense workouts. This can lead to greater gains in strength and muscle mass over time, as well as improvements in overall athletic performance."]
const Supps3 = ["Pre-workout supplements are another option that can help to boost energy levels, reduce fatigue, and improve focus during exercise. These supplements typically contain a range of ingredients such as caffeine, beta-alanine, and creatine, among others. While pre-workout supplements can be effective, it is important to carefully read labels and ingredient lists to ensure that the supplement is safe and effective for your individual needs and goals."]
const Supps4 = ["Overall, these supplements can be useful tools for improving athletic performance and muscle growth. However, it is important to remember that supplements should be used in conjunction with a balanced diet and exercise routine, and it is always best to speak with a healthcare professional before starting to take any new supplements."]
const Recovery = ["Recovery is a crucial component of weight training that is often overlooked. Getting enough sleep is essential for optimal recovery as it is during sleep that our bodies repair and rebuild muscle tissue. Aim for at least 7-8 hours of sleep each night, and try to maintain a consistent sleep schedule."]
const Recovery2 = ["Dealing with fatigue and soreness is also an important aspect of recovery. Active recovery techniques such as stretching, foam rolling, and light cardio can help to increase blood flow and reduce soreness. It's also important to fuel your body with nutritious foods and stay hydrated to aid in recovery."]
const Recovery3 = ["Another key factor in recovery is allowing your muscles time to rest and recover. Overtraining can lead to fatigue, injury, and burnout, so it's important to listen to your body and adjust your training accordingly. Incorporating rest days and periodization into your training program can help to ensure that you are allowing your body enough time to recover and prevent overtraining."]
const Recovery4 = ["Finally, it's worth noting that recovery is not just physical, but also mental. Taking time to de-stress and relax can be just as important for recovery as physical rest. Activities such as meditation, yoga, or simply spending time with friends and family can help to reduce stress and promote overall well-being. By prioritizing recovery, you can ensure that you are making the most out of your training and achieving your fitness goals."]


const Diet = ["Gaining and losing weight is largely a matter of creating a calorie surplus or deficit. To gain weight, you need to consume more calories than you burn through exercise and daily activities. For example, if your body requires 2,000 calories per day to maintain your current weight, consuming an additional 500 calories per day would result in a weekly weight gain of approximately 1 pound. Conversely, to lose weight, you need to create a calorie deficit by consuming fewer calories than you burn. For example, reducing your daily intake by 500 calories would result in a weekly weight loss of approximately 1 pound. It's important to note that weight gain and loss is not just about calorie intake, but also the quality of the foods you eat and the type of exercise you do."]
const Training = ["For beginners in the gym, starting slow and gradually building up intensity is key. A good starting point is to go 2-4 times a week, allowing for rest and recovery between sessions. In terms of intensity, a good rule of thumb is to aim for 2-5 RIR (reps in reserve), meaning you stop a few reps shy of failure. Compound lifts such as squats, deadlifts, bench press, and rows should be prioritized over isolation exercises. Proper form and technique should be the focus, rather than lifting heavy weights. As you progress and become more comfortable with your training, you can gradually increase intensity and frequency to continue making progress."]
const Outline = [""]
export default function Beginner(){
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return ( 
    <> 
        
        
        <h1 className={styles.pageTitle}>Beginner</h1>
        <div className={styles.rectangleCardContainer}>
        <div className={styles.rectangleCard}>
    <RectangleCard heading='Outline Your Goals' text= {Outline} /> 
    </div>
    <div className={styles.rectangleCard}>
    <RectangleCard heading='Training' text= {Training} /> 
    </div>
    <div className={styles.rectangleCard}>
    <RectangleCard heading='Diet' text= {Diet} /> 
    </div>
    <div className={styles.rectangleCard}>
    <RectangleCard heading='Recovery' text= {Recovery} text2 = {Recovery2} text3= {Recovery3} text4= {Recovery4} /> 
    </div>
    <div className={styles.rectangleCard}>
    <RectangleCard heading='Supplements To Start With' text= {Supps} text2= {Supps2} text3= {Supps3} text4= {Supps4} /> 
    </div>
    <div className={styles.rectangleCard}>
    <RectangleCard heading='What Gym Gear Do You Need?' text= {Gear} /> 
    </div>
    <div className={styles.rectangleCard}>
    <RectangleCard heading='Gym Etiquette' text= {Etiquette} /> 
    </div>
    <div className={styles.rectangleCard}>
    <RectangleCard heading='Myth Busting' text= {Myths} /> 
    </div>
    <div className={styles.rectangleCard}>
    <RectangleCard heading='How To Know When You Are An Intermediate Lifter' text= {Progress} /> 
    </div>

    </div>
    </> 
    )
}