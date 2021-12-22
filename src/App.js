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
        return (
          <Section
            key={`section${index}`}
            sectionData={sectionData}
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
