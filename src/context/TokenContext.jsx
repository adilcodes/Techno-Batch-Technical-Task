import React, { createContext, useState } from "react";

export const TokenContextStart = createContext();

export default function TokenContext(props) {
    const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSb2xlIjoiRHJpdmVyIiwiSWQiOiI3IiwiTmFtZSI6IkFmYXEiLCJFbWFpbCI6IkFmYXEiLCJleHAiOjE3MTU3NDI0OTYsImlzcyI6ImFtYXpvbmRzcF9hcGkiLCJhdWQiOiJhbWF6b25kc3BfYXBpIn0.kbmfOTCcZ0dDfgj1j0E30Mo0fJCni4MGvTgiMg42kkU");

    return (
        <TokenContextStart.Provider value={{ token }}>
            {props.children}
        </TokenContextStart.Provider>
    );
}
