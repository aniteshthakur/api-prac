import React, { useEffect, useState } from "react";
import axios from "axios";
const List = ({names,setNames}) => {
    
  
  const sendRequest=async()=>{
     const response=await axios.get(
        "https://practice-c8cbd-default-rtdb.firebaseio.com/names.json"
      );
    
    
      const transformedQuotes = [];
      for (const key in response.data) {
        const quoteObj = {
          id: key,
          ...response.data[key],
        };
        transformedQuotes.push(quoteObj);
      }
      setNames(transformedQuotes);

  }
  useEffect(() => {
    
      sendRequest();
  }, []);

  const onDeleteHandler=(id)=>{
    
      axios.delete(
        `https://practice-c8cbd-default-rtdb.firebaseio.com/names/${id}.json`
      ).then(res=>console.log(res.data)).catch(err=>console.log(err));
  }
  return (
    <ul>
       {names.map(name=><li key={name.id} onClick={()=>onDeleteHandler(name.id)}>{name.name}</li>)}
    
    </ul>
  );
};

export default List;
