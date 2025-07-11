import {useState} from "react"
function PageNotFound(){

  const [change, setChange] = useState(0);
  const [clickHere,setClickHere] = useState("here");
  return(
<div className="h-[40rem] flex flex-col items-center pt-40">{change}
{  console.log(change)}
  <div onClick={()=>setChange(change+1)}>Change Number</div>
  <div >{clickHere}</div>
  <button onClick={()=>setClickHere(" ")}>ClickHere</button>
</div>
)
}
export default PageNotFound