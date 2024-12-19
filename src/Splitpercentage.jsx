import { useState } from "react";
import useBill from "./useBill";
import { useContext } from "react";

function Splitpercentage(props) {

  const percentage = props.data;
  const[tipAmount,setTipAmount]=useState(0);

  const bill = useContext(useBill);

  const calculate = () => {
    setTipAmount(bill*(percentage/100));
  }

  return (
    <>
       <button onClick={calculate} className=" bg-green-950 text-white  ml-5 mr-3 w-28 rounded-md mt-5" >{props.data}%</button>
    </>
  )
}

export default Splitpercentage