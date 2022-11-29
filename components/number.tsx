import React from 'react'

export default function Number({ number }) {
    return (
        <><section className="section offset-top">
            <div className="shell">
                <div className="section__inner">
                    <ul className="list-data">
                        <li>
                            <strong>50 <span>+</span></strong>

                            <p>{number.year}</p>
                        </li>

                        <li>
                            <strong>40 <span>+</span></strong>

                            <p>{number.team}</p>
                        </li>

                        <li>
                            <strong>0</strong>

                            <p>{number.work}</p>
                        </li>

                        <li>
                            <strong>3</strong>

                            <p>{number.partner}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section></>
    )
}
