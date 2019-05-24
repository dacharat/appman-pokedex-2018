import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 98%;
  display: grid;
  grid-gap: 2%;
  grid-template-columns: 20% 70% 10%;
  background-color: #d6d8db;
  margin: 10px;
  :hover {
    box-shadow: 0 0 11px rgba(10, 10, 10, 0.5);
  }
`;
const Img = styled.img`
  max-width: 100%;
`;
const Status = styled.div``;
const Button = styled.div`
  float: right;
`;

class PokemonCard extends React.Component {
  state = {
    show: false
  };

  onMouseOvered = () => {
    this.setState({ show: true });
  };

  onMouseLeaved = () => {
    this.setState({ show: false });
  };

  render() {
    const { data, addToDex } = this.props;
    return (
      <Card onMouseOver={this.onMouseOvered} onMouseLeave={this.onMouseLeaved}>
        <Img alt="Not found" src={data.imageUrl} />
        <Status>
          <h1>{data.name}</h1>
          <h2>{data.hp > 100 ? 100 : data.hp}</h2>
        </Status>
        <Button>
          {this.state.show && <div onClick={() => addToDex(data)}>Add</div>}
        </Button>
      </Card>
    );
  }
}

export default PokemonCard;
