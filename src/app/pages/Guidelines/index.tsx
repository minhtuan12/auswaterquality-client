import { useMemo, useState } from "react";
import { Table as AntTable, Divider } from "antd";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import {
  BaseHelmet,
  CustomTimeline,
  FormDropdown,
  HomeTitle,
} from "../../components";
import { GUIDELINE_TIMELINE } from "../../utils/mocks/timeline";
import { PARAMETER_TYPE_OPTIONS } from "../../utils/mocks/options";
import GuidelinesContent from "./GuidelinesContent";
import { ParameterType } from "../../enums/Parameter";
import { useFetchJson } from "../../hooks";
import "./styles.css";

type TableData = {
  characteristic: string;
  subName?: string;
  health_guideline?: string;
  aesthetic_guideline?: string;
  comments: string;
  children?: TableData[];
};

// const EXCLUDE_DATA = ["Not necessary", "c", "f"];
const EXCLUDE_DATA: string[] = [""];

const checkCorrectData = (a: string, b: string) => {
  if (a === b) {
    return true;
  }
  return a.includes(b);
};

const isValidData = (data?: string) => {
  return data && !EXCLUDE_DATA.includes(data);
};
const GuidelinesPage = () => {
  const [filter, setFilter] = useState({
    parameter: "All",
    parameterType: ParameterType.ALL,
  });
  const { data: guidelineData, loading: guidelineDataLoading } = useFetchJson<
    TableData[]
  >({
    url: `${
      import.meta.env.VITE_CLOUDINARY_URL
    }/raw/upload/v1755537216/Guideline_owvuni_rqxi98.json`,
    default: [],
  });
  const isAll = filter.parameterType === ParameterType.ALL;
  const isHealth = filter.parameterType === ParameterType.HEALTH;
  const isAesthetic = filter.parameterType === ParameterType.AESTHETIC;
  const isHealthGuideline = isHealth || isAll;
  const isAestheticGuideline = isAesthetic || isAll;

  const checkType = (data: TableData[], value: string) => {
    const findParameter = data.find(
      (item) =>
        checkCorrectData(item.characteristic, value) ||
        checkCorrectData(item.subName ?? "", value)
    );
    const type: ParameterType[] = [];
    if (findParameter) {
      if (isValidData(findParameter.aesthetic_guideline)) {
        type.push(ParameterType.AESTHETIC);
      }
      if (isValidData(findParameter.health_guideline)) {
        type.push(ParameterType.HEALTH);
      }
      if (findParameter.children) {
        findParameter.children.forEach((child) => {
          if (child.aesthetic_guideline) {
            type.push(ParameterType.AESTHETIC);
          }
          if (child.health_guideline) {
            type.push(ParameterType.HEALTH);
          }
        });
        return type;
      }
    }
    return type;
  };

  const handleChangeFilter = (value: string, name: string) => {
    if (name === "parameter") {
      if (value === "All") {
        setFilter((pre) => ({
          ...pre,
          [name]: value,
          parameterType: ParameterType.ALL,
        }));
        return;
      }
      const type: ParameterType[] = checkType(guidelineData, value);

      setFilter((pre) => ({
        ...pre,
        [name]: value,
        parameterType: type.length === 2 ? ParameterType.ALL : type[0],
      }));
    }
    setFilter((pre) => ({ ...pre, [name]: value }));
  };

  const getColumns = useMemo(() => {
    const healthGuideline = isHealthGuideline
      ? {
          dataIndex: "health_guideline",
          title: "Health Guideline Value",
          width: "20%",
          align: "center",
        }
      : undefined;
    const aestheticGuideline = isAestheticGuideline
      ? {
          dataIndex: "aesthetic_guideline",
          title: "Aesthetic Guideline",
          width: "20%",
          align: "center",
        }
      : undefined;
    const column = [
      {
        dataIndex: "characteristic",
        title: "Parameter",
        width: "20%",
      },
      {
        type: "group",
        title: "Guideline values (mg/L unless otherwise specified)",
        align: "center",
        children: [healthGuideline, aestheticGuideline].filter((item) =>
          Boolean(item)
        ),
      },
      {
        dataIndex: "comments",
        title: "Comments",
        width: "40%",
      },
    ];
    return column;
  }, [isAestheticGuideline, isHealthGuideline]);

  const mapData = useMemo(() => {
    return guidelineData.filter((item) => {
      if (filter.parameter === "All" && item.characteristic !== "All") {
        return true;
      }
      const matchParameter =
        checkCorrectData(item.characteristic, filter.parameter) ||
        checkCorrectData(item.subName ?? "", filter.parameter);

      const hasHealth = !!item.health_guideline;
      const hasAesthetic = !!item.aesthetic_guideline;

      if (!matchParameter) return false;

      if (isHealth) {
        return hasHealth && (filter.parameter === "All" || item.characteristic);
      }
      if (isAesthetic) return hasAesthetic;

      if (item.children) {
        return !!item.children;
      }
      return hasHealth || hasAesthetic;
    });
  }, [filter.parameter, guidelineData, isAesthetic, isHealth]);

  const getParameterOptions = () => {
    const filterData = guidelineData.filter((item) => {
      if (isHealth) {
        return item.health_guideline;
      }
      if (isAesthetic) {
        return item.aesthetic_guideline;
      }
      return item;
    });
    filterData.unshift({ characteristic: "All" } as any);
    return filterData.map((item, index) => ({
      key: item.characteristic + "-" + index,
      value: item.characteristic,
    }));
  };

  return (
    <div className="wjh-guidelines">
      <BaseHelmet title="Water Quality Guidelines" />
      <Container>
        <HomeTitle title="Water Quality Guidelines" />
        <GuidelinesContent />
        {/* Timeline */}
        <div style={{ padding: "40px 0" }}>
          <CustomTimeline data={GUIDELINE_TIMELINE} />
        </div>
        <Divider style={{ marginBottom: 0, borderColor: "#ccc" }} />
        <div style={{ background: "#F5F5F5", padding: "16px 0" }}>
          <Form>
            <Row className="w-100 mx-0">
              <Col md={6}>
                <FormDropdown
                  label="Select Parameter Type:"
                  controlId="form.selectParameterType"
                  options={PARAMETER_TYPE_OPTIONS}
                  value={filter.parameterType}
                  onChange={(value) =>
                    handleChangeFilter(value, "parameterType")
                  }
                />
              </Col>
              <Col md={6}>
                <FormDropdown
                  label="Select Parameter:"
                  controlId="form.selectParameter"
                  showSearch
                  options={getParameterOptions()}
                  value={filter.parameter}
                  onChange={(value) => handleChangeFilter(value, "parameter")}
                />
              </Col>
            </Row>
          </Form>
          <Card style={{ margin: "0 12px" }}>
            <Card.Header
              style={{
                background: "white",
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h5>Show Data</h5>
            </Card.Header>
            <Card.Body>
              <AntTable
                loading={guidelineDataLoading}
                dataSource={mapData}
                columns={getColumns as any}
              />
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default GuidelinesPage;
