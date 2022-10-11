import React from 'react'
import {  Container,Table } from 'react-bootstrap'

// useEffect(() => {
//     fetch()
// })


// type SkillItemProps = {
//     id: Number
//     name: String
//     date: Date
// }

export default function Tablecomponent({id, name, date}) {
    // const [skill, addNewSkill] = useState([])

  return (
    <Container className="mt-5" style={{ width: "60%", padding: ".8rem", float: "right"}}>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Activitiy</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Hockey</td>
                    <td>35min</td>
                </tr>
            </tbody>
        </Table>
    </Container>
  )
}
