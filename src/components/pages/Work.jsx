import 'bootstrap/dist/css/bootstrap.min.css';

export default function Work() {
  return (
    <div>
      <h1>Work Page</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            {" "}
            <div className="card">
              <h3>Work 1</h3>
              <img src="/./src/components/images/landscape-placeholder-svgrepo-com.svg"></img>{" "}
              <p>description</p>
            </div>
          </div>
          <div className="col">
            {" "}
            <div className="card">
              <h3>Work 2</h3>
              <img src="/./src/components/images/landscape-placeholder-svgrepo-com.svg"></img>{" "}
              <p>description</p>
            </div>
          </div>
          <div className="row w-100"></div>
          <div className="col">
            {" "}
            <div className="card">
              <h3>Work 3</h3>
              <img src="/./src/components/images/landscape-placeholder-svgrepo-com.svg"></img>{" "}
              <p>description</p>
            </div>{" "}
            <div className="card">
              <h3>Work 3</h3>
              <img src="/./src/components/images/landscape-placeholder-svgrepo-com.svg"></img>{" "}
              <p>description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
