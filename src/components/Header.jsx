import React from 'react'
import "./Header.css"

function Header() {
  return (
    <>
          <section className="header">
            <div className="container py-5">
                <div className="text text-center">
                    <h1 className='fw-bold text-light display-5'>Science Fiction Stories</h1>
                </div>

                <div className="row gy-4 text-center my-5">
                    <div className="col-md-3">
                        <div className="head_button">
                            <button className='btn-lg btn-primary'>New</button>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div className="head_button">
                            <button className='btn-lg btn-color-2'>In Progress</button>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="head_button">
                            <button className='btn-lg btn-color'>Completed</button>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="head_button">
                            <button className='btn-lg btn-primary gradient_button'>Clear All</button>
                        </div>
                     </div>

                </div>

            </div>
            </section>
    </>
  )
}

export default Header
