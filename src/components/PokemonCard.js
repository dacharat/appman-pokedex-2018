import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  display: flex;
`;

const PokemonCard = ({ data, addToDex }) => {
  return (
    <Card>
      <img alt="Not found" src={data.imageUrl} />
      <div>
        <h1>{data.name}</h1>
        <h2>{data.hp > 100 ? 100 : data.hp}</h2>
      </div>
      <div>
        <div onClick={() => addToDex(data)}>Add</div>
      </div>
    </Card>
  );
};

export default PokemonCard;
