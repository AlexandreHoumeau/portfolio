import React, { useEffect, useState } from "react";

import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { Container, CookieModal, Header } from "@components";
import {
  AboutMe,
  Contact,
  ContactMobile,
  Experience,
  Github,
  Main,
  Projects,
  Skills,
  SkillsMobile,
} from "@layouts";
import { Parallax } from "@react-spring/parallax";
import { isMobile } from "react-device-detect";
import { AnimatePresence } from "framer-motion";

interface PropType {
  contributions: {
    contributionCalendar: {
      totalContributions: string;
      weeks: [
        {
          firstDay: String;
          contributionDays: [
            {
              contributionLevel: String;
              date: number;
            }
          ];
        }
      ];
    };
  };
}

const Home: React.FC<PropType> = ({ contributions }) => {
  let parallax;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const acceptedCookie = localStorage.getItem("cookie");
      if (!acceptedCookie) {
        setShow(true);
      }
    }, 3000);
  }, []);

  const acceptCookie = () => {
    setShow(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("cookie", "true");
    }
  };
  return (
    <Container>
      <div className="sticky z-50 w-full top-0">
        <Header />
      </div>
      <Parallax
        pages={6}
        innerStyle={{ overflow: "initial" }}
        style={{ top: "0", left: "0", overflow: "scroll" }}
        ref={(ref) => (parallax = ref)}
        className="scrollingContainer"
      >
        {/* <ParallaxLayer> */}
        <Main />
        {/* </ParallaxLayer> */}

        {/* <ParallaxLayer offset={1}> */}
        <AboutMe />
        {/* </ParallaxLayer> */}
        {/* <ParallaxLayer offset={2}> */}
        <Experience />
        {/* </ParallaxLayer> */}
        <Projects />
        {/* <ParallaxLayer factor={4} offset={3}> */}
        {isMobile ? <SkillsMobile /> : <Skills />}
        {/* </ParallaxLayer> */}
        {/* <ParallaxLayer offset={6}> */}
        <Github contributions={contributions} />

        {isMobile ? <ContactMobile /> : <Contact />}

        {/* </ParallaxLayer> */}
      </Parallax>
      <AnimatePresence>
        {show && <CookieModal closeModal={acceptCookie} />}
      </AnimatePresence>
    </Container>
  );
};

export async function getStaticProps() {
  const { GITHUB_API_KEY } = process.env;
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    context: {
      headers: {
        Authorization: `Bearer ${GITHUB_API_KEY}`,
      },
    },
    query: gql`
      query {
        user(login: "alexandreHoumeau") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  color
                  contributionCount
                  contributionLevel
                  date
                  weekday
                }
                firstDay
              }
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      contributions: data.user.contributionsCollection,
    },
  };
}

export default Home;
