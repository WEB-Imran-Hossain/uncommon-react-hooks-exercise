import { useState, useEffect, useDebugValue } from "react";
import { useStateDisplayName } from "./useStateDisplayName";

const useGitHub = (username) => {
  // Adds a debug label for the custom hook in React DevTools, showing the username being fetched
  useDebugValue(`Fetching data for ${username}`);

  const [user, setUser] = useStateDisplayName(null, "userInfo"); // State to store the GitHub user data
  const [error, setError] = useStateDisplayName(null, "errorInfo"); // State to store any errors encountered during data fetching
  const [loading, setLoading] = useStateDisplayName(false, "loadingInfo"); // State to track the loading status

  // Adds a conditional debug value to indicate if there was an error during data fetching
  useDebugValue(
    error
      ? `There is an error fetching the data for ${username}`
      : `No Error fetching the data for ${username}`
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when starting the data fetch
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data"); // Throw an error if the response is not successful
        }
        const responseData = await response.json();
        setUser(responseData); // Set the fetched user data to state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setError(error.message); // Set error message if there is a problem fetching the data
        setLoading(false); // Set loading to false if an error occurs
      }
    };
    fetchData();
  }, [username]);

  // Adds a debug value to show the user's bio in React DevTools
  // This line adds the user's bio as a debug value, making it easy to inspect the bio's presence and content
  useDebugValue(user, (user) => user?.bio);

  return { user, loading, error }; // Return the user data, loading status, and error state from the hook
};

export default useGitHub;