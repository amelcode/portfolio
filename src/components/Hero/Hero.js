import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { about } from "../../data";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Salut 👋,
        </SectionTitle>
        <SectionText>{about.description}</SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/files/resume.pdf";
          }}
        >
          Mon CV
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
