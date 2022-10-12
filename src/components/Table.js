import React from 'react'

export default function Table({ item:{ id, title, minutes} }) {
  return (
    <tr key={id}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{minutes}</td>
    </tr>
  )
}
