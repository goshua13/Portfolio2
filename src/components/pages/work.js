/** @format */

import React, { Component } from "react";

import Photo from "../../workPages/photo";
import Video from "../../workPages/video";
import Diversity from "../../workPages/diversity";
import Code from "../../workPages/code";

const Card = ({ className, imageUrl, title, content }) => {
  return (
    <div className={`card flip-card ${className}`}>
      <div className="flip-card-inner">
        <div class="flip-card-front">
          <h3>{title}</h3>
          <img src={imageUrl} className="img-fluid rounded" alt="Image" />
        </div>
        <div className="flip-card-back">
          <img
            src={imageUrl}
            className="img-fluid img-back rounded"
            alt="Image"
          />
          <p className="text">{content}</p>
        </div>
      </div>
    </div>
  );
};

class Work extends Component {
  render() {
    const cardsData = [
      {
        _id: 0,
        className: "videography",
        imageUrl: "https://source.unsplash.com/user/goshua13",
        title: "Videography",
        content: <Video />,
        path: "/videography"
      },
      {
        _id: 1,
        className: "code",
        imageUrl: "https://source.unsplash.com/user/maxcodes",
        title: "Code Projects",
        content: <Code />,
        path: "/codes"
      },
      {
        _id: 2,
        className: "photo",
        imageUrl: "https://source.unsplash.com/user/czermak_photography",
        title: "Photography",
        content: <Photo />,
        path: "/photo"
      },
      {
        _id: 3,
        className: "diversity",
        imageUrl: "https://source.unsplash.com/user/goshua13/biVo3Z7DgyQ",
        title: "Diversity",
        content: <Diversity />,
        path: "/diversity"
      }
    ];
    return (
      <div className="content">
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="work">
          <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
          {cardsData.map(cardObject => {
            return <Card key={cardObject._id} {...cardObject} />;
          })}
        </div>
        <span className="tags bottom-tags">
          {" "}
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br /> &lt;/html&gt;{" "}
        </span>
      </div>
    );
  }
}
export default Work;
