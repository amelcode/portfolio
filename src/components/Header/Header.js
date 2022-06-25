import Link from "next/link";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";
import { about } from "../../data";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <img src="/logo.png" height={40} width={40} />{" "}
          <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>
            Amel
          </span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projets</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>A propos</NavLink>
        </Link>
      </li>
      <li>
        <a href="#">
          <NavLink>Blog</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href={about.social.github} target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href={about.social.linkedin} target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="">
        <AiFillInstagram size="3rem" />
      </SocialIcons> */}
      {/* <SocialIcons href="">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons> */}
    </Div3>
  </Container>
);
export default Header;
