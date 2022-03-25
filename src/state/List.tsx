import React, { useState } from "react"
export const List: React.FC = () => {
    const [name, setName] = useState('')
    const [guest, setGuest] = useState<string[]>([])
    const onClick = () => {
        setName('')
        setGuest([...guest, name])
    }
    return (
        <div>
            <h3>Guess list</h3>
            {guest.map((name) => {
                return <p>{name}</p>
            })}
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={onClick}>add guess</button>

        </div>
    )
}