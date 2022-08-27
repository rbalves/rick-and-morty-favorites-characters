import { useQuery } from "@apollo/client";

import { CHARACTERS_QUERY } from "../../services/queries";

const useGetCharacters = () => {
  const {
    data: { characters },
    loading,
    error,
  } = useQuery(CHARACTERS_QUERY);

  return { characters, loading, error };
};

export default useGetCharacters;
