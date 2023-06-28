import React, { useContext } from 'react';
import Child from './Child';
import { AppContext } from './useContext';

export default function Parent() {

    const userData2 = useContext(AppContext)
    return (
        <div>
            <h2>Parent Component =  My Name is {userData2.name} and My age is {userData2.age}</h2>
            <Child />
        </div>
    )
}
