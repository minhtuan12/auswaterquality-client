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

    const nameCount: Record<string, number> = {};
    data.forEach((item) => {
      nameCount[item.name] = (nameCount[item.name] || 0) + 1;
    });

    const normalized = data.map((item) => {
      let label = item.name;
      let value = item.name;
      // let value = item.cencusName;

      if (nameCount[item.name] > 1 && item.cencusName) {
        const cleanCensus = item.cencusName.replace(/\s*\(L\)\s*$/i, "").trim();
        label = cleanCensus;
        value = item.name;
      }

      return {
        key: label + "-" + item.state,
        label,
        value,
      };
    });

    if (hasAll) {
      normalized.unshift({ key: "All", label: "All", value: "All" });
    }

    return normalized;
  }, [communities, state, hasAll]);


  const onChangeState = (state: string) => {
    setState(state);
  };

  return { data: communities, options: getOptions, onChangeState };
};

export default useFetchCommunities;
