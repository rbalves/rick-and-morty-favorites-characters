import { ApolloProvider } from "@apollo/client";

import Characters from "./src/screens/Characters";

import { client } from "./src/services/client";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Characters />
    </ApolloProvider>
  );
}
