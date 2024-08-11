import { useEffect, useState } from "react";
import axios from 'axios'
import DashboardCard from "./DashboardCard";


export default function Dashboard() {
    const [questions,setQuestions] = useState([{id:1,question:"How are you?",answer:"I'm fine"}]);
    const [isEditing,setIsEditing] = useState(false);
    const [formData,setFormData] = useState({question:"",answer:""});
    const fetchData = async ()=>{
        const response = await axios.get('https://flashcard-mxsa.onrender.com/questions');
        setQuestions(response.data);
      }
    useEffect(()=>{
      fetchData();
    },[])

    const handleDelete = async (id) => {
        try {
          await axios.delete(`https://flashcard-mxsa.onrender.com/questions/${id}`);
          fetchData(); 
        } catch (error) {
          console.error('Error deleting question:', error);
        }
      };
    const handleSubmit = async function(e){
        e.preventDefault();
        try {
            const response = await axios.post('https://flashcard-mxsa.onrender.com/questions',formData);
            setFormData({question:"",answer:""})
            fetchData();
        } catch (error) {
            console.log("errro",error)
        }  
    }
    const handleEdit = (e,question)=>{
        setFormData({question:question.question,answer:question.answer,id:question.id});
        setIsEditing(true);
    }

    const handleEditSubmit = async function(e){
        e.preventDefault();
        try {
            // console.log(formData);
            const response = await axios.put(`https://flashcard-mxsa.onrender.com/${formData.id}`,formData);
            setFormData({question:"",answer:""})
            setIsEditing(false);
            fetchData();
        } catch (error) {
            console.log("error",error);
        }
    }
    const onCancel = ()=>{
        setIsEditing(false);
        setFormData({question:"",answer:""})
    }
  return (
    <div style={{padding:"5px"}}>
        <div style={{width:"90%",display:"flex",flexWrap:"wrap",padding:"1rem",justifyContent:"start",gap:"20px",margin:"10px auto"}}>
            {isEditing ? <div style={{border:"2px solid black", width:"400px",borderRadius:"1rem",padding:"1rem"}}>
                <b>Edit Question</b>
                <form onSubmit={handleEditSubmit} action="" method="post" style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"end",height:"130px"}}>
                    <input style={{position:"relative",cursor:"text",fontSize:"14px",lineHeight:"20px",padding:"0 16px",height:"35px",backgroundColor:"#fff",border:"1px solid #d6d6e7",borderRadius:"3px",color:"rgb(35, 38, 59)",boxShadow:"inset 0 1px 4px 0 rgb(119 122 175 / 30%)",overflow:"hidden",transition:"all 100ms ease-in-out",width:"90%"}}
                 type="text" value={formData.question} placeholder="Question" name="question" onChange={(e)=>setFormData({...formData,question:e.target.value})} required/>
                    <input style={{position:"relative",cursor:"text",fontSize:"14px",lineHeight:"20px",padding:"0 16px",height:"35px",backgroundColor:"#fff",border:"1px solid #d6d6e7",borderRadius:"3px",color:"rgb(35, 38, 59)",boxShadow:"inset 0 1px 4px 0 rgb(119 122 175 / 30%)",overflow:"hidden",transition:"all 100ms ease-in-out",width:"90%"}} type="text" placeholder="Answer" name="answer" value={formData.answer} onChange={(e)=>setFormData({...formData,answer:e.target.value})} required/>
                    <div style={{display:"flex",gap:"10px"}}>
                        <button onClick={onCancel} style={{width:"100px",padding:"5px"}}>Cancel</button>
                        <button type="submit" style={{width:"100px",padding:"5px"}}>Edit</button>
                    </div>
                </form>
            </div> : 
            <div style={{border:"2px solid black", width:"400px",borderRadius:"1rem",padding:"1rem"}}>
                <b>Create Question</b>
                <form onSubmit={handleSubmit} action="" method="post" style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"end",height:"130px"}}>
                    <input style={{position:"relative",cursor:"text",fontSize:"14px",lineHeight:"20px",padding:"0 16px",height:"35px",backgroundColor:"#fff",border:"1px solid #d6d6e7",borderRadius:"3px",color:"rgb(35, 38, 59)",boxShadow:"inset 0 1px 4px 0 rgb(119 122 175 / 30%)",overflow:"hidden",transition:"all 100ms ease-in-out",width:"90%"}}
                 type="text" value={formData.question} placeholder="Question" name="question" onChange={(e)=>setFormData({...formData,question:e.target.value})} required/>
                    <input style={{position:"relative",cursor:"text",fontSize:"14px",lineHeight:"20px",padding:"0 16px",height:"35px",backgroundColor:"#fff",border:"1px solid #d6d6e7",borderRadius:"3px",color:"rgb(35, 38, 59)",boxShadow:"inset 0 1px 4px 0 rgb(119 122 175 / 30%)",overflow:"hidden",transition:"all 100ms ease-in-out",width:"90%"}} type="text" placeholder="Answer" name="answer" value={formData.answer} onChange={(e)=>setFormData({...formData,answer:e.target.value})} required/>
                    <button type="submit" style={{width:"100px",padding:"5px"}}>Create</button>
                </form>
            </div>}
            {questions.map((question,idx)=>(<DashboardCard key={idx} question={question} handleDelete={handleDelete} handleEdit={handleEdit}/>))}
        </div>
    </div>
  )
}
