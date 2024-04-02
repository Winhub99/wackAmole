import { useEffect, useState } from "react"
// import hole from "../../assets/hole.png"
// import mole from "../../assets/mole.png"
import hole from "../assets/hole.png"
import mole from "../assets/mole.png"
import "./Wackamole.css"
const Wackamole=()=>{
    const [moles,setMoles] = useState<boolean[]>(new Array(9).fill(false))
    const [score,setScore] = useState<number>(0)

    function hideMole(index:number){
        const molesCopy = [...moles]
        molesCopy[index]= false
        setMoles(molesCopy)
    }

    useEffect(()=>{
        
        const timer= setTimeout(()=>{
            console.log("Ouiterr timeout")
            const molesCopy = new Array(9).fill(false)
            const randomIndex =Math.floor(Math.random()*molesCopy.length)
            molesCopy[randomIndex]=true;
            setMoles(molesCopy)   

             setTimeout(()=>{
                console.log("Hide me")
                hideMole(randomIndex)
            },1250);
            
             
        },3000);
        

        return ()=>{
            clearTimeout(timer)
        }
    },[moles])

    function handleClick(index:number){
        console.log("elememnt clicked: ", index)
        if(!moles[index]) return ;
        setScore(prev => prev +1)
        hideMole(index);
        

    }
    
    return(
        <>
        <h2 className="score-card">Score: {score}</h2>
        <div className="container">
            {moles.map((isMole,index) =>(<img key={index} src={isMole ? mole : hole} onClick={()=>handleClick(index)} />))}
        </div>
        </>
    )
}

export default Wackamole;