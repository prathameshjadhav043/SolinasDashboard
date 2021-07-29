import React from 'react'

export const DefectItem = ({ data }) => {
    return (
        <div className="box_def box">
            <div className="defect_main">
                <h1>#00{data.id}</h1><br />
                <label className="label loc">Geolocation : {data.geolocation}</label><br />
                <label className="label cond">Leak Codition :{data.leakCodition}</label><br />
                <label className="label size">Leak Size :{data.leakSize}</label>
            </div>
        </div>
    )
}
