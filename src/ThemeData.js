import React from "react";
function ThemeData({ response, error }) {
  return (
    <section className="featured-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-12 mb-4 mb-lg-0">
            <div className="custom-block bg-white shadow-lg">
              <div className="d-flex">
                <div>
                  {response.data ? (
                    <>
                      <h5 className="mb-2">
                        {response.data.Shopify.cdnHost} is built using
                      </h5>
                      <p className="mb-0">
                        Theme Name - {response.data.BOOMR.themeName}
                      </p>
                    </>
                  ) : null}
                  {response.error ? (
                    <span className="error">{response.error}</span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThemeData;
