import React, { useState } from "react";

function Search({ setResponse, setError }) {
  const [url, setUrl] = useState("");

  //   useEffect(() => {
  function HandleSubmit(event) {
    event.preventDefault();
    const options = {
      mode: "cors",
      dataType: "JSON",
    };
    const Fetchtheme = async () => {
      try {
        const response = await fetch(
          `https://demosrvr.com/shopify/JAYP/ScriptDetector.php?shopifyUrl=${url}`,
          options
        );
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        setError(error.message);
        console.log("Error:", error.message);
      }
    };
    Fetchtheme();
  }
  //   }, [url]);

  return (
    <section
      className="hero-section d-flex justify-content-center align-items-center"
      id="section_1"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <h1 className="text-white text-center">Shopify Theme Detector</h1>
            <h6 className="text-center">
              platform for creatives around the world
            </h6>
            <form
              onSubmit={HandleSubmit}
              className="custom-form mt-4 pt-2 mb-lg-0 mb-5"
              role="search"
            >
              <div className="input-group input-group-lg">
                <span className="input-group-text bi-search" id="basic-addon1">
                  {" "}
                </span>

                <input
                  name="keyword"
                  type="search"
                  className="form-control"
                  id="keyword"
                  placeholder="Enter url"
                  aria-label="Search"
                  onChange={(e) => setUrl(e.target.value)}
                />

                <button type="submit" className="form-control">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
