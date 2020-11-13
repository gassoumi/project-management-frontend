import React from 'react';
import {css} from "@emotion/core";
import MoonLoader from "react-spinners/MoonLoader";
//import Grid from "@material-ui/core/Grid";


// const override = css`
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   bottom: 0,
//   right: 0,
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   flexDirection: 'column',
//   border-color: red;
// `;

const overrideBack = css`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  border-color: red;
`;

// style for center element in the page
// doesn't work 
// const style = {
//   height: "100%"
// };

// const style2 = {
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   bottom: 0,
//   right: 0,
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   flexDirection: 'column',
// };

/*

*/
function Loading(props) {
  return (
    <MoonLoader
      css={overrideBack}
      size={60}
      color={"#123abc"}
      loading={true}
    />
  );
}

export default Loading;
