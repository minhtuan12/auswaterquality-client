import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type Props = {
  className?: string;
  options: any;
};

const BaseChart = React.forwardRef(
  ({ className, options }: Props, ref: any) => {
    return (
      <div className={className}>
        <HighchartsReact ref={ref} highcharts={Highcharts} options={options} />
      </div>
    );
  }
);

export default BaseChart;
