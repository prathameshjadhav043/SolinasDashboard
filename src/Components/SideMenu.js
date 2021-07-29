import React from 'react'
import { useState } from 'react'
import { Client } from './Client'
import { Defects } from './Defects'

import '../App.css'

export const SideMenu = () => {

    const [sw, setSw] = useState(true);

    return (
        <div className="side_menu">
            <ul className="menu">
                <li onClick={() => { setSw(true) }}>Client Info</li>
                <li onClick={() => { setSw(false) }}>Defects</li>
            </ul>
            {sw ? (
                <>
                    <Client />
                </>
            ) : (
                <>
                    <Defects />
                </>
            )
            }
        </div>
    )
}
