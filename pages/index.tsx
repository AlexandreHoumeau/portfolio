import React from "react";

import { Container, Header } from "@components";
import { Github, Main } from "@layouts";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { sub } from "date-fns";

const Home: React.FC = ({ contributions }) => {
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
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
  });

  const from = sub(Date.now(), { months: 6 }).toISOString()
  const to = new Date().toISOString()
  console.log(``)

  const { data } = await client.query({
    context: {
      headers: {
        Authorization: "Bearer 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",
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
