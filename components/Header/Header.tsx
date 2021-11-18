import { Fragment } from "react";

import SmallScreenHeader from "./SmallScreenHeader";
import LargeScreenHeader from "./LargeScreenHeader";

const Header: React.FC = () => {
  return (
    <Fragment>
      <SmallScreenHeader />
      <LargeScreenHeader />
    </Fragment>
  );
};

export default Header;
