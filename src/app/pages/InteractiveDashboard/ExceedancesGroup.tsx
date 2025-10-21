import { useState } from "react";
import { Button } from "antd";
import { Col, Row } from "react-bootstrap";
import ExceedanceTreeMap from "./ExceedanceTreeMap";
import { ExceedancesTreeMapType } from "../../types";

const options: { label: string; value: string }[] = [
  { label: "Acceptability-based exceedance", value: "aesthetic" },
  { label: "Health-based exceedance", value: "health" },
  { label: "All", value: "All" },
];

type Props = {
  data: ExceedancesTreeMapType;
};

const ExceedancesGroup = ({ data }: Props) => {
  const [selected, setSelected] = useState("aesthetic");

  return (
    <Row>
      <Col md={8}>
        {selected === "All" && (
          <ExceedanceTreeMap
            title={`Locations with exceedances `}
            data={{ ...data.aestheticParameters, ...data.healthParameters }}
          />
        )}
        {selected === "aesthetic" && (
          <ExceedanceTreeMap
            title={`Annual occurence of acceptability-based exceedances by parameter`}
            data={data.aestheticParameters}
          />
        )}
        {selected === "health" && (
          <ExceedanceTreeMap
            title={`Annual occurence of health-based exceedances by parameter`}
            data={data.healthParameters}
          />
        )}
      </Col>
      <Col md={4}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              padding: "48px 0",
            }}
          >
            {options.map((item) => {
              const isSelected = selected === item.value;
              const selectedProps = { type: "primary" };
              const props = isSelected ? selectedProps : {};
              return (
                <Button
                  key={item.value}
                  block
                  onClick={() => {
                    setSelected(item.value);
                  }}
                  {...props}
                >
                  {item.label}
                </Button>
              );
            })}
          </div>
          {selected === "aesthetic" && (
            <div className="wjh-exceedance-tree-map--small">
              <ExceedanceTreeMap
                title={`Annual occurence of health-based exceedances by parameter`}
                data={data.healthParameters}
                isSubData
              />
            </div>
          )}
          {selected === "health" && (
            <div className="wjh-exceedance-tree-map--small">
              <ExceedanceTreeMap
                title={`Annual occurence of acceptability-based exceedances by parameter`}
                data={data.aestheticParameters}
                isSubData
              />
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default ExceedancesGroup;
