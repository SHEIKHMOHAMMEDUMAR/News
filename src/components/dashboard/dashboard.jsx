import { React, useState, useEffect} from "react";
import { TrendingNews } from "../trending-news/trending-news";
import { CategoricalNews } from "../categorical-news/categorical-news";
import "./dashboard.css";
import axios from "axios";

export const Dashboard = (props) => {

  const [trendingNews, setTrendingNews] = useState([]);

  const [categoryNews, setCategoryNews] = useState({});

  const category = ["science", "politics", "technology", "business"];

  const apikey = process.env.REACT_APP_API_KEY;

  console.log(apikey);

  const urlTrending = `https://newsapi.org/v2/top-headlines?country=in&apikey=${apikey}`;
  
  const obj = {
    "science" : [],
    "politics" : [],
    "technology" : [],
    "business" : []
  }

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response1 = await axios.get(urlTrending);
              const data = await response1.data.articles;
              setTrendingNews([...trendingNews,...data]);
              for(let c of category){
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${c}&apikey=${apikey}&page=1`);
                const dataa = await response.data.articles;
                obj[c] = dataa;
                console.log(obj);
              }
              setCategoryNews({...categoryNews, ...obj});
          } catch (error) {
              console.log("error", error);
          }
      };
      fetchData();
  }, [])
  console.log("Set", categoryNews);
  return(
  <div className="dashboard">
    <TrendingNews trendingNews = {trendingNews}/>
    { category.map((c) => {
      return (
        <>
        <h1 style={{textTransform: "capitalize"}}>{c}</h1>
        <CategoricalNews news = {categoryNews[c]}/>
        </>
      )
    })}
    
  </div>
  )
};