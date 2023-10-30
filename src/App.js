
import './App.css';

import { toast } from 'react-toastify';

import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Filter from './Components/Filter';
import Spinner from './Components/Spinner';

import { apiUrl, filterData } from './data';
import { useEffect, useState } from 'react';

const App = () => {

  // Storing the Courses data received from the api calling using the useState hook
  const [courses, setCourses] = useState(null);

  // Storing the Loading data using the useState hook at first it is set true and rendering it on the screen after fetching the data 
  // from the api it is set as false and the screen is re-rendered
  const [loading, setLoadin] = useState(true);

  // Storing the category info using the useState hook it changes on the user click and the screen is re-rendered accordingly
  const[category, setCategory] = useState(filterData[0].title);


  // Async Function for the api calling and fetching the data
  async function fetchData() {

    // At first the loading screen is shown till the data is fetched from the api calling
    setLoadin(true);

    // Api Calling in the try catch block
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();

      // console.log("output is: ",output);

      setCourses(output.data);
    }
    catch(error) {
      toast.error("something went wrong");
    }

    // After the api calling is done and the data is received then the loading screen is stopped and the data is rendered on the screen
    setLoadin(false);
  }

  // UseEffect hook is used for the Api calling
  useEffect( () => {
    fetchData();
  }, []);

  // console.log(filterData);
  return (
    <div className='App min-h-screen flex flex-col bg-bgDark2'>

      {/* First Navbar component is rendered */}
      <div>
        <Navbar/>
      </div>

      {/* Second the Filter buttons component is rendered and the cards are renderes */}
      <div>
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>

        <div className='flex flex-wrap justify-center items-center w-11/12 max-w-[1200px] min-h-[50vh] mx-auto'>
          {
            // The spinner is rendered untill loading is true after that the cards are rendered
            loading? (<Spinner/>): (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>


    </div>
  );
}

export default App;
