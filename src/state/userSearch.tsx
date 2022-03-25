import React, { useState } from "react";
const users = [
    { name: 'ibrahim', age: 20 },
    { name: 'douga', age: 20 },
    { name: 'boukary', age: 20 }
]
export const UserSearch: React.FC = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState<{ name: string, age: number } | undefined>()
    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })
        setUser(foundUser)
    }
    return <div>user
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick}>find</button>

        <div>{user?.name}</div>
    </div>
}