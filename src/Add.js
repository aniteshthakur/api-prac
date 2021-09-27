import React,{useRef} from 'react'

const Add = () => {
    const number1=useRef();
    const number2=useRef();
    const onSubmit=()=>{
        console.log(number1.current.value+number2.current.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="number" ref={number1} />
            <input type="number" ref={number2} />
            <button>Add</button>
        </form>
    )
}

export default Add
