import React, {  useState } from 'react'
import {  Button, Form, FormControl, FormLabel } from 'react-bootstrap'
import { Skills } from '../pages/Skills'

// timerElement = document.getElementById('timer')

function Dataform({Card}) {
  const [activity, setActivity] = useState("")
  const [target, setTarget] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    let formDataObj = {
      activity: activity,
      target: target,
    }

    fetch(`http://localhost:3000/activities`, {
method: 'POST',
headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
body: JSON.stringify(formDataObj)})
.then(result => result.json())
.then(data => {
   //Weka hapa the code that will display the data to the dom
})


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
