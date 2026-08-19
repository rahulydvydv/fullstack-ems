import flash from "connect-flash/lib/flash"
import Loading from "../components/Loading";
import { useCallback, useEffect, useState } from "react"
import { dummyLeaveData } from "../assets/assets"

const Leave = () => {
  const [Leaves , setLeaves] = useState([])
  const [loading , setLoading] = useState(true)
  const [showModel , setShowModel] = useState(false)
  const [ isDeleted ,setIsDeleted] = useState(false);
  const isAdmin = false;
  const fetchLeaves = useCallback(()=>{
    setLeaves(dummyLeaveData)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  },[])
  useEffect(()=>{
    fetchLeaves()
  },[fetchLeaves])
  if(loading) return <Loading/>

  return ( 
    <div>Leave</div>
  )
}

export default Leave