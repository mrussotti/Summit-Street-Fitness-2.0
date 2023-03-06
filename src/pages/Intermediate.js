
import RectangleCard from "../components/RectangleCard"; 
const text5 = ['do exersises that give you a stim to fatigue ratio. different people benefit from different things']
const text4 = ['decreasing gains as you keep lifting']
const text3 = ['Giant sets, drop sets, etc. explain the advantages and disadadvantages']
const text2 = ['shit with amino acids']
const text1 = ['The term "noob gains" refers to the phenomenon where beginners in the gym experience rapid progress in strength and muscle gain compared to those who have been working out for several years. This is due to several factors, including the fact that beginners have a lower baseline level of strength, which means they have more room for improvement, and that their bodies are not yet adapted to the stress of exercise, so they respond more strongly to training stimuli. Additionally, beginners often have more room for improvement in terms of technique and form, which can lead to further gains in strength and muscle mass. However, as beginners become more experienced, their rate of progress tends to slow down, and they need to put in more effort and apply more advanced training techniques to continue making gains.']
export default function Intermediate(){
    return ( 
    <> 
        
        
    <h1> Beginner</h1>
    <RectangleCard heading='What to expect kind of gains to expect being an advanced lifter' text= {text4} /> 
    <RectangleCard heading='Stimulus to fatigue ratio' text= {text1} /> 
    <RectangleCard heading='Advanced vocab Vocab' text= {"MEV, MAV, Mesocycle. etc"} /> 
    <RectangleCard heading='Advanced nutrition' text= {text2} /> 
    <RectangleCard heading='pre workout breakdown' text= {"what are ingrediants and what they do, red flags to look out for"} /> 
    <RectangleCard heading='Different kinds of sets' text= {text3} /> 
    <RectangleCard heading='Need for custom workout plans and how to make one' text= {text5} /> 


    </> 
    )
}