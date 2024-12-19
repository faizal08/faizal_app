import { useState } from "react"
import Splitpercentage from "./Splitpercentage";
import useBill from "./useBill";


function Splitter() {

    const[bill,setBill] = useState(0);
    const[people,setPeople]=useState(0);
    const[displayTipAmout,setDIsplayTipAmount] = useState(0);
    
  return (
    <>
      
      <div className=" bg-slate-500 w-96 h-64 justify-center ml-96 mt-64">
             <div className="ml-5">
               <label>Bill : </label>
             </div>
             <div className="ml-5">
               <input type="text" placeholder="$" onChange={(e)=>{setBill(e.target.value)}} value={bill}/>
             </div>
             <div className="ml-5">
                <label>Select Tip % : </label>
             </div>
             <useBill.Provider value={bill}>
               <Splitpercentage data ={5} sendFunc={setDIsplayTipAmount}/>
                <Splitpercentage data ={10} />
                <Splitpercentage data ={15}/>
                <Splitpercentage data ={25}/>
                <Splitpercentage data ={50}/>
             </useBill.Provider>
             <div className="ml-5">
               <label>Number of People : </label>
             </div>
             <div className="ml-5">
                 <input type="text" onChange={(e)=>{setPeople(e.target.value)}} value={people} />
             </div>
        </div>
        <div className=" bg-green-950 w-96 h-64 justify-center ml-96 mt-10 inline-block">
             <div>
             <div className="ml-5">
               <label className=" text-white">Tip Amout : </label>
             </div>
             <div className="ml-5">
               <input type="text" placeholder="Tip Amount" value={displayTipAmout} />
             </div>
             </div>
             <div>
             <div className="ml-5">
               <label className=" text-white">Total : </label>
             </div>
             <div className="ml-5">
               <input type="text" placeholder="$" />
             </div>
             </div>
             <div>
                 <button className=" bg-black text-white  ml-5 mr-3 w-28 rounded-md mt-5" >RESET</button>
             </div>
        </div>
        
    </>
  )
}

export default Splitter