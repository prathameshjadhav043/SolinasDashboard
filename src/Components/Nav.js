import React from 'react'


export const Nav = () => {

    return (
        <nav className="nav">
            <h1 className="log">Solinas</h1>
            <div>
                <input className="search_bar" type="text" placeholder="Search Loaction" />
                <button type="submit" className="btn">Search</button>
            </div>
        </nav>
    )
}
