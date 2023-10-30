import React, { useState } from "react";
import Card from './Card';

const Cards = (props) => {

    // All courses data received from the api calling
    let courses = props.courses;

    // Determines the category of the cards to  render on the screen if all then all category cards are rendered else only the specific category 
    // cards are rendered
    let category = props.category;

    // Creating the useState hook to store the Liked Course array which is initialized as an empty array initially at the first render then the
    // data is updated according to the user click on the like button provided o the card
    const[likedCourses, setLikedCourses] = useState([]);

    // console.log(courses);

    // Creating the array of courses to render on the screen all cards will be rendered if the selected category is all else specific category
    // cards will be rendered if all category is not selected
    function getCourse() {

        if(category === "All")
        {
            // if the selected category is all then create an array which contains all the objects from all the category
            // this is achieved by looping over the array object of categories which is then looped over to get th individual data of the current 
            // category that is nested looping is done
            
            let allCourse = [];
            Object.values(courses).forEach( (courseCategory) => {
                courseCategory.forEach( (courseData) => {
                    allCourse.push(courseData);
                })
            })
            return allCourse;
        }
        else
        {
            // if the selected category is not all but a specific category then create an array or 
            // return the array of the course array(passed as props) of the specific category

            return courses[category];
        }

    }
    

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                // mapping each card to be rendered with its respective card component using the map function 
                getCourse().map( (course) => {
                    return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                })
            }
        </div>
    );
}

export default Cards;