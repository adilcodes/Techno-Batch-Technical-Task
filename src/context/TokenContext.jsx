import React, { createContext, useState } from "react";

export const TokenContextStart = createContext();

export default function TokenContext(props) {
    const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSb2xlIjoiRHJpdmVyIiwiSWQiOiI3IiwiTmFtZSI6IkFmYXEiLCJFbWFpbCI6IkFmYXEiLCJleHAiOjE3MTU2MTg3ODQsImlzcyI6ImFtYXpvbmRzcF9hcGkiLCJhdWQiOiJhbWF6b25kc3BfYXBpIn0.Ohcsh6GecRDK__PD0t9YZg-LVCJWMeBZoOOwrpWB8Z4");

    return (
        <TokenContextStart.Provider value={{ token }}>
            {props.children}
        </TokenContextStart.Provider>
    );
}
