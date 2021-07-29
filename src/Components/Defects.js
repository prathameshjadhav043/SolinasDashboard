import React from 'react'
import { DefectItem } from './DefectItem'

export const Defects = () => {

    const defectsData = [
        {
            id:1,
            geolocation:-10.327685 -6.60865,
            leakCodition: 'Mild',
            leakSize: '10cm x 10cm'
        },
        {
            id:2,
            geolocation:-10.327685 -6.60865,
            leakCodition: 'Mild',
            leakSize: '10cm x 10cm'
        },
        {
            id:3,
            geolocation:-10.327685 -6.60865,
            leakCodition: 'Mild',
            leakSize: '10cm x 10cm'
        },
        {
            id:4,
            geolocation:-10.327685 -6.60865,
            leakCodition: 'Mild',
            leakSize: '10cm x 10cm'
        }
    ];
    return (
        <>
        {defectsData.map((data)=>{
            return(
                <DefectItem data={data} key={data.id}/>
            )
        })}
        </>
    )
}
