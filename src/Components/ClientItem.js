import React from 'react'
import { ProgressBar } from './ProgressBar'

export const ClientItem = ({data,val}) => {

    return (
        <div className="box_clientItem box"> 
            <label>iGolbus ID : ------------- </label>
                <ProgressBar done={val}/>
        </div>
    )
}
