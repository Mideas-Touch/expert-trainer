import React, { useEffect, useState } from 'react'
import {  Table } from 'react-bootstrap'
import App from '../App'


export default function Tablecomponent({item}) {

    const [items, setItems] = useState([])

    useEffect(() =>{
        fetch('http://localhost:3000/activities')
        .then(response => response.json())
        .then(data => {
            setItems(items)
        })      
    }, [])



  return (
    <Container className="mt-5" style={{ width: "60%", padding: ".8rem", float: "right"}}>
        <Table>
            <thead>
                <tr>
                    <th>{key}</th>
                    <th>Activity</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>{title}</td>
                    <td>{minutes}</td>
                </tr>
            </tbody>
        </Table>
    </Container>
  )
}
