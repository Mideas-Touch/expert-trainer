import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'

// timerElement = document.getElementById('timer')

export default function AddSkill() {
    const [time, setTime] = useState(new Date())

    function Form(){
        const [activity, setActivity] = useState([])

        function handleActivityName(event){
            
        }
    }

    // function handleAddSkill(){
    //     setInterval(() => {
    //        getTimerTime()
    //     }, 1000);
    // }

    // function getTimerTime(){
    //     return Math.floor((new Date() - (setTime => time)) / 1000)
    // }

// function handleAddSkill(){
//     let startTime

//     timerElement.innerText = 0
//     startTime - new Date()
//     setInterval(() => {
//         timerElement.innerText = getTimerTime()
//     }, 1000)
// }

// function getTimerTime(){
//     return Math.floor((new Date() - startTime) / 1000)
// }
   

  return (
    <>
    <Container className='' style={{Position: "relative", textAlign: "center" }}>
        <Button onClick={handleAddSkill} variant="danger outline primary" className='fs-5'  style={{ Position: "Absolute", }}>+</Button>
    </Container>
    </>
  )
}
