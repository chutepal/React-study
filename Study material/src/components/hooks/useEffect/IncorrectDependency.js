import { useEffect, useState } from "react"

export default function IncorrectDependency() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    useEffect(() => {
        const interval1 = setInterval(() => setValue1(value1+1), 1000);
        const interval2 = setInterval(() => setValue2(prevVal => prevVal+1), 1000)

        return (() => {
            clearInterval(interval1);
            clearInterval(interval2);
        })
    }, [value1]) // value 2 is not passed here as we are using prevValue to update the value2
    return (
        <>
            <div> With dependency: {value1}</div>
            <div> Without dependency: {value2}</div>
            
        </>
    )
}