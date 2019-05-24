import React from "react";
import Modal from "react-modal";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import Scrollarea from "react-scrollbar";

const Input = styled.input`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
`;
const Scroll = styled(Scrollarea)`
  height: 570px;
`;

class PokedexModal extends React.Component {
  state = {
    search: ""
  };

  filter = () => {
    let newArr = this.props.data.filter(
      d =>
        d.name.toUpperCase().includes(this.state.search.toUpperCase()) ||
        d.type.toUpperCase().includes(this.state.search.toUpperCase())
    );
    return newArr.map((d, i) => (
      <PokemonCard addToDex={this.props.addToDex} data={d} key={i} />
    ));
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        style={this.props.style}
      >
        <Input
          placeholder="find pokemon"
          value={this.state.search}
          onChange={e => this.setState({ search: e.target.value })}
          type="text"
        />
        <Scroll horizontal={false}>{this.filter()}</Scroll>
      </Modal>
    );
  }
}

export default PokedexModal;
