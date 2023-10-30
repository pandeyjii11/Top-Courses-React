import React from "react";

import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card= (props) => {

    // Course data to show in the card
    let course = props.course;

    // Liked Course array to to show which course is Liked 
    let likedCourses = props.likedCourses;

    // Function of the use state hook to update the LikedCoursed array that is adding the newly liked course or removing the previously liked course
    let setLikedCourses = props.setLikedCourses;


    // Function hndler to handle the click on the like icon button to add into the liked courses array or remove from it
    function clickHandler() {
        if(likedCourses.includes(course.id))
        {
            // This Course is Previously Liked so now this click means to remove this course from Liked Course
            setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id)));

            // toast message
            toast.warning("Unliked Course Successful");
        }
        else
        {
            // This course is not Liked Previously so add it into the LikedCourse Array
            if(likedCourses.lenght === 0)
            {
                setLikedCourses([course.id]);
            }
            else
            {
                setLikedCourses((prev) => ([...prev, course.id]));
            }

            // toast message
            toast.success("Liked Course Successfully");
        }
    }



    return(

        // Creating the card and returing it
        <div className="w-[300px] bg-bgDark rounded-md bg-opacity-80 overfllow-hidden">
            <div className="relative">
                <img src={course.image.url} alt={course.image.alt}/>
                <div className="w-[40px] h-[40px] rounded-full absolute right-2 -bottom-4 bg-white flex justify-center items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id)? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                    </button>
                </div>
            </div>


            <div className="p-4">
                <p className="text-white font-semibold leading-6 text-lg">{course.title}</p>
                <p className="mt-2 text-white">
                    {
                        course.description.length>100? (`${course.description.substring(0, 100)}...`) : (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;