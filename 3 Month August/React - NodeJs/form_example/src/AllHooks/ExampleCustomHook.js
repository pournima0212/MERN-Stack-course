import React from 'react'
import useFetchData from './../costomHook/useFetchData';

const ExampleCustomHook = () => {
      const url = "https://jsonplaceholder.typicode.com/posts";

const {data , loading , error ,} = useFetchData(url)
if(loading) return <h2>Loading</h2>
if(error) return <h2>error</h2>

  return (
    <div>
         {data.data && data.data.map((each , index) => <p key={index}>{each.title}</p>)}
    </div>
  )
}

export default ExampleCustomHook;