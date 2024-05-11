import React, { createContext, useContext, useEffect, useState } from "react";
import { TokenContextStart } from "./TokenContext";

export const StationsContextStart = createContext();

export default function StationsContext(props) {
    const [stationsList, setStationsList] = useState(JSON.parse(localStorage.getItem("stationsList")) || []);
    const [fetchedStations, setFetchedStations] = useState();
    const { token } = useContext(TokenContextStart);

    // Fetching Stations:
    const fetchingStations = async () => {
        let response = await fetch("https://dev-amzdsp-api.dispatchex.com/api/Stations/getallStation", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "filterModel": {
                    "createdFrom": "2023-01-08",
                    "createdTo": "2024-05-08",
                    "start": 0,
                    "length": 1000,
                    "search": "",
                    "sortDir": "desc",
                    "sortCol": 0
                },
                "stationTypeId": 0
            })
        });

        if (response.ok) {
            let result = await response.json();
            setFetchedStations(result.response.data);
        }
    }

    // Effects
    useEffect(() => {
        fetchingStations();
    }, [])

    return (
        <StationsContextStart.Provider value={{ stationsList, setStationsList, fetchedStations, setFetchedStations }}>
            {props.children}
        </StationsContextStart.Provider>
    );
}
