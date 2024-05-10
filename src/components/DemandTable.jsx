import React from 'react'

export default function DemandTable() {
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
                    <tr className='tr-border'>
                        <td className='py-4 px-3'>Mark</td>
                        <td className='py-4 px-3'>Otto</td>
                        <td className='py-4 px-3'>Mark</td>
                        <td className='py-4 px-3'>@mdo</td>
                        <td className='py-4 px-3'>Otto</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
