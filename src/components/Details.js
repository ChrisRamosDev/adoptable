import React, { Component } from "react";
import { Client } from "@petfinder/petfinder-js";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

import { navigate } from "@reach/router";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, showModal: false };

  componentDidMount() {
    const pet = new Client({
      apiKey: process.env.REACT_APP_API_KEY,
      secret: process.env.REACT_APP_API_SECRET,
    });

    pet.animal.show(this.props.id).then((res) => {
      let animal = res.data.animal;
      this.setState({
        url: animal.url,
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

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url);

  render() {
    if (this.state.loading) {
      return <h1 className="loading">Loading...</h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${breed} - ${location}`}</h2>
          <p>{description}</p>
          <button onClick={this.toggleModal}>Adopt {name}</button>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <button onClick={this.adopt}>Yes!</button>
                <button onClick={this.toggleModal}>No</button>
                <p>This will direct you to the adoption page.</p>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
