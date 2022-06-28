import React from "react";

import { Container, Header } from "@components";
import { Github, Main } from "@layouts";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

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
  return (
    <Container>
      <div className="sticky z-50 w-full top-0">
        <Header />
      </div>
      <Main />
      <Github contributions={contributions} />
    </Container>
  );
};

export async function getStaticProps() {
  const { GITHUB_API_KEY }  = process.env
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
