import React from "react";
import { Icon } from "native-base";
import DinosaurDetail from "../Detail";

const Lol = () => {
  return (
    <div>
      <Icon
        type="Octicons"
        name="smiley"
        style={{
          fontSize: 300,
          alignSelf: "center",
          paddingTop: "50%",
          color: "red"
        }}
      />
      <DinosaurDetail />
    </div>
  );
};

export default Lol;
