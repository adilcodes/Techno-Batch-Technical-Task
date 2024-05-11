import React from 'react'

export default function DemandTable({ data }) {
    return (
        <div className="d-flex table-responsive">
            <table className='table table-hover'>
                <tr className='table-head'>
                    <td className='fw-semibold py-2 px-3'>Demand Date</td>
                    <td className='fw-semibold py-2 px-3'>Station</td>
                    <td className='fw-semibold py-2 px-3'>Demand Routes</td>
                    <td className='fw-semibold py-2 px-3'>Demand Count</td>
                    <td className='fw-semibold py-2 px-3'>POC</td>
                </tr>
                <tbody>
                    {
                        data?.map((row, index) => {
                            return (
                                <tr className='tr-border' key={index}>
                                    <td className='py-4 px-3'>{row.DemandDate}</td>
                                    <td className='py-4 px-3'>
                                        {row.StationId} <br />
                                        {row.StationName}
                                    </td>
                                    <td className='py-4 px-3'>{row.DemandRoutes}</td>
                                    <td className='py-4 px-3'>{row.DemandCount}</td>
                                    <td className='py-4 px-3'>{row.EmployeeName?.split(" ").slice(0, 2).join(" ")}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
