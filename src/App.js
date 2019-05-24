import React from "react";
import "./App.css";
import styled from "styled-components";
import Modal from "./components/Modal";
import MyDex from "./components/MyDex";

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
};

const Component = styled.div`
  ${"" /* height: 100%; */}
`;
const Title = styled.h1`
  text-align: center;
`;
const Bottom = styled.div`
  text-align: center;
  background-color: #ec5656;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.div`
  bottom: 0;
  border-radius: 100%;
  background-color: #ec5656;
  width: 100px;
  height: 100px;
  color: white;
  position: absolute;
  font-weight: bold;
  font-size: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const customStyles = {
  content: {
    top: "12%",
    left: "15%",
    right: "17%",
    bottom: "5%"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
};

class App extends React.Component {
  state = {
    isOpen: false,
    data: [],
    myDex: []
  };

  async componentDidMount() {
    const res = await fetch("http://localhost:3030/api/cards");
    const json = await res.json();
    this.setState({ data: json.cards });
  }

  onButtonClicked = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  addToMyDex = newPokemon => {
    this.setState({
      myDex: [...this.state.myDex, newPokemon],
      data: this.state.data.filter(d => d !== newPokemon)
    });
  };

  removeFromMyDex = pokemon => {
    this.setState({
      myDex: this.state.myDex.filter(d => d !== pokemon),
      data: [...this.state.data, pokemon]
    });
  };

  render() {
    return (
      <Component>
        <Title>My Pokedex</Title>
        <MyDex dex={this.state.myDex} remove={this.removeFromMyDex} />
        <Bottom>
          <Button onClick={this.onButtonClicked}>+</Button>
        </Bottom>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.onButtonClicked}
          style={customStyles}
          data={this.state.data}
          addToDex={this.addToMyDex}
        />
      </Component>
    );
  }
}

export default App;
