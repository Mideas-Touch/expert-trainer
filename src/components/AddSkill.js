import React from 'react'
import { Button, Container } from 'react-bootstrap'

export default function AddSkill() {
  return (
    <>
    <Container className='' style={{Position: "relative", float: "right"}}>
        <Button className='fs-5' style={{ Position: "Absolute", width: "15vw", height: "20vh"}}>+</Button>
    </Container>
    </>
  )
}
