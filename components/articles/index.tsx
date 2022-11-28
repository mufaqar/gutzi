import React from 'react'
import blogs from "./blogs";

export default function Articles() {
    return (
        <><section className="section-featured" id="featured">
            <div className="shell">
                <header className="section__head">
                    <h3>Featured Blog</h3>
                </header>

                <div className="section__body">
                    <blogs />
                </div>
            </div>
        </section></>
    )
}
