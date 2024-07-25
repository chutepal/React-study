import { useState } from "react"

export default function UseStateObject() {
    const [name, setName] = useState({firstName: '', lastName:''})
    return (
        <>
            <h2> UseState with object</h2>
            <label>First Name</label>
            <input onChange={e => setName({...name, firstName: e.target.value})}></input>
            <label>Last Name</label>
            <input onChange={e => setName({...name, lastName: e.target.value})}></input>
            <p>Hello, I am {name.firstName} {name.lastName}</p>
        </>
    )
}