import axios from "axios";
import "./categorical-news.css";

export const CategoricalNews = (props) => {
  
  const addToDB = (news) => {
    axios.post("http://localhost:3001/news",news)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }

  return (
  <div className="categorical-news">
    { (props.news !== undefined) ? (props.news.map((n) => {
      return (
        <div class="card m-2">
          <img src={n.urlToImage} class="card-img-top" alt={n.title} style={{height: "20vh", width: "20vh"}}/>
          <div class="card-body">
            <h5 class="card-title">{n.author}</h5>
            <p class="card-text">{n.title}</p>
            <button onClick={()=>addToDB(n)}href={n.url} class="btn btn-primary" id="button">Read more</button>
          </div>
        </div>
      )
    })) : null }
  </div>
  )
};