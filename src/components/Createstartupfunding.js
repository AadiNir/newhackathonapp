import { useState } from "react";
function Createstartupfundnig(){
    const[form,setform]=useState({
        name:"",
        title:"",
        about:"",
        amount:"",
        date:"",
        imageurl:""

    })
    return(
        <div className="Main">
                <form className="formpage">
                <label className="f1">Name</label><br/>
                <input className="name" type="text" value={form.name} placeholder="Enter your Name"/><br/>
                <label className="f2">Startup Name</label><br/>
                <input className="title" type="text" value={form.title} placeholder="Enter your startup Name"/><br/>
                <label className="f3">About your startup</label><br/>
                <input className="about" type="text" value={form.about} placeholder="About your startup"/><br/>
                <label className="f4">Enter the amount of ether</label><br/>
                <input className="amount" type="text" value={form.amount} placeholder="Enter the amount of ethers"/><br/>
                <label className="f5">Enter the deadline date</label><br/>
                <input className="date" type="date" value={form.date} /><br/>
                <label className="f6">Paste your startup logo url</label><br/>
                <input className="image" type="url" value={form.imgurl} placeholder="paste the url of your startupp logo"/><br/>


            </form>
        </div>
    )


}
export default Createstartupfundnig;