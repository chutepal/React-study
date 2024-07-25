import React from 'react'
import ComponentB from './ComponentB'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function ComponentA() {

    return (
        <>
            <UserContext.Provider value={'User value'}>
                <ChannelContext.Provider value={'Channel value'}>
                    <h1>Component A - First level component</h1>
                    <p>First level component</p>
                    <ComponentB />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </>
    )
}

export default ComponentA

/* Hierarchy of components 
    Component A ---> Component B ---> Component C
*/

