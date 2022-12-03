import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props: { testimonials: any; className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div className={className}>
      <Image
        src="/images/arrow-right.png"
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
        src="/images/arrow-left.png"
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
    const testimonials = this.props.testimonials;
    console.log(testimonials);
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
          {testimonials.map((testimonial: any, index: any) => {
            return (
              <div key={index}>

                <div className="testimonial">
                  <figure className="testimonial__ico">
                    <Image
                      src="/images/quotes.png"
                      alt=""
                      width="42"
                      height="31"
                    />
                  </figure>

                  <h3>{testimonial.title}</h3>

                  <blockquote>
                    {testimonial.info}
                  </blockquote>

                  <div className="testimonial__author">
                    <figure className="testimonial__author-image">
                      <Image
                        src={testimonial.pic}
                        alt=""
                        width="62"
                        height="62"
                      />
                    </figure>

                    <span className="testimonial__author-details">
                      <strong>{testimonial.name}</strong>
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

        </Slider>
      </div>
    );
  }
}
