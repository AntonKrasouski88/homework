import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string; // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void; // need to fix any
    addUser: ()=> void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error: '';
    console.log(error)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            {error ? <div style={{color:'red'}}>Error: input field is empty!!! </div>: ''}
        </div>
    )
}

export default Greeting
