import React from 'react'
import {FcLike,FcLikePlaceholder} from"react-icons/fc"
import {toast} from "react-toastify"
function Card({course,likedCourses,setLikedCourses}) {
 function clickHandler()
 {
  if(likedCourses.includes(course.id))
  {
    //it means course is already liked and we will remove it from liked courses
    setLikedCourses((prevCourses)=>prevCourses.filter((id)=>id!==course.id));
    toast.warning("Unliked the "+ course.title+" course")
  }
  else{
    //it means course is not liked and we will add it to liked courses
    if(likedCourses.length===0)
    {
      setLikedCourses([course.id]);
      
    }
    else{
      setLikedCourses((prev)=>[...prev,course.id])
    }
    toast.success("Liked the "+course.title+" course")
  }
 }
  return (
    <div  className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
       <div className='relative'>
        <img src={course.image.url} alt="img" />
       </div>
       <div className='w-[30px] h-[30px] bg-white rounded-full relative left-60 top-1 grid place-items-center'>
        <button onClick={clickHandler}>
          {
            likedCourses.includes(course.id)?( <FcLike fontSize={"1.25rem"}/>):(<FcLikePlaceholder fontSize={"1.25rem"}/>)
          }
        
        </button>
       </div>
       <div className='p-4'>
        <h4 className='text-white font-semibold text-lg leading-6'>{course.title}</h4>
        <p className='text-white mt-2'>{course.description.length>100?(course.description.substring(0,100)+"..."):(course.description)}</p>
       </div>
    </div>
  )
}

export default Card
