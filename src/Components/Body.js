import { useState, useEffect } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer.js";
import Cards,{TrendingCards} from "./Cards";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import Offline from "./Offline.js";

const Body = () => {
  const [DATA_ARRAY, setDATA_ARRAY] = useState([]);
  const [FILTERED_ARRAY, setFILTERED_ARRAY] = useState([]);
  const [FILTER_BUTTON_TEXT, setFILTER_BUTTON_TEXT] = useState(
    "Show Top Rated Dishes only"
  );
  const [FILTER_BUTTON_USED, setFILTER_BUTTON_USED] = useState(false);
  const [SEARCH_TEXT, setSEARCH_TEXT] = useState("");

  useEffect(() => {
    fetchfun();
  }, []);

  const toprated = () => {
    if (FILTER_BUTTON_USED) {
      setFILTER_BUTTON_TEXT("Show Top Rated Dishes only");
      setFILTERED_ARRAY(DATA_ARRAY);
      setFILTER_BUTTON_USED(false);
    } else {
      setFILTER_BUTTON_TEXT("Show All Dishes");
      const newArr = DATA_ARRAY.filter((obj) => obj.rating > 4.7);
      setFILTERED_ARRAY(newArr);
      setFILTER_BUTTON_USED(true);
    }
  };

  const fetchfun = async () => {
    try {
      // console.log("Fetching data from API...");
      const dataPromise = await fetch("https://dummyjson.com/recipes?limit=0", {
        method: "GET",
      });
      const jsonObj = await dataPromise.json();
      // console.log("API Response:", jsonObj);
      // console.log("Recipes array:", jsonObj?.recipes);
      setDATA_ARRAY(jsonObj?.recipes);
      setFILTERED_ARRAY(jsonObj?.recipes);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  const SearchFilter = () => {
    const newArr = DATA_ARRAY.filter((obj) =>
      obj.name.toLowerCase().includes(SEARCH_TEXT.toLowerCase())
    );
    setFILTERED_ARRAY(newArr);
  };


  const Trending = TrendingCards(Cards);


  if (useOnlineStatus()==false) {
    return <Offline/>
  }
  
  // console.log("Rendering Body - DATA_ARRAY length:", DATA_ARRAY.length);
  // console.log("Rendering Body - FILTERED_ARRAY length:", FILTERED_ARRAY.length);
  
  return DATA_ARRAY.length == 0 ? (
    <Shimmer />
  ) : (
    <main id="budy" role="main" aria-label="Main content">
      <section id="top_bar" role="region" aria-label="Search and filter controls">
        <div id="filter">
          <button 
            onClick={toprated} 
            id="Top_Rated"
            aria-pressed={FILTER_BUTTON_USED}
            aria-describedby="filter-description"
          >
            {FILTER_BUTTON_TEXT}
          </button>
          <div id="filter-description" className="sr-only">
            Toggle between showing all dishes and only top-rated dishes with rating above 4.7
          </div>
        </div>
        <div id="search" role="search">
          <label htmlFor="Search_input" className="sr-only">Search for dishes</label>
          <input
            id="Search_input"
            type="text"
            placeholder="Search here"
            value={SEARCH_TEXT}
            onChange={(e) => {
              setSEARCH_TEXT(e.target.value);
            }}
            aria-label="Search for dishes by name"
            aria-describedby="search-help"
          />
          <div id="search-help" className="sr-only">
            Enter dish name to search through available recipes
          </div>
          <button 
            onClick={SearchFilter} 
            id="Search_button"
            aria-label={`Search for dishes containing "${SEARCH_TEXT}"`}
          >
            Search
          </button>
        </div>
      </section>

      <section 
        id="shops" 
        role="region" 
        aria-label={`Available dishes (${FILTERED_ARRAY.length} items)`}
        aria-live="polite"
      >
        {FILTERED_ARRAY.map((obj) => (
          <Link
            className="links"
            to={{ pathname: `/dishes/${obj.id}` }}
            key={obj.id}
            aria-label={`View details for ${obj.name}, rated ${obj.rating} stars, ${obj.prepTimeMinutes} minutes prep time`}
          >
            {(obj.id%4==1)?<Trending objaa={obj}/>: <Cards objaa={obj} />}
          </Link>

        ))}
      </section>
    </main>
  );
};

export default Body;
