import React, {  useState } from 'react'
import {  Button, Form, FormControl, FormLabel } from 'react-bootstrap'
import Table from './Table'
import { Table as TableContainer } from 'react-bootstrap'



function Dataform({Card}) {
  const [title, setActivity] = useState("")
  const [minutes, setTarget] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    let formDataObj = {
      title: title,
      minutes: minutes,
    }

  fetch(`http://localhost:3000/activities`, {
  method: 'POST',
  headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
  body: JSON.stringify(formDataObj)})
  .then(result => result.json())
  .then(data => { 
    <TableContainer>

{/* { items.map(item => <Table key={item.id} item={item} title={item.title} minutes={item.minutes} />)} */}
            <tbody>
            {data.map(item => <Table key={formDataObj.id} item={formDataObj} title={formDataObj.title} minutes={formDataObj.minutes} />)}
            </tbody>
           
        </TableContainer>
  })


    // console.log(activity)
    // console.log(target)

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
              value={title}
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
            value={minutes}
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
