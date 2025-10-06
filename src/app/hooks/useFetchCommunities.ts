import { useMemo, useState } from "react";
import CommunitiesJson from "../../../public/jsons/communities.json";
import { DB_STATE } from "../utils/mocks/options";

type Props = {
  hasAll?: boolean;
};

const useFetchCommunities = ({ hasAll = false }: Props) => {
  const [state, setState] = useState("All");
  const [communities] = useState(CommunitiesJson);

  const getOptions = useMemo(() => {
    let data = [...communities];
    if (state !== "All") {
      data = data.filter((item) => DB_STATE[item.state] === state);
    }
    if (hasAll) {
      data.unshift({ name: "All", state: "All" } as any);
    }
    return data.map((item, index) => ({
      key: item.name + "-" + index,
      label: item.name,
      value: item.name,
    }));
  }, [communities, state, hasAll]);

  const onChangeState = (state: string) => {
    setState(state);
  };

  return { data: communities, options: getOptions, onChangeState };
};

export default useFetchCommunities;
