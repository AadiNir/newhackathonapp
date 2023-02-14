import { useState,useEffect } from "react";
function Createstartupfundnig(){
    const[Form,setForm]=useState({
        name:'',
        title:'',
        about:'',
        amount:'',
        date:'',
        imagurl:'',

    })


    const handlesubmit=(fieldname,e)=>{
        setForm({...Form,[fieldname]:e.target.value});
        console.log(Form)
    }
    const handleff=(e)=>{
        e.preventDefault();
        console.log(Form);
        


    }
  

    return(
        <div className="Main">
        
        <h2>Create a Startup Funding</h2>
                <form onSubmit={handleff}>
                    <label className="f1">Name</label><br/>
                    <input className="name" type="text" placeholder="Enter your Name" value={Form.name} onChange={(e)=>handlesubmit('name',e)}/><br/>
                    <label className="f2">Startup Name</label><br/>
                    <input className="title" type="text"  placeholder="Enter your startup Name" value={Form.title} onChange={(e)=>handlesubmit('title',e)}/><br/>
                    <label className="f3">About your startup</label><br/>
                    <input className="about" type="text" placeholder="About your startup" value={Form.about} onChange={(e)=>handlesubmit('about',e)}/><br/>
                    <label className="f4">Enter the amount of ether</label><br/>
                    <input className="amount" type="text"  placeholder="Enter the amount of ethers" value={Form.amount} onChange={(e)=>handlesubmit('amount',e)}/><br/>
                    <label className="f5">Enter the deadline date</label><br/>
                    <input className="date" type="date" value={Form.date} onChange={(e)=>handlesubmit('date',e)} /><br/>
                    <label className="f6">Paste your startup logo url</label><br/>
                    <input className="image" type="url" placeholder="paste the url of your startupp logo" value={Form.imagurl} onChange={(e)=>handlesubmit('imagurl',e)}/><br/>
                    <input type="submit"/>
                </form>
        </div>
    )


}
export default Createstartupfundnig;
