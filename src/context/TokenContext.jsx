import React, { createContext, useState } from "react";

export const TokenContextStart = createContext();

export default function TokenContext(props) {
    const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSb2xlIjoiRHJpdmVyIiwiSWQiOiI3IiwiTmFtZSI6IkFmYXEiLCJFbWFpbCI6IkFmYXEiLCJleHAiOjE3MTU1MDc4NTMsImlzcyI6ImFtYXpvbmRzcF9hcGkiLCJhdWQiOiJhbWF6b25kc3BfYXBpIn0.E0A8bzw5ecWcCGvNIk-OPUVkZibxtS03E8TwdJsC_Mw");

    return (
        <TokenContextStart.Provider value={{ token }}>
            {props.children}
        </TokenContextStart.Provider>
    );
}
