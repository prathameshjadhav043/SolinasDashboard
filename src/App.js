import React from 'react'
import { Nav } from './Components/Nav'
import { Map } from './Components/Map'
import { SideMenu } from './Components/SideMenu'
import './App.css'

export const App = () => {
    return (
        <div className="App">
            <Nav />
            <div className="App_component">
                <SideMenu />
                <Map />
            </div>
        </div>
    )
}