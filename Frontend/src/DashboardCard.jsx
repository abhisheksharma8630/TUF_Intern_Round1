import React from 'react'
import axios from 'axios'
export default function DashboardCard({question,handleDelete,handleEdit}) {
  return (
    <div style={{border:"2px solid black", width:"400px",borderRadius:"1rem",padding:"1rem"}}>
        <div style={{display:"flex",gap:"10px"}}>
            <button onClick={(e) => handleEdit(e,question)}>Edit</button>
            <button onClick={() => handleDelete(question.id)}>Delete</button>
        </div>
        <p>Que: {question.question}</p>
        <p>Ans: {question.answer}</p>
        <p>Created At : {question.created_at}</p>
    </div>
  )
}
