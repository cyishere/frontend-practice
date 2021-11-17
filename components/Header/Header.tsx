import { Fragment } from "react";

import SmallScreenHeader from "./SmallScreenHeader";
import LargeScreenHeader from "./LargeScreenHeader";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Fragment>
      <SmallScreenHeader />
      <LargeScreenHeader />
    </Fragment>
  );
};

export default Header;
