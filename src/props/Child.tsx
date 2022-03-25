import React from "react"

interface childProps {
    color:string
}

export const Child = ({color}:childProps) => {
    return <p>{color}</p>
}

export const ChildAsFc: React.FC<childProps> = ({color}) => {
    return <div>{color}</div>
}
