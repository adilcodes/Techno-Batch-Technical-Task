import React, { createContext, useState } from "react";

export const TokenContextStart = createContext();

export default function TokenContext(props) {
    const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSb2xlIjoiRHJpdmVyIiwiSWQiOiI3IiwiTmFtZSI6IkFmYXEiLCJFbWFpbCI6IkFmYXEiLCJleHAiOjE3MTU0NDcxMDgsImlzcyI6ImFtYXpvbmRzcF9hcGkiLCJhdWQiOiJhbWF6b25kc3BfYXBpIn0.BhjbhTyhwUL4rdsq29-DWjewWzSFUL4QSvlkP4p4y7A");

    return (
        <TokenContextStart.Provider value={{ token }}>
            {props.children}
        </TokenContextStart.Provider>
    );
}
