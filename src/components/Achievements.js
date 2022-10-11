import React from 'react'
import { Card, Container } from 'react-bootstrap'
// import Styles from "../Styles.css"
// import { image } from './data'


export default function Achievements() {
    

  return (
    <Container className='mt-5 ' style={{ width: "25%", float: "left"}}>
        <header className='overlay center-heading'>
            <h1>Achievements</h1>
        </header> 
        <Card className=''>
            <Card.Header className="text-muted">Recents</Card.Header>
            <Card.Body className='mb-3 d-flex flex-direction-row justify-content-between'>
                <li>activity</li>
                <li>duration</li>
            </Card.Body>
        </Card>
        {/* <Card >
            <Card.Body className='mb-3 d-flex flex-direction-row justify-content-between'>
                <li>activity</li>
                <li>duration</li>
            </Card.Body>
        </Card> */}
    </Container>
  )
}
