import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Timeline } from "components/Timeline";
// import { Projects } from "components/Projects";
// import { Posts } from "components/Posts";
import Container from "components/Layout/Container";
import { StringProps } from "lib/types";
import { devices } from "lib/displayDevice";
import { Flex } from "components/Layout/Container/styles";
import Script from "next/script";
// import ProfileImage from '/assets/png/choyan.jpeg'

export default function Home() {
  return (
    <Container>
      <HeroFlex align="flex-start">
        <ContentWrapper>
          <h1>Zahidul Hossain Choyan</h1>
          <h2>Front-end Engineer</h2>
          <p>
            With a rich tapestry of nine years of hands-on experience in web
            development and management across diverse industries, I bring a
            proven track record of crafting exceptional websites and
            applications.
            {/* –&nbsp;
            {" while you're here "}
            <Link href="/about">
              learn more about me
            </Link> */}
          </p>
        </ContentWrapper>
        <RoundImage
          src="/assets/png/choyan.jpeg"
          alt="Zahidul Hossain Choyan"
          width={150}
          height={150}
        />
      </HeroFlex>
      {/* <Projects /> */}
      {/* <Posts title="Featured Stories" /> */}
      <div
        style={{
          marginTop: "60px",
        }}
      >
        <Timeline />
      </div>
    </Container>
  );
}

export const ContentWrapper = styled.div<StringProps>`
  padding-right: 2rem;

  h1,
  h2 {
    margin: 0;
  }

  h2 {
    margin: 1rem 0;
    font-size: 1.25rem;
  }

  p {
    max-width: 65ch;
  }

  @media ${devices.mobileL} {
    margin-top: 2rem;
  }
`;

export const RoundImage = styled(Image)`
  border-radius: 50%;
`;

const HeroFlex = styled(Flex)`
  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;
