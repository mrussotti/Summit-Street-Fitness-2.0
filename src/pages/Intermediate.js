
import RectangleCard from "../components/RectangleCard"; 
const text5 = ['do exersises that give you a stim to fatigue ratio. different people benefit from different things']
const text4 = ['decreasing gains as you keep lifting']
const text3 = ['Giant sets, drop sets, etc. explain the advantages and disadadvantages']
const text2 = ['shit with amino acids']
const text1 = ["You know you're supposed to be here if you've platues in either size or strength for any meaningful amount of time. Now you need to really dial in your training to make gains"]
export default function Intermediate(){
    return ( 
    <> 
        
        
    <h1> Intermediate</h1>
    <RectangleCard heading='Intro' text= {text4} /> 
    <RectangleCard heading='Stimulus to fatigue ratio' text= {text1} /> 
    <RectangleCard heading='Advanced vocab Vocab' text= {"MEV, MAV, Mesocycle. etc"} /> 
    <RectangleCard heading='Advanced nutrition' text= {text2} /> 
    <RectangleCard heading='pre workout breakdown' text= {"what are ingrediants and what they do, red flags to look out for"} /> 
    <RectangleCard heading='Different kinds of sets' text= {text3} /> 
    <RectangleCard heading='Need for custom workout plans and how to make one' text= {text5} /> 


    </> 
    )
}