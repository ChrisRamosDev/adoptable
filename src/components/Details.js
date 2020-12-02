import React, { Component } from "react";
import { Client } from "@petfinder/petfinder-js";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const pet = new Client({
      apiKey: process.env.REACT_APP_API_KEY,
      secret: process.env.REACT_APP_API_SECRET,
    });

    pet.animal.show(this.props.id).then((res) => {
      let animal = res.data.animal;
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city} ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <div className="hero-container">
          <img src={media[0].full} alt="cutie pie" />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${breed} - ${location}`}</h2>
          <p>{description}</p>
          <button>Adopt {name}</button>
        </div>
      </div>
    );
  }
}

export default Details;
