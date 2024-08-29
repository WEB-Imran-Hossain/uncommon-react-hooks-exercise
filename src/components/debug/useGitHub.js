import { useState, useEffect } from "react";



const useGitHub = (username) => {
    const [user, setUser]=useState(null)
    const [error, setError]=useState(null)
    const [loading, setLoading]=useState(false)
    
    useEffect(()=>{
const fetchData=async()=>{
setLoading(true)
try {
    const response=await fetch(`https://api.github.com/${username}`)
    const responseData=await response.json()
    console.log(responseData);
    
    
} catch (error) {
    setError(error)
}
}
fetchData()
    },[username])

  return {user, loading, error}
}

export default useGitHub