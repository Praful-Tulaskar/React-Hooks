import React from 'react';
import { useContext } from 'react';
import { AppContext } from './useContext';

export default function Child() {

    const userData = useContext(AppContext);
    // console.log(userData)
  return (
    <div>
      <p>Child = My name is {userData.name} and My age is {userData.age}.</p>
    </div>
  )
}
