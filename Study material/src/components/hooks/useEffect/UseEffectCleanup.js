import { useState } from "react"
import UseEffectOnlyOnce from "./UseEffectOnlyOnce";

// example for componentWillUnmount check UseEffectOnlyOnce component
export default function UseEffectCleanup() {

    const [display, setDisplay] = useState(true);

    return (
        <>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <UseEffectOnlyOnce/>}
        </>
    )
}