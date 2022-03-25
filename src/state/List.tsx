import React, { useState } from "react"
export const List: React.FC = () => {
    const [name, setName] = useState('')
    return (
        <div>
            <h3>Guess list</h3>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button>add guess</button>

        </div>
    )
}