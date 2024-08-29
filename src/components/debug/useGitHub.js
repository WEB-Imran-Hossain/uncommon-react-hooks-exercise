import { useState, useEffect } from "react";



const useGitHub = () => {
    const [user, setUser]=useState(null)
    const [error, setError]=useState(null)
    const [loading, setLoading]=useState(false)
    
    

  return (
    <div>useGitHub</div>
  )
}

export default useGitHub