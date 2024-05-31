import React, { createContext, useState } from "react";

export const TokenContextStart = createContext();

export default function TokenContext(props) {
    const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSb2xlIjoiRHJpdmVyIiwiSWQiOiI3IiwiTmFtZSI6IkFmYXEiLCJFbWFpbCI6IkFmYXEiLCJleHAiOjE3MTcyMzA3OTQsImlzcyI6ImFtYXpvbmRzcF9hcGkiLCJhdWQiOiJhbWF6b25kc3BfYXBpIn0.EXY_Si2LtWJpz4NVjlWlZk0JRMGFZH9mXPDVisYZsiE");

    return (
        <TokenContextStart.Provider value={{ token }}>
            {props.children}
        </TokenContextStart.Provider>
    );
}
