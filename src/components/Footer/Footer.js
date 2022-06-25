import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { about } from "../../data";


const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>&copy; 2021  Vipul Jhaa </Slogan>
        </CompanyContainer>
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
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
