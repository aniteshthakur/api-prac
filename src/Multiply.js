import React,{useRef} from 'react'

const Multiply = () => {
    const number1 = useRef();
    const number2 = useRef();
    const onSubmit = (e) => {
      e.preventDefault();

      console.log(
        Number(number1.current.value) * Number(number2.current.value)
      );
    };
    return (
      <form onSubmit={onSubmit}>
        <input type="text" ref={number1} />
        <input type="text" ref={number2} />
        <button>Multiply</button>
      </form>
    );
}

export default Multiply
