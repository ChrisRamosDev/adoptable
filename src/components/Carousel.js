import React, { Component } from "react";
import NoPhoto from "../images/placeholder-dog.png";

class Carousel extends Component {
  state = {
    photos: [],
    active: 0,
  };

  static getDerivedStateFromProps({ media }) {
    let photos;
    if (media.length) {
      photos = media.map(({ large }) => large);
    } else photos = NoPhoto;

    return { photos };
  }

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <div className="hero-container">
          <img src={photos[active]} alt="animal photo" />
        </div>
        <div className="carousel-sm">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "thumb active" : "thumb"}
              alt="animal thumb"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
