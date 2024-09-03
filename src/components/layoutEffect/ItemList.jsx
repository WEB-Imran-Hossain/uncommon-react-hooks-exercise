import  { useLayoutEffect, useRef, useState } from 'react';

// ItemList Component: Responsible for displaying a list of items and auto-scrolling to the bottom when new items are added.
function ItemList({ items }) {
  const listRef = useRef(null); // Create a reference to the list container

  useLayoutEffect(() => {
    // Scroll to the bottom whenever the items change
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [items]); // Dependency array ensures this effect runs after every update to the 'items' array

  return (
    <div
      ref={listRef} // Attach the reference to this div element
      style={{
        maxHeight: '200px',
        overflowY: 'auto',
        border: '1px solid black',
        padding: '8px',
        borderRadius: '4px',
      }} // Styling for scrollable container
    >
      {items.map((item, index) => (
        <div
          key={index} // Use index as key since items are simple and have no unique ID
          style={{ padding: '8px', borderBottom: '1px solid gray' }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

// App Component: Manages the list of items and provides the functionality to add new items.
export default function App() {
  const [items, setItems] = useState(["Item 1", "Item 2"]); // Initialize state with two items

  const addItem = () => {
    // Function to add a new item to the list
    setItems(prevItems => [...prevItems, `Item ${prevItems.length + 1}`]);
  };

  return (
    <div style={{ padding: '16px' }}>
      <button
        onClick={addItem} // Add new item when button is clicked
        style={{
          marginBottom: '16px',
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add Item
      </button>
      <ItemList items={items} /> {/* Pass the current list of items to the ItemList component */}
    </div>
  );
}