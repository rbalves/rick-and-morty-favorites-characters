import { useQuery } from "@apollo/client";

import { CHARACTERS_QUERY } from "../../services/queries";

const useGetCharacters = () => {
  const { data, loading, error } = useQuery(CHARACTERS_QUERY);

  return { characters: data?.characters || [], loading, error };
};

export default useGetCharacters;
