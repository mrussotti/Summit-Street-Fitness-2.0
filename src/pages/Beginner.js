
import RectangleCard from "../components/RectangleCard"; 
const text5 = ['Weight vs body composition']
const text4 = ['Lose weight, bulk up, recomp, etc... Realistic expectations for new lifters']
const text3 = ['Rep ranges, progressive overload, compound vs isolation exersises']
const text2 = ['Exersise, food, sleep/recovery. Simple breakdown of each of these']
const text1 = ['The term "noob gains" refers to the phenomenon where beginners in the gym experience rapid progress in strength and muscle gain compared to those who have been working out for several years. This is due to several factors, including the fact that beginners have a lower baseline level of strength, which means they have more room for improvement, and that their bodies are not yet adapted to the stress of exercise, so they respond more strongly to training stimuli. Additionally, beginners often have more room for improvement in terms of technique and form, which can lead to further gains in strength and muscle mass. However, as beginners become more experienced, their rate of progress tends to slow down, and they need to put in more effort and apply more advanced training techniques to continue making gains.']
export default function Beginner(){
    return ( 
    <> 
        
        
    <h1> Beginner</h1>
    <RectangleCard heading='Outline your goals' text= {text4} /> 
    <RectangleCard heading='What are "Noob Gains"?' text= {text1} /> 
    <RectangleCard heading='Common Vocab' text= {"idk"} /> 
    <RectangleCard heading='Three pillars of fitness' text= {text2} /> 
    <RectangleCard heading='Supplements to start with' text= {"creatine, protien powder, multi vitamin"} /> 
    <RectangleCard heading='Next level of how to build muscle' text= {text3} /> 
    <RectangleCard heading='Numbers on the scale, how important are they?' text= {text5} /> 
    <RectangleCard heading='how to eat to look the way you want' text= {"calories and protien"} /> 



    </> 
    )
}