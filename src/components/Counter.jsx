//  import { useState } from "react";
// function Counter() {
//     // let count= 0;
//     const [count, setCount] = useState(0);
//     const increment = () => {
//       setCount(count + 1);
//       console.log(count);
//     };
//     const decrement = () => {
//         setCount(count -1);
//         console.log(count);
//     };
//      return (
    
//     <div className="bg-fuchsia-400 p-3 flex justify-center text-green-900 text-3xl  items-center">
//     <button onClick={() => decrement()}>-</button>
//     <span>{count}</span>
//     <button onClick={increment}>+</button>
//     </div>
//   );
// }

// export default Counter;

import React, { useState } from 'react';

function App() {
    // State to manage the counter
    const [count, setCount] = useState(0);

    // Function to increment the counter
    const incrementCounter = () => {
        setCount(count + 1);
    };
    const decrementCounter = () => {
        setCount(count - 1);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                {/* Display the counter value */}
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Counter: {count}
                </h1>

                {/* Button with hover effect */}
                <button
                    onClick={incrementCounter}
                    className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Increment Counter
                </button>
                <button
                    onClick={() =>decrementCounter() }
                    className="px-6 py-3 p-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Decrement Counter
                </button>
            </div>
        </div>
    );
}

export default App;
