import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import "./Card.css"

function Card() {

    const [data, setData] = useState([])
    const navigate = useNavigate()

    const getData = async () => {
        const res = await axios.get(`https://child.onrender.com/api/sciencefiction`)
        setData(res.data)
    }

    console.log("new Data", data)

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <section className="card-summary py-5">
                <div className="container">
                    <div className="row gy-4">

                        {
                            data?.map((item) => {
                                return (
                                    <>
                                        <div className="col-md-3 " onClick={()=>navigate(`/cardstory/${item._id}`)}>
                                            <div class="card">
                                
                                                    <div class="card-body">
                                                        <h5 class="card-title">{item.Title}</h5>
                                                        <a href="#" class="btn btn-primary">{item.Status}</a>
                                                    </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Card
