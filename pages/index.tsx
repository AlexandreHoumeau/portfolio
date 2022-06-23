import React from "react";

import { Container, Header, Main } from "@components";

const Home: React.FC = () => {
  return (
    <Container>
      <div className="sticky z-50 w-full top-0">
        <Header />
      </div>
      <Main />
    </Container>
  );
};

export default Home;
