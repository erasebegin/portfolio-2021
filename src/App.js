import React from 'react';
import styled from 'styled-components';

import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Section from './components/Section';
import data from './data/cards';

export default function Album() {
  return (
    <PageContainer>
      <Hero />
      {data.map((sectionData, index) => {
        const {
          cards,
          title,
          color,
          columns,
          dividerColor,
          buttonColor,
          dividerAlt
        } = sectionData || {};
        return (
          <Section
            key={index}
            cards={cards}
            title={title}
            color={color}
            dividerColor={dividerColor}
            buttonColor={buttonColor}
            dividerAlt={dividerAlt}
            columns={columns}
          />
        );
      })}
      <Contact />
      <Footer />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  min-width: 350px;
`;
