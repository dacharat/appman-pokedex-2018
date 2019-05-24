import React from "react";
import styled from "styled-components";
import Scrollarea from "react-scrollbar";
import DexCard from "./DexCard";

const Scroll = styled(Scrollarea)`
  height: 600px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

class MyDex extends React.Component {
  render() {
    return (
      <Scroll horizontal={false}>
        <Grid>
          {this.props.dex.map((dex, i) => (
            <DexCard data={dex} remove={this.props.remove} key={i} />
          ))}
        </Grid>
      </Scroll>
    );
  }
}

export default MyDex;
