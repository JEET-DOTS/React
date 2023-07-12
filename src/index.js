import React from "react";
import { createRoot } from 'react-dom/client';
const Listing = () => {
    const users = [{ "name": "Jeet Rao" }, { "name": "Ankit" }, { "name": "Pankaj" }];
    return (
        <>
            <ul>
                {
                    users.map((user, key) => (
                        <li key={key}>{user.name}</li>
                    ))
                }
            </ul>
        </>
    )
}
const root = createRoot(document.getElementById('root'));
root.render(<Listing />);