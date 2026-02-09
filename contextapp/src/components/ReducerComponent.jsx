import React, { useReducer } from 'react'

export default function ReducerComponent() {

    const  reducer=(state,action)=>{
        if(action.type==="increment"){
            return {count : state.count +1}
        }
        else if(action.type==="decrement"){
            return {count : state.count -1}
        }
        else if(action.type==="reset"){
            return {count : 0}
        }
    }

    const [state,dispatch] = useReducer(reducer,{count:0})
  return (
    <div className=' flex justify-center'>
        <div className=' p-5 w-min border-2 rounded-2xl flex flex-col items-center mt-12.5 bg-amber-500'>
        <h1 className=' text-4xl font-semibold mb-10 text-amber-800'>Count: {state.count}</h1>
        <div className=' flex gap-5'>
            <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg shadow-sm hover:bg-gray-50 active:scale-95 transition-all"  onClick={()=>dispatch({type:"increment"})}>Increment</button>
            <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg shadow-sm hover:bg-gray-50 active:scale-95 transition-all"  onClick={()=>dispatch({type:"decrement"})}> Decrement</button>
            <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg shadow-sm hover:bg-gray-50 active:scale-95 transition-all" onClick={()=>dispatch({type:"reset"})}>Reset</button>
        </div>
    </div>
    </div>
    
  )
}
