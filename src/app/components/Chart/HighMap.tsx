import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";

type Props = {
  className?: string;
  options: any;
};

const HighMap = ({ options, className }: Props) => {
  return (
    <div className={className}>
      <HighchartsReact
        constructorType={"mapChart"}
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default HighMap;
