import React from 'react'
import { Container } from 'react-bootstrap'
import "../Styles.css"

const Header = () => {
  return (
    <>
    <Container className="d-flex mt-5 justify-content-center align-center bg dark " style={{ width: "60%", height: "15vh"}}>
      <header >
              <h1>Elevate Your Skills with Expert Trainer</h1>     
      </header>

    </Container>
        
    </>
  )
}

export default Header;