import {useState} from "react"
function PageNotFound(){

  const [change, setChange] = useState(0);
  const [clickHere,setClickHere] = useState("here");
  return(
<div>{change}
{  console.log(change)}
  <div onClick={()=>setChange(change+1)}>Change Number</div>
  <div >{clickHere}</div>
  <button onClick={()=>setClickHere(" ")}>Ckidl</button>
</div>
)
}
export default PageNotFound