import Image from 'next/image'
import React from 'react'

export default function OurTeam({ team }) {
    return (
        <><section className="section-team" id="team">
            <div className="shell">
                <div className="section__inner">
                    <h3>{team.title}</h3>

                    <div className="team">
                        <ul>
                            <li>
                                <div className="team-member">
                                    <figure className="team-member__image">
                                        <Image src="/images/temp/member-1.png" alt="" width="358" height="348" />
                                    </figure>

                                    <div className="team-member__details">
                                        <h5>
                                            <strong>Pius Gutzwiller</strong>

                                            <span>Position</span>
                                        </h5>

                                        <div className="member__info">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed</p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="team-member">
                                    <figure className="team-member__image">
                                        <Image src="/images/temp/member-2.png" alt="" width="358" height="348" />
                                    </figure>

                                    <div className="team-member__details">
                                        <h5>
                                            <strong>Diego Frehner</strong>

                                            <span>Position</span>
                                        </h5>

                                        <div className="member__info">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed</p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="team-member">
                                    <figure className="team-member__image">
                                        <Image src="/images/temp/member-3.png" alt="" width="358" height="348" />
                                    </figure>

                                    <div className="team-member__details">
                                        <h5>
                                            <strong>Lucca Willi</strong>

                                            <span>Position</span>
                                        </h5>

                                        <div className="member__info">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section></>
    )
}
