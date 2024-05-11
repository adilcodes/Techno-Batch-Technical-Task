import React, { useContext, useEffect, useState } from "react";
import DemandHeader from "../components/DemandHeader";
import Footer from "../components/Footer";
import DemandTable from "../components/DemandTable";
import { SmallLoader } from "../components/Loader";
import Select from 'react-select';

// Context
import { StationsContextStart } from "../context/StationsContext";
import { TokenContextStart } from "../context/TokenContext";

export default function ViewDemands() {
  // States:
  const { fetchedStations } = useContext(StationsContextStart);
  const { token } = useContext(TokenContextStart);

  const [isLoading, setIsLoading] = useState(false);
  const [fetchedTableData, setFetchedTableData] = useState([]);

  const [filterValues, setFilterValues] = useState({
    createdFrom: "",
    createdTo: "",
    stations: [],
    stationsForFilter: []
  });

  // Funtions:
  const changingInputVals = (e) => {
    const { name, value } = e.target;
    setFilterValues({
      ...filterValues,
      [name]: value,
    });
  }

  const changeSelectedOptions = (options) => {
    setFilterValues({
      ...filterValues,
      stations: options,
      stationsForFilter: options.map((opt) => opt.value),
    });
  }

  const startFiltering = () => {
    fetchingTableData();
  };

  const fetchingTableData = async () => {
    setIsLoading(true)
    let response = await fetch("https://dev-amzdsp-api.dispatchex.com/api/RouteDemand/GetAllRouteDemand", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "filterModel": {
          "createdFrom": filterValues?.createdFrom || "2022-03-11",
          "createdTo": filterValues?.createdTo || "2024-03-18",
          "start": 0,
          "length": 10000,
          "search": "",
          "sortDir": "desc",
          "sortCol": 0
        },
        "stationids": filterValues?.stationsForFilter?.toString() || ""
      })
    });

    if (response.ok) {
      let result = await response.json();
      setFetchedTableData(result.response.data);
      setIsLoading(false);
    }
  }

  // Effects:
  useEffect(() => {
    fetchingTableData();
  }, []);

  let stationOptions = fetchedStations?.map((station) => {
    return (
      { value: station.StationId, label: station.StationName }
    )
  })

  return (
    <div className="cstm-container container-fluid d-flex flex-column">
      {/* Header */}
      <DemandHeader />

      {/* Body Start */}
      <div className="mt-4 pt-2 row px-4">
        {/* Filters Start */}
        <div className="filters d-flex flex-md-nowrap flex-wrap gap-4 mb-4 pb-2">
          <div className="col-md col-12">
            <p className="m-0 mb-2">
              <span className="fw-semibold">Created From</span>
              <span className="text-danger fw-bold">*</span>
            </p>
            <input
              type="date"
              name="createdFrom"
              required
              className="form-control border-dark py-2 rounded-3 form-field"
              value={filterValues.createdFrom}
              onChange={changingInputVals}
            />
          </div>
          <div className="col-md col-12">
            <p className="m-0 mb-2">
              <span className="fw-semibold">Created To</span>
              <span className="text-danger fw-bold">*</span>
            </p>
            <input
              type="date"
              name="createdTo"
              required
              className="form-control border-dark py-2 rounded-3 form-field"
              value={filterValues.createdTo}
              onChange={changingInputVals}
            />
          </div>
          <div className="col-md col">
            <p className="m-0 mb-2">
              <span className="fw-semibold">Station</span>
              <span className="text-danger fw-bold">*</span>
            </p>
            <Select
              isMulti
              name="stations"
              options={stationOptions}
              className="basic-multi-select rounded-3 form-field"
              classNamePrefix="select"
              value={filterValues.stations}
              onChange={changeSelectedOptions}
            />
          </div>
          <div className="col-sm-2 col-4 col d-flex align-items-end">
            <button
              className="btn btn-warning border-2 rounded-2 px-2 py-2 w-100"
              onClick={startFiltering}
            >
              Filter
            </button>
          </div>
        </div>
        {/* Filters End */}

        {/* Table Start */}
        {
          isLoading
            ? <SmallLoader complete={true} />
            : <DemandTable data={fetchedTableData} />
        }
        {/* Table End */}
      </div>
      {/* Body End */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
