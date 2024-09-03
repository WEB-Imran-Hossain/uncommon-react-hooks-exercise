import {useState, useInsertionEffect, useEffect} from 'react'

const Boomer = () => {

    const [color, setColor] = useState("blue");
    const dynamicStyle = `
    .dynamic-style {
        color: ${color}
    }
`;
// useEffect(() => {
//     console.log("useEffect")
// }, [])

    const changeColor = () => {
        setColor("red");
    };
    useInsertionEffect(() => {
        console.log("useInsertionEffect")
        const styleEle = document.createElement("style");
        styleEle.innerHTML = dynamicStyle;
        document.head.appendChild(styleEle);
        return () => {
            document.head.removeChild(styleEle);
        };
    }, [color]);

    return (
        <div className="my-10 text-center">
            <h1 className="dynamic-style">Imran Hossain</h1>
            <button
                onClick={changeColor}
                className="bg-black text-white p-1 rounded mt-3">
                    Change
            </button>
        </div>
    );
}

export default Boomer