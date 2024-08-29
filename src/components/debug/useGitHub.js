import { useState, useEffect } from "react";

const useGitHub = (username) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
        const responseData = await response.json();
        setUser(responseData); // Set user data here
        setLoading(false)
      } catch (error) {
        setError(error.message);
        setLoading(false)
      }
    };
    fetchData();
  }, [username]);

  return { user, loading, error };
};

export default useGitHub;
