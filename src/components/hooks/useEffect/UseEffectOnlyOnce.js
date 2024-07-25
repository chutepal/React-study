import { useEffect, useState } from "react"

export default function UseEffectOnlyOnce() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const setCoords = (e) => {
        console.log('mousemove called')
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', setCoords)

        // add a return function to implement componentWillUnmout
        return(() => {
            window.removeEventListener('mousemove', setCoords);
        })
    }, []); // by adding a blank dependency array, it will work as componentDidMount

    return (
        <>
            <div>X co-ordinate: {x}</div>
            <div>Y co-ordinate: {y}</div>
        </>
    )
}