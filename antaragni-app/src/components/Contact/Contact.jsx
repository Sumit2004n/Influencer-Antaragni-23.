import React from "react";
import "./Contact.css";
import data from "../../constants/data";

const Contact = () => {
    return  (
        <section className="Contact py-6" id = "Contact">
            <div className="container">
                    <div className="section-title bg-dark">
                        <h2 className="text-upper text-white
                        text-center">Contact</h2> 
                    </div>
                    <div className="Contact-content py-6 grid">
                        {
                            data.Contact.map(Conatct, index) => {
                                return(
                                    <div className="Contact-item
                                    text-center text-white" key = 
                                    {index}>

                                    </div>
                                )
                            }
                        }
                    </div>
            </div>
        </section>
    )
}

export default Contact;