import { useState, useEffect } from 'react'
import './App.css'


const App = () => {

const [img, setImg] = useState("");
const [res, setRes] = useState([]);

const fetchRequest = async () => {
  const data = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${config.API_KEY}&per_page=20`
  );
  const dataJ = await data.json();
  const result = dataJ.results;
  console.log(result);
  setRes(result);
};

const Submit = () => {
  fetchRequest();
  setImg("");
};

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center input">
            <input
              className="col-3 form-control-sm py-1 fs-4 text-capitalize border border-3 border-dark"
              type="text" 
              placeholder="Search Anything..."
              value={img}
              onChange={(e) => setImg(e.target.value)}
             
            />
            <button
              type="submit"
              onClick={Submit}
              className="btn bg-dark text-white fs-3 mx-3"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-evenly flex-wrap">
          {res.map((val) => {
             console.log(val.id);
            return (
             
              <div key={val.id}>
                <img 
                  
                  className="col-3 img-fluid img-thumbnail"
                  src={val.urls.small}
                  alt={val.alt_description}
                  
                />
              </div>
            );
          })}
        </div>
    </>
  );
};






export default App
