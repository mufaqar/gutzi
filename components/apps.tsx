import Image from 'next/image'
import React from 'react'

export default function Apps() {
    return (
        <><section className="section-small">
            <div className="shell">
                <div className="section__inner">
                    <ul className="list-logos">
                        <li>
                            <a href='#1'>
                                <Image src="/images/temp/list-logos-1.svg" alt="" width="116" height="128" />
                            </a>
                        </li>

                        <li>
                            <a href='#'>
                                <Image src="/images/temp/list-logos-2.svg" alt="" width="115" height="145" />
                            </a>
                        </li>

                        <li>
                            <a href='#'>
                                <Image src="/images/temp/list-logos-3.svg" alt="" width="123" height="129" />
                            </a>
                        </li>

                        <li>
                            <a href='#'>
                                <Image src="/images/temp/list-logos-4.svg" alt="" width="109" height="116" />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <Image src="/images/temp/list-logos-5.svg" alt="" width="129" height="118" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section></>
    )
}
