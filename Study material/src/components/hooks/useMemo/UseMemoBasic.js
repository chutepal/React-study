/**
 * Step 1: Create two counters and display count values for both
 * Step 2: maintain two separate states for counters using useState
 * 
 * Now, when you update either of the counter, respective counter value changes immediately on button click.
 * 
 * Step 3: Add an expensive function(time taking) which is has one count value's dependency. Let's take for counter 1: isEven()
 * 
 * Now, if you update counter 1, it takes some time to show the updated count value for counter 1 as expensive method is rendering to calculate based on count1.
 * If you try to update counter 2, it will also take some time before updating the value for counter 2. It is because component re-renders and expensive method added isEven runs again.  To avoid this, we can use useMemo hook.
 * 
 * What is useMemo hook?
 * The React useMemo Hook returns a memoized value.
 * Think of memoization as caching a value so that it does not need to be recalculated.
 * The useMemo Hook only runs when one of its dependencies update.
 * This can improve performance.
 * The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. 
 * 
 * 
 * Step 4: Now, create a useMemo hook. It takes two parameters:
 * 1. Expensive function(time taking function)
 * 2. Dependency variable
 * 
 * Now, counter 1 will take some time to update and reflect the value but as counter2 has no dependency, it will show updated value without any delay.
 */

import React, { useMemo, useState } from 'react'

function UseMemoBasic() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const isEven = useMemo(() => {
        let i = 0;
        while(i<1000000000) i++; // Ading this expensive(slow) function to demonstrate the usage of useMemo hook
        return count1 % 2 === 0
    }, [count1])

    return (
        <div>
            <div>
                <button onClick={() => setCount1(count1 + 1)}>Counter 1 - {count1}</button>
                {isEven ? 'Even' : 'Odd'}
            </div>
            <div>
                <button onClick={() => setCount2(count2 + 1)}>Counter 2 - {count2}</button>
            </div>
        </div>
    )
}

export default UseMemoBasic
