import React, {  useState } from 'react'
import {  Button, Form, FormControl, FormLabel } from 'react-bootstrap'
import Timer from './Timer'

// timerElement = document.getElementById('timer')

function Dataform({Timer}) {
  const [activity, setActivity] = useState("")
  const [target, setTarget] = useState()

  function handleSubmit(e){
    e.preventDefault();
    let formDataObj = {
      activity: activity,
      target: target,
    }

    return <Timer timeElapsed={timeElapsed} />

    console.log(activity)
    console.log(target)

    //set up JSX
    // const formData = {
    //   id: new Date().getTime(),
    //   firstValue: activity,
    //   secondValue: target,
    // }
  
  }
   

  return (
    <>
        <Form className='d-flex flex-column justify-content-center align-center' style={{ width: "30%"}} onSubmit={handleSubmit}>
          <FormLabel>
            Activity:
            <FormControl
              onChange={(e) => setActivity(e.target.value)} 
              value={activity}
              placeholder="Enter new activity"
              type="text"
              name="activity"
              // value={e.target.value}
            />
          </FormLabel>
        
        <FormLabel>
          Target:
          <FormControl
            onChange={(e) => setTarget(e.target.value)}
            value={target}
            type="number"
            placeholder='Enter target time'
            // value={e.target.value}
          />
        </FormLabel>
        <Button
          type='submit'>submit
        </Button>
      </Form>
    </>
  )
}

export default Dataform
