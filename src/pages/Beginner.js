
import RectangleCard from "../components/RectangleCard"; 


const text1 = ['The term "noob gains" refers to the phenomenon where beginners in the gym experience rapid progress in strength and muscle gain compared to those who have been working out for several years. This is due to several factors, including the fact that beginners have a lower baseline level of strength, which means they have more room for improvement, and that their bodies are not yet adapted to the stress of exercise, so they respond more strongly to training stimuli. Additionally, beginners often have more room for improvement in terms of technique and form, which can lead to further gains in strength and muscle mass. However, as beginners become more experienced, their rate of progress tends to slow down, and they need to put in more effort and apply more advanced training techniques to continue making gains.']
export default function Beginner(){
    return ( 
    <> 
        
        
    <h1> Beginner</h1>
    
    <RectangleCard heading='What are "Noob Gains"?' text= {text1} /> 
    

    </> 
    )
}