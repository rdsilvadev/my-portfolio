import { FC } from "react";
import { StyledHomeLogo } from "./Style";
import Link from "next/link";

const HomeLogo: FC = () => {
  return (
    <Link href="/" passHref>
      <StyledHomeLogo aria-label="Rômulo Silva's Site logo" translate="no">
        RS
      </StyledHomeLogo>
    </Link>
  );
};

export default HomeLogo;
