import React from "react";

import { Container, Header } from "@components";
import { AboutMe, Experience, Github, Main } from "@layouts";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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
  return (
    <Container>
      <div className="sticky z-50 w-full top-0">
        <Header />
      </div>
      <Parallax
        pages={4}
        style={{ top: "0", left: "0" }}
        ref={(ref) => (parallax = ref)}
      >
        <ParallaxLayer>
          <Main />
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <AboutMe />
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <Experience />
        </ParallaxLayer>

        <ParallaxLayer offset={3}>
          <Github contributions={contributions} />
        </ParallaxLayer>
      </Parallax>
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
