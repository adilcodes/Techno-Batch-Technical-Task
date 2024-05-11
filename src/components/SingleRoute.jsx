import React, { useContext } from "react";
import { RoutesContextStart } from "../context/RoutesContext";

export default function SingleRoute(props) {

  const { routes } = useContext(RoutesContextStart);

  return (
    <div className="single-route d-flex flex-sm-nowrap flex-wrap gap-3 mb-4">
      <div className="col-sm col-12">
        <p className="m-0 mb-2">
          <span className="fw-semibold">Route</span>
          <span className="text-danger fw-bold">*</span>
        </p>
        <form>
          <select
            className="form-select border-black py-2 rounded-3 form-field"
            name="selectedRoute"
            required
            value={props.routeValue}
            onChange={(e) => {
              props.changeRouteValueHandler(e, props.id)
            }}
          >
            <option disabled value="">
              Select The Route To Add Demand
            </option>
            {
              routes.map((route, index) => {
                return (
                  <option
                    key={index}
                    value={route.RouteName + "--" + route.RouteId}
                    disabled={props.routesNames ? (props.routesNames.includes(route.RouteName + "--" + route.RouteId) ? true : false) : ""}
                  >
                    {route.RouteName}
                  </option>
                )
              })
            }
          </select>
        </form>
      </div>

      <div className="col-sm col">
        <p className="m-0 mb-2">
          <span className="fw-semibold">Demand</span>
          <span className="text-danger fw-bold">*</span>
        </p>
        <input
          type="number"
          name="routesDemand"
          value={props.routeDemand}
          onChange={(e) => {
            props.changeDemandValueHandler(e, props.id);
          }}
          className="form-control border-dark py-2 rounded-3 form-field"
          placeholder="Enter"
          required
          disabled={props.routeValue != "" ? false : true}
        />
      </div>

      <div className="col-sm-2 col d-flex align-items-end">
        <button
          className="btn btn-danger border-2 rounded-3 px-0 py-2 w-100"
          onClick={() => {
            props.delRouteRowHandler(props.id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}