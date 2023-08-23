import React from 'react'

function Filter({filterData,category,setCategory}) {
  function filterHandler(title)
  {
    setCategory(title);
  }
  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
       {
        filterData.map((data)=>{
            return <button onClick={()=>filterHandler(data.title)}
            className="text-lg px-2 py-1 font-medium text-white rounded-md bg-black hover:bg-opacity-50 border-2 transition duration-300 ease-in-out
            ${}"
            key={data.id}>{data.title}</button>
        })
       }
    </div>
  )
}

export default Filter
