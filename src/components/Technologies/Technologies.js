import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  ListSubTitle,
  Hr,
} from "./TechnologiesStyles";
import { about, languages, tools } from "../../data";

const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>{about.skillsDescription}</SectionText>
    <ListSubTitle>Technologies</ListSubTitle>
    <Hr />
    <List>
      {languages.map((Skill) => (
        <ListItem key={Skill.slug}>
          <picture>
            <Skill.Component size="2.5rem" />
          </picture>
          <ListContainer>
            <ListTitle>{Skill.title}</ListTitle>
          </ListContainer>
        </ListItem>
      ))}
    </List>
    <ListSubTitle>Outils</ListSubTitle>
    <Hr />
    <List>
      {tools.map((Skill) => (
        <ListItem key={Skill.slug}>
          <picture>
            <Skill.Component size="2.5rem" />
          </picture>
          <ListContainer>
            <ListTitle>{Skill.title}</ListTitle>
          </ListContainer>
        </ListItem>
      ))}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
