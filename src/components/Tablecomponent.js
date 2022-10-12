import { Table as TableContainer } from 'react-bootstrap'
import Table from './Table'
import React, { useEffect, useState } from 'react'


export default function Tablecomponent() {

    const [items, setItems] = useState([])
    console.log(items)

    useEffect(() =>{
        fetch('http://localhost:3000/activities')
        .then(response => response.json())
        .then(items => {
            setItems(items)
        })      
    }, [])

    console.log(items)

  return (
        <TableContainer>
            <thead>
                <tr>
                    <th>Activity ID</th>
                    <th>Activity Name</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
            { items.map(item => <Table key={item.id} item={item} title={item.title} minutes={item.minutes} />)} 
            </tbody>
        </TableContainer>
  )
}
