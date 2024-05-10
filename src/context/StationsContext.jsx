import React, { createContext, useState } from "react";

export const StationsContextStart = createContext();

export default function StationsContext(props) {
    const [stationsList, setStationsList] = useState(JSON.parse(localStorage.getItem("stationsList")) || []);

    return (
        <StationsContextStart.Provider value={{ stationsList, setStationsList }}>
            {props.children}
        </StationsContextStart.Provider>
    );
}
