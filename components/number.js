import React from 'react'
import CountUp from 'react-countup';

export default function Number({ number }) {
    return (
        <><section className="section offset-top">
            <div className="shell">
                <div className="section__inner">
                    <ul className="list-data">
                        <li>
                        
                            <strong><CountUp end={50} duration={1} /><span>+</span></strong>

                            <p>{number.year}</p>
                        </li>

                        {/* <li>
                            <strong><CountUp end={40} duration={1} /><span>+</span></strong>

                            <p>{number.team}</p>
                        </li>

                        <li>
                            <strong>0</strong>

                            <p>{number.work}</p>
                        </li> */}

                        <li>
                            <strong><CountUp end={3} duration={1} /></strong>
                            <p>{number.partner}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section></>
    )
}
