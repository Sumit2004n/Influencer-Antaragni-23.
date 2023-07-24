import React from "react";
import data from "../../constants/data";
import "./Incentives.css";


const Incentives = () => {
    return (
        <section className="Incentives py-6" id = "Incentives">
            <div className="container">
                <div className="section-title bg-dark">
                    <h2 className="text-upper text-white 
                    text-center">INCENTIVES</h2>
                </div>

                <div className="Incentives-content grid py-6">
                    {
                        data.Incentives.map((Incentives, index)) => {
                            return(
                                <div className="Incentives-item
                                text-center" key = {index}>
                                    <div
                                    className="Incentives-item-text"
                                    >
                                        <h2>{Incentives.title}</h2>
                                        <p className="text
                                        mx-auto"></
                                        p>
                                    </div>
                        
                            )
                        } 
                    }
                </div>
            </div>
        </section>
    )
}

export default Incentives;