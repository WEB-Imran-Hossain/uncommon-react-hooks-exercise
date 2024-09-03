import React, { useDeferredValue, useMemo, useState } from "react";
import { animals } from "./fakeAnimals";

const ITEMS_PER_PAGE = 500;

const ListAnimal = () => {
    const [name, setName] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const deferredName = useDeferredValue(name);

//     const animalPark = useMemo(() => {
//         return animals.filter((animal) => animal.name.includes(deferredName));
//     }, [deferredName]);

//     function handleChange(e) {
//         setName(e.target.value);
//     }

//     return (
//         <>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={handleChange}
//                 className="border rounded border-slate-200 p-1 my-2 mx-2"
//             />
//             {animalPark.map((animal) => (
//                 <div key={animal.id} className="border bg-gray-100 p-2 m-2">
//                     {animal.name}
//                 </div>
//             ))}
//         </>
//     );
// };

const animalPark = useMemo(() => {
    return animals.filter((animal) =>
        animal.name.toLowerCase().includes(deferredName.toLowerCase())
    );
}, [deferredName]);

const totalPages = Math.ceil(animalPark.length / ITEMS_PER_PAGE);

const paginatedAnimals = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return animalPark.slice(startIndex, endIndex);
}, [currentPage, animalPark]);

function handleChange(e) {
    setName(e.target.value);
    setCurrentPage(1); // Reset to first page when filtering
}

function goToPage(page) {
    setCurrentPage(page);
}

return (
    <>
        <input
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Search animals"
            className="border rounded border-slate-200 p-2 my-4 w-full max-w-md mx-auto block"
        />

        {/* Grid Layout for Animals */}
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-4 px-4">
            {paginatedAnimals.map((animal) => (
                <div
                    key={animal.id}
                    className="border bg-gray-100 p-4 rounded shadow hover:shadow-lg transition"
                >
                    {animal.name}
                </div>
            ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="mx-1 px-3 py-2 border rounded bg-slate-200 disabled:opacity-50"
            >
                Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => goToPage(index + 1)}
                    className={`mx-1 px-3 py-2 border rounded ${
                        currentPage === index + 1
                            ? "bg-blue-500 text-white"
                            : "bg-slate-200"
                    }`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="mx-1 px-3 py-2 border rounded bg-slate-200 disabled:opacity-50"
            >
                Next
            </button>
        </div>
    </>
);
};


export default ListAnimal;