import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import "./CardStory.css"
function CardStory() {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [story, setSoty] = useState([])

    const getData = async () => {
        const res = await axios.get(`https://child.onrender.com/api/sciencefiction/${id}`)
        console.log("res Data id", res)
        setData(res.data)
    }


    const getStory = async () => {
        const res = await axios.get(`https://child.onrender.com/api/sciencefiction/${id}`)
        console.log("res Data id", res)
        setSoty(res.data.Brainquest)
    }

    console.log("new Data", data)
    console.log("new Story", story)

    useEffect(() => {
        getData()
        getStory()
    }, [])

    return (
        <>
            <Navbar />
            <section className="card_story">
                <div className="container">
                    <div className="story_heading">
                        <h1 className='text-light text-center py-5'>{data.Title}</h1>
                    </div>

                    <div className="row gy-4 text-center py-5">
                        <div className="col-md-4">
                            <div className="head_button">
                                <button className='btn-lg btn-primary gradient_button'>Word Explorer</button>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="head_button">
                                <button className='btn-lg btn-color-2'>Story Adventure</button>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="head_button">
                                <button className='btn-lg btn-color'>Brain Queist</button>
                            </div>
                        </div>

                    </div>


                    <div className="row gy-3 py-5 mt-5 d-flex align-items-center">
                        <div className="col-md-4">
                            <h2 className='text-light'>{data.Title}</h2>

                        </div>
                        <div className="col-md-8">
                            <div className="row gy-4">
                            {
                                        story?.map((item) => {
                                            return <>
                                               <div className="col-md-4">
                                               <div class="card" >
                                                        <div class="card-body">
                                                            <h5 class="card-title">{item.Question}</h5>
                                                            <p class="card-text">{item.Answer}</p>
                                                        </div>
                                                </div>
                                               </div>
                                            </>
                                        })
                                    }
                            </div>
                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}

export default CardStory
