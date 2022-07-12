import { useState } from "react";
import styled from "styled-components";

import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Section from "./components/Section";
import data from "./data/cards";

export default function Album() {
    const [openContact, setOpenContact] = useState(false);

    return (
        <PageContainer>
            <Hero openContact={openContact} setOpenContact={setOpenContact} />
            {data.map((sectionData, index) => {
                return (
                    <Section
                        key={`section${index}`}
                        sectionData={sectionData}
                    />
                );
            })}
            <Contact isOpen={openContact} />
            <Footer />
        </PageContainer>
    );
}

const PageContainer = styled.div`
    position: relative;
    min-width: 350px;
`;
