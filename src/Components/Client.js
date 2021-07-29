import React from 'react'
import { ClientItem  } from './ClientItem'


export const Client = () => {

    const item = [
        {
            id : 0,
            val : 80
        },
        {
            id : 1,
            val : 60
        },
        {
            id : 2,
            val : 90
        },
        {
            id : 3,
            val : 40
        }
    ];

    return (
        <>
        <div className="box_client box">
            <div className="info">
                <label>Client ID : # SOLI18743</label>
                <br />
                <label>Client Name : User Name</label>
            </div>
            <div className="sytem_d">
                <label>OS System : ---- </label>
                <br />
                <label>Date : ------ </label>
            </div>
        </div>
        {item.map((data)=>{
            return(
                <ClientItem data={data} val={data.val} key={data.id}/>
            )
        })}
        </>
    )
}
