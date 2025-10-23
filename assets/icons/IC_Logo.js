import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <Rect width={36} height={36} fill="#FAB502" rx={9} />
    <Path
      fill="#BC7A02"
      d="M23.166 9A5.836 5.836 0 0 0 18 12.107 5.836 5.836 0 0 0 12.834 9C9.611 9 7 11.594 7 14.786c0 3.191 1.999 6.118 4.582 8.521C14.163 25.711 18 28 18 28s3.711-2.252 6.419-4.693C27.306 20.704 29 17.987 29 14.786 29 11.584 26.389 9 23.166 9Z"
    />
  </Svg>
);
export default SvgComponent;
