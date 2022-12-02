import React from 'react';
import Customerstestimonial from './customerstestimonail/customerstestimonials';

export default function CustomersTestimonial({ testimonials }) {
  return (
    <>
      <section className="section customerstestimonial">
        <div className="shell">
          <div className="section__inner">
            <Customerstestimonial testimonials={testimonials} />{' '}
          </div>
        </div>
      </section>
    </>
  );
}
