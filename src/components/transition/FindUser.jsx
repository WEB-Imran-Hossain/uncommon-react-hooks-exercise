import { useState, useTransition } from "react";
import { users } from "./fakeUser";

const ITEMS_PER_PAGE = 25;

const FindUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(users);
  const [isPending, startTransition] = useTransition();
  const [currentPage, setCurrentPage] = useState(1);

  //without pagination
  //   const handleChange = ({ target: { value } }) => {
  //     // Set the search term on the textbox
  //     setSearchTerm(value);

  //     // Execution of non-urgent state update.
  //     startTransition(() => {
  //       // Filter the user list based on the search term
  //       setFiltered(users.filter((item) => item.name.includes(value)));
  //     });
  //   };

  // Calculate the paginated users
  const paginatedUsers = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const handleChange = ({ target: { value } }) => {
    setSearchTerm(value);

    startTransition(() => {
      setFiltered(users.filter((item) => item.name.includes(value)));
      setCurrentPage(1); // Reset to first page when searching
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl my-2">User Finder</h1>
      <div className="text-md my-2">
        {isPending ? (
          <div>Loading...</div>
        ) : (
          <p>
            {users.length !== filtered.length
              ? `${filtered.length} matches`
              : null}
          </p>
        )}
      </div>
      <input
        onChange={handleChange}
        value={searchTerm}
        type="text"
        placeholder="Type a name"
        className="border border-slate-200 p-1 rounded-sm"
      />

      {isPending ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-center items-center mt-4">
          {paginatedUsers.length > 0 ? (
            paginatedUsers.map((user) => (
              <div
                key={user?.name}
                className="flex flex-col m-2 p-2 border rounded-md"
              >
                <div className="rounded my-2">
                  <img
                    src={user?.avatar}
                    alt={`Avatar image of ${user?.name}`}
                    className="w-32 h-32 rounded-full"
                  />
                </div>
                <p className="text-xl text-center">
                  <strong>{user?.name}</strong>
                </p>
              </div>
            ))
          ) : (
            <h4 className="text-3xl bg-gray-200 p-2 border">
              No matches found...
            </h4>
          )}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="border border-gray-300 p-2 rounded mx-1"
        >
          Previous
        </button>
        <span className="px-4">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="border border-gray-300 p-2 rounded mx-1"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FindUser;
