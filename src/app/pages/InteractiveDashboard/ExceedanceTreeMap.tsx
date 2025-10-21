import { useMemo } from "react";
import Highcharts from "highcharts";
import { BaseHelper } from "../../utils/baseHelper";
import Treemap from "highcharts/modules/treemap";
import HighchartsReact from "highcharts-react-official";

type Props = {
  title?: string;
  data: object;
  isSubData?: boolean;
};

const ExceedanceTreeMap = ({ title, data, isSubData }: Props) => {
  const getOptions: Highcharts.Options = useMemo(() => {
    const coolColors = BaseHelper.generateCoolColor(Object.keys(data).length);

    const seriesData = Object.entries(data).map(([key, value], index) => {
      return {
        name: key,
        value,
        color: isSubData ? coolColors[index] : BaseHelper.getDarkColor(index),
      };
    });

    return {
      series: [
        {
          type: "treemap",
          layoutAlgorithm: "squarified",
          dataLabels: {
            enabled: true,
            style: {
              fontSize: "12px",
              color: "white",
            },
          },
          data: seriesData,
        },
      ],
      title: {
        text: title ?? "",
      },
      tooltip: {
        pointFormat:
          "<b>{point.name}</b><br/>Number of locations: {point.value}",
      },
    };
  }, [data, isSubData, title]);

  return <HighchartsReact highcharts={Treemap} options={getOptions} />;
};

export default ExceedanceTreeMap;
