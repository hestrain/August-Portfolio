import 'bootstrap/dist/css/bootstrap.min.css';

const cardstyle = {
  width: "60%",
  padding: "10px",
  marginBottom: "15px",
  border: "solid 2px cyan",
}
const container = {
  display: "flexbox",
  flexDirection: "row",
}
const contactstyle = {
  textAlign: "center",
  marginBottom: "20px",
  marginTop: "20px"
};

export default function Work() {
  return (
    <div>
            <div style={contactstyle}>
        {" "}
        <img
          src="/src/components/images/portfolio.png"
          style={{ width: "50%" }} alt='Portfolio' title="Portfolio"
        ></img>
      </div>
      <div className="container" style={container}>
        <div className="row">
          <div className="col">
            {" "}
            <div className="card" style={cardstyle}>
              <h3><a href='https://shelfie-53sl.onrender.com/'target="_blank">Shelfie</a></h3>
              <img src="/./src/components/images/shelfie screencap.png"></img>{" "}
              <p>Keep track of books in your collection<br></br>Group Project, for contributors please see github below</p>
              <a href='https://github.com/hestrain/shelfie'target="_blank">github repo</a>
              <a href='https://shelfie-53sl.onrender.com/'target="_blank"> live link</a>
            </div>
          </div>
          <div className="col">
            {" "}
            <div className="card" style={cardstyle}>
              <h3><a href='https://hestrain.github.io/mov.ie/'target="_blank">Mov.ie</a></h3>
              <img src="/./src/components/images/movie-screencap.png"></img>{" "}
              <p>Search for movies and find out where they're streaming.
              <br></br>Group Project, for contributors please see github below</p>
              <a href='https://github.com/hestrain/mov.ie'target="_blank">github repo</a>
              <a href='https://hestrain.github.io/mov.ie/'target="_blank"> live link</a>
            </div>
          </div>
          <div className="row w-100"></div>
          <div className="col">
            {" "}
            <div className="card" style={cardstyle}>
              <h3><a href='https://hestrain.github.io/Weather-Station/'target="_blank">Awful Weather Dashboard</a></h3>
              <img src="/./src/components/images/weather screencap.png"></img>{" "}
              <p>You can look up the weather... But Watch Out! it doesn't look great</p>
              <a href='https://github.com/hestrain/Weather-Station'target="_blank">github repo</a>
              <a href='https://hestrain.github.io/Weather-Station/'target="_blank"> live link</a>
            </div>{" "}
            <div className="card" style={cardstyle}>
              <h3><a href='https://hestrain.github.io/Pokemon-Types-2/'target="_blank"> Pokemon Type Chart</a></h3>
              <img src="/./src/components/images/pokemon type cap.png"></img>{" "}
              <p>Made for my friends who dont like to read the whole chart </p>
              <a href='https://github.com/hestrain/Pokemon-Types-2'target="_blank">github repo</a>
              <a href='https://hestrain.github.io/Pokemon-Types-2/'target="_blank"> live link</a>
            </div>
            <div className="card" style={cardstyle}>
              <h3><a href='https://hestrain.github.io/Pokemon-Types-2/'target="_blank"> A Fifth Thing</a></h3>
              <img src="/./src/components/images/pokemon type cap.png"></img>{" "}
              <p>Made for my friends who dont like to read the whole chart </p>
              <a href='https://github.com/hestrain/Pokemon-Types-2'target="_blank">github repo</a>
              <a href='https://hestrain.github.io/Pokemon-Types-2/'target="_blank"> live link</a>
            </div>
            <div className="card" style={cardstyle}>
              <h3><a href='https://hestrain.github.io/Pokemon-Types-2/'target="_blank"> And Even... a Sixth Thing</a></h3>
              <img src="/./src/components/images/pokemon type cap.png"></img>{" "}
              <p>Made for my friends who dont like to read the whole chart </p>
              <a href='https://github.com/hestrain/Pokemon-Types-2'target="_blank">github repo</a>
              <a href='https://hestrain.github.io/Pokemon-Types-2/'target="_blank"> live link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
