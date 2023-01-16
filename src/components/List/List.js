import React from "react";
import './List.css'

export function List({data, open}) {
    return (
            <ul>
                {data.map((o) => (
                    <li className="list" 
                        key={o.id} 
                        id={o.id} 
                        onClick={open}>
                            {o.name}
                    </li>
                    )
                )}
            </ul>
    )
}