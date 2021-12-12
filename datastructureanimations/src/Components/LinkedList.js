import React from 'react'
import{NavLink,Outlet} from "react-router-dom"

const LinkedList = () => {
    return (
        <div>
            <ul>
            <li><NavLink className="bodylink" to="singlyLinkedLists">Singly Linked Lists</NavLink></li>
            <li><NavLink className="bodylink" to="doublyLinkedLists">Doubly Linked Lists</NavLink></li>
            </ul>
            <Outlet></Outlet>
        </div>
    )
}

export default LinkedList
