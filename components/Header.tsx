import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { StyledHeader } from "./Style/StyledHomeContent";
import headerBg from "./../public/static/images/code-header.svg";

const Header: FC = () => {
  return (
    <StyledHeader className="">
      <div className="container">
        <div className="header__content">
          <h1>
            <span className="header__greeting">Hello buddy! I&apos;m </span>
            <span className="header__name">Rômulo Silva,</span>
          </h1>
          <p className="header__intro">
            a passionate full-stack developer focused on creating interactive,
            accessible, and responsive web applications.
          </p>
          <div className="header__links">
            <Link href="/#projects">
              <a className="btn__primary btn">See My Work</a>
            </Link>
            <a
              className="btn__secondary btn"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              View Resume
            </a>
          </div>
        </div>
        <div className="header__svg" aria-hidden="true">
          <Image alt="" src={headerBg} layout="responsive" />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
