import { useState, useEffect, useDebugValue } from "react";

const useGitHub = (username) => {
    useDebugValue(`Fetching data for ${username}`) //top level useDebugValue hook write

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useDebugValue(
    error
        ? `There is an error fetching the data for ${username}`
        : `No Error fetching the data for ${username}`
);

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

  useDebugValue(user, (user) => user?.bio);
  return { user, loading, error };
};

export default useGitHub;
