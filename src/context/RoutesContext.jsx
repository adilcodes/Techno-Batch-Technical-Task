import React, { createContext, useState } from "react";

export const RoutesContextStart = createContext();

export default function RoutesContext(props) {
    const [routes, setRoutes] = useState([]);

    return (
        <RoutesContextStart.Provider value={{ routes, setRoutes }}>
            {props.children}
        </RoutesContextStart.Provider>
    );
}
