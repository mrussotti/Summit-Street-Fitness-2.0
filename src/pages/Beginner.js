
import RectangleCard from "../components/RectangleCard"; 
const Progress = ['Once you plateau on stuff you might need to go to intermediate training.']
const Myths = ['Jeff Nippard and RP Mythbusting videos']
const Edicate = ['Working in, mirror space, wiping stuff down, etc.']
const Gear = ["Don't need anything yet. Explain purpose of belt, straps, wrist wraps, etc."]
const Supps = ['Protien powder, creatine, caffine']
const Recovery = ['Sleep. Fatigue. Soreness']
const Diet = ['How to gain and lose weight. Show the math (not too scary). Give tips for how to do it without math (see RP fatloss pdf)']
const Training = ["Start slow. 2-4x a week. 2-5 RIR. Focus on compounds. Form>Weight"]
const Outline = [""]
export default function Beginner(){
    return ( 
    <> 
        
        
    <h1> Beginner</h1>
    <RectangleCard heading='Outline Your Goals' text= {Outline} /> 
    <RectangleCard heading='Training' text= {Training} /> 
    <RectangleCard heading='Diet' text= {Diet} /> 
    <RectangleCard heading='Recovery' text= {Recovery} /> 
    <RectangleCard heading='Supplements To Start With' text= {Supps} /> 
    <RectangleCard heading='What Gym Gear Do You Need?' text= {Gear} /> 
    <RectangleCard heading='Gym Edicate' text= {Edicate} /> 
    <RectangleCard heading='Myth Busting' text= {Myths} /> 
    <RectangleCard heading='How To Know When You Are An Intermediate Lifter' text= {Progress} /> 



    </> 
    )
}