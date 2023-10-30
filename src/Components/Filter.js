import React from "react";

const Filter = (props) => {
    // filter data to create the total category button as given in the data.js
    let filterData = props.filterData;

    // Category to update the category with the selected category with every user click on the buttons of the category List 
    let category = props.category;

    // SetCategory function of the useState hook to update the category on user click
    let setCategory = props.setCategory

    // Function handler to handle click nny the user on the buttons
    function filterHandler(data) {
        setCategory(data.title);
    }

    // console.log("filter data", filterData);
    return(
        <div className="flex flex-wrap justify-center w-11/12 max-w-max space-x-4 gap-y-4 mx-auto py-4">
            {
                // mapping every category to its respective button using the map function
                filterData.map( (data) => {
                    return(
                        <button 
                        onClick={() => filterHandler(data)}
                        className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 
                        transition-all duration-300 
                        ${
                            category === data.title? "bg-opacity-60 border-white": "bg-opacity-40 border-transparent"
                        }`}
                        key={data.id}>
                            {data.title}
                        </button>
                    );
                })
            }
        </div>
    );
}

export default Filter;