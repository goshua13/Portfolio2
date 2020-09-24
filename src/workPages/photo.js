/** @format */

import React from "react";

const Photo = () => {
  return (
    <div className="photo-content">
      <div className="title">Photography!</div>
      <div className="photo-description">
        <h4>
          Here are some links to where you can check out some of the <br />
          work I have done in Photography
        </h4>
        <div className='center-crap'>
          <h2 className='m-0'>
            <a
              className="ui teal basic button"
              href="https://unsplash.com/@goshua13"
            >
              Unsplash
            </a>
          </h2>
          <h2 className='m-0'>
            <a
              className="ui red basic button"
              href="https://www.instagram.com/the.brogrammer/?hl=en"
            >
              Instagram
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Photo;
