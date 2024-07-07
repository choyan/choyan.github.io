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
            With a rich tapestry of nine years of hands-on experience in web development and management across diverse industries, I bring a proven track record of crafting exceptional websites and applications.
             {/* –&nbsp;
            {" while you're here "}
            <Link href="/about">
              learn more about me
            </Link> */}
          </p>
        </ContentWrapper>
        <RoundImage
          src='/assets/png/choyan.jpeg'
          alt="Zahidul Hossain Choyan"
          width={150}
          height={150}
        />
      </HeroFlex>
      {/* <Projects /> */}
      {/* <Posts title="Featured Stories" /> */}
      <div style={{
        'marginTop': '60px'
      }}>
        <Timeline />
      </div>
      <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="2d9a667f-4b09-4e9f-8ed7-7312078fa3c3" data-blockingmode="auto" type="text/javascript"/>
        {/* <a href="https://www.iubenda.com/privacy-policy/29052517" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a> */}
        {/* <Script id="iubenda">
          {`(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`}
        </Script> */}

        {/* <Script id='cookie'> {
          `
          var _iub = _iub || [];
          _iub.csConfiguration = {"askConsentAtCookiePolicyUpdate":true,"enableFadp":true,"enableLgpd":true,"enableUspr":true,"fadpApplies":true,"floatingPreferencesButtonDisplay":"anchored-bottom-right","lang":"en","perPurposeConsent":true,"siteId":3694881,"usprApplies":true,"whitelabel":false,"cookiePolicyId":29052517, "banner":{ "acceptButtonDisplay":true,"closeButtonDisplay":false,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"ownerName":"choyan.github.io","position":"float-top-center","rejectButtonDisplay":true,"showTitle":false,"showTotalNumberOfProviders":true }};
          `
          }
        </Script>
        <Script src="https://cs.iubenda.com/autoblocking/3694881.js"/>
        <Script src="//cdn.iubenda.com/cs/gpp/stub.js"/>
        <Script src="//cdn.iubenda.com/cs/iubenda_cs.js"  async/> */}

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
