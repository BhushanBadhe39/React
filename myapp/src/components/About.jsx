import React from 'react'
import style from '../assets/About.module.css'

export default function About() {
    const name = "Bhushan";
    const age = 20;
    const gender = "Male";

    const fruits = ['Apple','Banana','Chikoo'];
    const newFruits = [];
    for (let index = 0; index < fruits.length; index++) {
        newFruits.push(<li key={index}>{fruits[index]}</li>)
    }
//--------------------------------------------------------------------------------------//
//                      NEVER USE FOR LOOP FOR ITERATION OF ARRAY                       //
//                      USE Map() INSTEAD                                               //
//--------------------------------------------------------------------------------------//

  return (
    <div>
        <h1>Personal Details:- </h1>
        <h2 className={style.h22}>{name} {age} {gender}</h2>

        <ul>
            {
                fruits.map(fruit=><li key={fruit}>{fruit}</li>)
            }
        </ul>
        <ol>
            {
                newFruits
            }
        </ol>
    </div>

  )
}
