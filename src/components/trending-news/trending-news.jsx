import "./trending-news.css";

export const TrendingNews = (props) => {
  return(
  <div className="trending-news">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      {props.trendingNews.map((t,i) => {
        return (
            <div class = { i === 0 ? "carousel-item active" : "carousel-item" }>
              <img class="d-block h-80 w-100" src={t.urlToImage} alt={t.title}/>
              <div class="carousel-caption d-none d-md-block">
                { t.author != null ? 
                <a class="btn btn-primary" href={t.url}>
                  <h5 style={{fontSize: "30px", fontWeight: "bold"}}>{t.author}</h5>
                </a> : <a class="btn btn-primary" href={t.url}>
                  <h5 style={{fontSize: "30px", fontWeight: "bold"}}>Anonymous Author</h5>
                </a>}
                <p style={{fontSize: "20px", backgroundColor: "white", opacity: "0.75", color: "blue"}}>{t.title}</p>
              </div>
            </div>
        )
      })}
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  </div>
  )
};