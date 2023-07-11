import React from "react";
import ReactDOM from "react-dom";

const userList = [{ "name": "Jeet Rao" },{ "name": "Ankit" },{ "name": "Pankaj" }];
const Listing = () => {
    return (
        <>
            <ul>
                {
                    userList.map((value,index) => {
                        <li key={index}>{value.name}</li>
                    })
                }
            </ul>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Listing />);

