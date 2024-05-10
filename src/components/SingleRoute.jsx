import React from "react";

export default function SingleRoute(props) {
  return (
    <div className="single-route d-flex flex-sm-nowrap flex-wrap gap-3 mb-4">
      <div className="col-sm col-12">
        <p className="m-0 mb-2">
          <span className="fw-semibold">Route</span>
          <span className="text-danger fw-bold">*</span>
        </p>
        <select
          className="form-select border-black py-2 rounded-3 form-field"
          name="routeName"
          required
        >
          <option value="One">One</option>
          <option value="two">two</option>
        </select>
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
          className="form-control border-dark py-2 rounded-3 form-field"
          placeholder="Enter"
          required
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
