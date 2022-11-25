import React from 'react'
import Articles from "../featured/articles";

export default function Featured() {
    return (
        <><section className="section-featured" id="featured">
            <div className="shell">
                <header className="section__head">
                    <h3>Featured Blog</h3>
                </header>

                <div className="section__body">
                    <Articles></Articles>
                </div>
            </div>
        </section></>
    )
}
