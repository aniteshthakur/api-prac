import React,{useRef} from 'react'

const Sub = () => {
   const number1 = useRef();
   const number2 = useRef();
   const onSubmit = (e) => {
     e.preventDefault();

     console.log(Number(number1.current.value) - Number(number2.current.value));
   };
   return (
     <form onSubmit={onSubmit}>
       <input type="text" ref={number1} />
       <input type="text" ref={number2} />
       <button>Substract</button>
     </form>
   );
}

export default Sub
