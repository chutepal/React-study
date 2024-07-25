import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import ButtonCounter from './ButtonCounter'

/** useCallback Hook: 
 * 
 * What?
 * useCallback is a hook that returns memoized version of the callback function that only changes if one of the dependencies is changed
 * 
 * Why?
 * It is useful when passing callbacks to optimized child components that rely on reference to euiality to prevent unnecessary renders.
*/

function UseCallbackBasic() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(25000);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 5000)
    }, [salary]);

    return (
        <>
            <Title text='useCallback Hook' />
            <Count texty='age' value={age} />
            <ButtonCounter handleClick={incrementAge}>Increment Age</ButtonCounter>
            <Count texty='salary' value={salary} />
            <ButtonCounter handleClick={incrementSalary}>Increment Salary</ButtonCounter>
        </>
    )
}

export default UseCallbackBasic
