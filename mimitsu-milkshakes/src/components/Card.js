import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../../imgs/${props.item.img}`} alt="cherry vanilla" className="card--image"/>
            <p className="bold card--p">{props.item.name}</p>
            <p className="italic card--p">{props.item.ingredients}</p>
            <p className="bold card--p">{props.item.price}</p>
        </div>
    )
}