import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';

const ContactMethodsStyles = styled.section`
  grid-column: 1 / 7;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0 var(--gridGap);
  height: min-content;

  @media (min-width: 768px) {
    grid-column: 4 / 7;
    grid-template-columns: 1fr 1fr 1fr;
    padding-right: 0;
  }
`;

const TitleArea = styled.div`
  grid-column: 1 / 7;
  margin-bottom: var(--margins);

  @media (min-width: 768px) {
    grid-column: 1 / 4;
  }
`;

const ContactListStyles = styled.div`
  border-top: var(--borderSmall) solid #fff;
  padding-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column: 1 / 7;
  grid-gap: var(--gridGap);
  margin-bottom: var(--margins);

  > a {
    font-size: var(--paragraph);

    :nth-child(1) {
      grid-column: 1 / 4;
    }

    :nth-child(2) {
      grid-column: 4 / 7;
    }

    :nth-child(3) {
      grid-column: 1 / 4;
    }

    @media (min-width: 768px) {
      :nth-child(1) {
        grid-column: 1 / 2;
      }

      :nth-child(2) {
        grid-column: 2 / 3;
      }

      :nth-child(3) {
        grid-column: 3 / 4;
      }
    }
  }

  @media (min-width: 768px) {
    grid-column: 1 / 4;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ContactMethods = () => (
  <ContactMethodsStyles>
    <TitleArea>
      <Heading content="Methods of " highlight="Contact" />
    </TitleArea>
    <ContactListStyles>
      <a
        className="link__std"
        href="https://www.linkedin.com/in/morgan-baker-developer-inverness/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a className="link__std" href="mailto:hello@morganbaker.dev">
        Email
      </a>
      <a
        className="link__std"
        href="https://github.com/bagseye"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </ContactListStyles>
  </ContactMethodsStyles>
);

export default ContactMethods;
