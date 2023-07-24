import React from "react";
import data from "../../constants/data"
import "./Responsibilities.css";

const Responsibilities = () => {
    return (
        <section className="Responsibilities py-6" id = "Resposibilities">
            <div className="container">
                <div className="section-titile bg-dark">
                    <h2 className="text-upper text-white
                    text-center">RESPONSIBILITIES</h2>
                </div>

                <div className="Responsibilities-content grid py-6">
                    {
                        data.Responsibilities.map((Responsibilities, index)) => {
                            return(
                                <div className="features-item
                                text-center" key = {index}>
                                    <div
                                    className="Resposibilities-item-text"
                                    >
                                        <h2>{Resposibilities.title}</h2>
                                        <p className="text
                                        mx-auto">{Responsibilities.text}</
                                        p>
                                    </div>    

                                
                            )
                        }) 
                    }

                </div>
            </div>
        </section>
    )
} 

export default Responsibilities;