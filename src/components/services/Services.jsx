import { useState } from 'react'
import './services.css'

function Services() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <>
            <section className="services section" id="services">
                <h2 className="section__title">Services</h2>
                <span className="section__subtitle">What I offer</span>

                <div className="services__container container grid">
                    <div className="services__content">
                        <div>
                            <i className="uil uil-web-grid services__icon"></i>
                            <h3 className="services__title">Web <br /> Development</h3>
                        </div>

                        <span className="services__button" onClick={() => toggleTab(1)}>View More
                            <i className="uil uil-arrow-right"></i>
                        </span>

                        <div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
                            <div className="services__modal-content">
                                <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                                <h3 className="services__modal-title">Web Development</h3>
                                <p className="services__modal-description">Service with more than 3 years of experience.
                                    Providing quality work to clients and companies.</p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Designed PHP web applications, streamlining high-server traffic, resource configuration and allocation.</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Creating visually appealing and user-friendly website layouts that align with the client's brand identity and objectives.</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Performed tests and troubleshooting on RESTful API.</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Effectively integrated partner company systems through successful implementation of API calls using
                                            RESTful API.</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Implement security measures to protect sensitive data stored in databases.</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Developed integration in Google Maps API(JavaScript).</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="services__content">
                        <div>
                            <i className="uil uil-database services__icon"></i>
                            <h3 className="services__title">Database <br /> Admin</h3>
                        </div>

                        <span className="services__button" onClick={() => toggleTab(3)}>View More
                            <i className="uil uil-arrow-right"></i>
                        </span>

                        <div className={toggleState === 3 ? 'services__modal active-modal' : 'services__modal'}>
                            <div className="services__modal-content">
                                <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                                <h3 className="services__modal-title">Database Admin</h3>
                                <p className="services__modal-description">Service with more than 3 years of experience.
                                    Providing quality work to clients and companies.</p>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Optimized the performance of the RDBMS by implementing indexing, stored procedures, and redesigning
                                            the MySQL database to maximize efficiency.</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Implement backup and recovery solutions to ensure data integrity and availability in case of failures.</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Implement solutions to minimize downtime and ensure high availability of your databases.</p>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </section >
        </>
    )
}

export default Services