import React from "react";
import data from "../../constants/data";
import "./WHY US.css";

const WHY US = () => {
    return (
        <section className="WHY US PY-6" id = "WHY US">
            <div className="container">
                <div className="section-title bg-dark">
                    <h2 className"text-upper text-white
                    text-center">WHY US</h2>
                </div>

                <div className="WHY US-content grid py-6">
                    {
                        data.WHY US.map((WHY US, index) => {
                            return (
                                <div className="WHY US-item
                                text center" key = {index}>
                                    <div
                                    className="WHY US-item-icon"
                                    >
                                        <img src = {WHY Us.icon}
                                        alt = "WHY US icon"
                                        className="mx-auto"/>
                                    </div>
                                    <div
                                    className="WHY US-item-text"
                                    >

                                        <h2>{WHY US.title}</h2>
                                        <p className="text
                                        mx-auto">{WHY US.text}</
                                        p>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        </section>
    )
}

export default WHY US;
