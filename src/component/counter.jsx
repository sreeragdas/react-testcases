import React ,{useState} from 'react'

function Counter({props}){

    const [count , setCount] =useState(props)
    const increment =()=>{
        setCount(prev => {
      return prev + 1
        });
    }
    return (

        <div>
            
            <div data-testid="count">{count}</div>
         
        <button onClick={increment} > Add </button>
        
        </div>
    )
}

export default Counter