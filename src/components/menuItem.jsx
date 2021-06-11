import React from 'react';

function MenuItem(){
  return(
    <div>
      <div className="embed-responsive ratio ratio-16x9">
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Latte</h4>
              </div>
              <div className="card-body">
              <h1 className="card-title pricing-card-title">5.99</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuItem;
