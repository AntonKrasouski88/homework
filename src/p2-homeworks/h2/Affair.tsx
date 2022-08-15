import React from 'react'
import {AffairType} from "./HW2";
import Af from './Affairs.module.css'

export type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={Af.someClass}>
            <li key={props.affair._id}>
                {props.affair.name}
                <span> {props.affair.priority}</span>
            </li>
            <button className={Af.button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
