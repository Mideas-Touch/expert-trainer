import React from 'react'

export default function Timer() {
    let timeElapsed
    
    startTime = new Date()
    setInterval(() => {
        timeElapsed = getTimerTime()

    }, 1000)

    function getTimerTime(){
        return Math.floor((new Date() - startTime))
    }
    


  return (
    <>  
        {timeElapsed}
    </>
  )
}
