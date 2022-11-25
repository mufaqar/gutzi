import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div className={className}>
      <Image
        src="/images/temp/arrow-right.png"
        alt=""
        width="14"
        height="18"
        onClick={onClick}
      />
    </div>
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div className={className}>
      <Image
        src="/images/temp/arrow-left.png"
        alt=""
        width="14"
        height="18"
        onClick={onClick}
      />
    </div>
  );
}

export default class CustomersTestimonial extends Component {
  slider: any;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
      prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
    };
    return (
      <div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div>
            <div className="testimonial">
              <figure className="testimonial__ico">
                <Image
                  src="/images/temp/quotes.png"
                  alt=""
                  width="42"
                  height="31"
                />
              </figure>

              <h3>Lorem ipsum dolor</h3>

              <blockquote>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </blockquote>

              <div className="testimonial__author">
                <figure className="testimonial__author-image">
                  <Image
                    src="/images/temp/testimonial-author-image.png"
                    alt=""
                    width="62"
                    height="62"
                  />
                </figure>

                <span className="testimonial__author-details">
                  <strong>Jane Doe</strong>
                  Company here
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial">
              <figure className="testimonial__ico">
                <Image
                  src="/images/temp/quotes.png"
                  alt=""
                  width="42"
                  height="31"
                />
              </figure>

              <h3>Lorem ipsum dolor</h3>

              <blockquote>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </blockquote>

              <div className="testimonial__author">
                <figure className="testimonial__author-image">
                  <Image
                    src="/images/temp/testimonial-author-image.png"
                    alt=""
                    width="62"
                    height="62"
                  />
                </figure>

                <span className="testimonial__author-details">
                  <strong>Jane Doe</strong>
                  Company here
                </span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
