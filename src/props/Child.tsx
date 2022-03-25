interface childProps {
    color:string
}

export const Child = ({color}:childProps) => {
    return <p>{color}</p>
}