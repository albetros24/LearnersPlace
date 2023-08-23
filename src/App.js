import React, {useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Filter from "./Component/Filter";
import Cards from "./Component/Cards";
import{apiUrl ,filterData} from './data.js'
import {toast} from "react-toastify"
import Spinner from "./Component/Spinner";


const App = () => {
  const[courses, setCourses]=useState(null)
  const[loading,setLoading]=useState(true);
  const [category,setCategory] = useState(filterData[0].title);
  useEffect(()=>{
    console.log("useEffect started")
       const fetchData=async()=>{
        setLoading(true);
        try{
            const res= await fetch(apiUrl);
            const data=await res.json();
            setCourses(data.data);

            console.log(data);
        }
        catch{
       toast.error("Something went wrong")
        }
        setLoading(false)
       }
     fetchData();
   
  },[])
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2" >
     <Navbar />
     <div >
     <Filter
       filterData={filterData}
       category={category}
       setCategory={setCategory}/>
       <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading?(<Spinner/>):(<Cards  courses={courses}
          category={category}/>)
        }
       </div>
     </div>
    
      
    </div>
  );
};

export default App;
