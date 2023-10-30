import React from "react";
import "./Spinner.css";

const Spinner = () => {

    // Creating the Loading component and then returing it
    return(
        <div className="flex flex-col items-center space-y-2">
            <div className="spinner"> </div>
            <p className="text-bgDark text-lg font-semibold">Loading...</p>
        </div>
    )
}

export default Spinner;