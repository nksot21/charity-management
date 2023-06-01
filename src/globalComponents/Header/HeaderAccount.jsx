import React from 'react'

export default function HeaderAccount() {
  return (
    <div>

        <div className="dropdown">
            <button className="btn bg-dark dropdown-toggle text-white" type="button" id="dropdownMenuButton"
                data-mdb-toggle="dropdown" aria-expanded="false" 
                style={{width:"100px", height: "44px", fontWeight: "600", borderRadius: "100px"}}>
                <span style={{marginRight: "2px", fontSize:"14px", fontWeight:600}}> aSheep </span>
            </button>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li>
                            <a className="dropdown-item" href='#'>Edit</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href='#'>Log out</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href='#'>Info</a>
                        </li>
                    </ul>
                </div>
    </div>
  )
}
