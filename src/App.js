import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Add from './Add'
import Sub from './Sub'


const App = () => {
  const [people,setPeople]=useState([])
  const [counter,setCounter]=useState(0)
  const getData=()=>{
    axios.get("https://randomuser.me/api/?results=20").then((res) => {
      const data=res.data.results;
      setPeople(data);
      console.log(data)
      
    }).catch((err) => {
      console.log(err);
    })
  }
  const counterHandler=()=>{
    setCounter(counter +1)
    console.log(counter)
  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <div >
      <h1>Everything you need</h1>
      <h1>{counter}</h1>
      <button onClick={counterHandler}>Increment</button>
      <Add />
      <Sub />
      <table>
        <tr>
          <th>Location</th>
        </tr>
        {people.map(person=>{
          return (
            <tr>
              <td>{JSON.stringify(person.location)}</td>
            </tr>
          );
        })}
        
      </table>

    </div>
  )
}

export default App
