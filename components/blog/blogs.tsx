import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Blogs extends Component {
  slider: any;
  constructor(props: { blog: any } || Readonly<>) {
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
  const blog = this.props.blog;
  console.log(blog);
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-articles js-slider-articles">
      <div className="slider__actions">
        <button
          type="button"
          className="slider__arrow slider__arrow--prev"
          onClick={this.previous}
        >
          <Image
            src="/images/arrow-left.png"
            alt=""
            width="14"
            height="18"
          />
        </button>

        <button
          type="button"
          className="slider__arrow slider__arrow--next"
          onClick={this.next}
        >
          <Image
            src="/images/arrow-right.png"
            alt=""
            width="14"
            height="18"
          />
        </button>
      </div>

      <Slider ref={(c) => (this.slider = c)} {...settings}>

        {blog.map((blog: any, index: any) => {
          return (
            <div key={index}>
              <article className="article">
                <a href="#"></a>

                <figure className="article__image">
                  <Image
                    src={blog.pic}
                    alt=""
                    width="306"
                    height="284"
                  />
                </figure>

                <div className="article__content">
                  <div className="article__meta">
                    <span>{blog.time}</span>
                  </div>
                  <h6>{blog.title}</h6>
                  <p>
                    {blog.info}
                  </p>
                  <a href={blog.readmore_url} className="link link--alt article__link">
                    {blog.readmore_title}
                  </a>
                </div>
              </article>
            </div>);
        })}


      </Slider>
    </div>
  );
}
}
