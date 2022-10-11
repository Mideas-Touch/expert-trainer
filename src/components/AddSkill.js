import React, { useEffect, useState } from 'react'
import { Button, Container, FormControl, FormLabel } from 'react-bootstrap'

// timerElement = document.getElementById('timer')

export default function AddSkill() {
  const [activity, setActivity] = useState("")
  const [target, setTarget] = useState()

  function handleSubmit(e){
    e.preventDefault();

    //set up JSX
    const formData = {
      id: new Date().getTime(),
      firstValue: activity,
      secondValue: target,
    }
  
  }
   

  return (
    <>
        {/* <FormControl placeholder='Activity name' onSubmit={handleSubmit}>
          <FormLabel>
            Activity:
            <input
              onChange={(e) => setActivity(e.target.value)} 
              value={activity}
              type="text"
              name="activity"
              // value={e.target.value}
            />
          </FormLabel>
        
        <FormLabel>
          Target:
          <input
            onChange={(e) => setTarget(e.target.value)}
            value={target}
            type="number"
            // value={e.target.value}
          />
        </FormLabel>
      </FormControl> */}
    </>
  )
}
