import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Card, Divider, Form, Input, InputRef, Radio } from "antd";
import { AccessToDataModal, BaseHelmet, HomeTitle } from "../../components";
import TreeView from "./TreeView";
import Checkbox, { CheckboxGroupProps } from "antd/es/checkbox";
import { useContextModal } from "../../contexts";
import { DB_STATE, STATE_OPTIONS } from "../../utils/mocks/options";
import CommunitiesJson from "../../../../public/jsons/communities.json";
import ParametersJson from "../../../../public/jsons/parameters.json";

const tabsData = [
  {
    key: "sections1",
    data: [
      {
        key: "states",
        label: "States",
      },
    ],
  },
  {
    key: "sections2",
    data: [
      {
        key: "locations",
        label: "Locations",
      },
    ],
  },
  {
    key: "sections3",
    data: [
      {
        key: "parameters",
        label: "Parameters",
      },
    ],
  },
  {
    key: "sections4",
    data: [
      {
        key: "years",
        label: "Years",
      },
    ],
  },
];

const contentListNoTitle: () => Record<string, React.ReactNode> = () => {
  const years = Array.from({ length: 2024 - 2004 + 1 }, (_, i) => 2004 + i);
  const states = STATE_OPTIONS.slice(1);
  const getLocation = () => {
    const results: any = [];
    states.forEach((state) => {
      const communities = CommunitiesJson.filter(
        (community) => DB_STATE[community.state] === state.key
      ).map((item) => ({ key: item._id, title: item.name }));
      results.push({
        key: state.key,
        title: `All locations of the ${state.label}`,
        children: communities,
      });
    });
    return results;
  };
  const getParameters = () => {
    const healthParameters: any = [];
    const aestheticParameters: any = [];
    // const otherParameters: any = [];
    ParametersJson.forEach((parameter) => {
      if (parameter.type === "aesthetic") {
        aestheticParameters.push({ key: parameter._id, title: parameter.name });
      }
      if (parameter.type === "health") {
        healthParameters.push({ key: parameter._id, title: parameter.name });
      }
      // if (parameter.type === "others") {
      //   otherParameters.push({ key: parameter._id, title: parameter.name });
      // }
    });
    return [
      {
        key: "health",
        title: "All Health-based Parameter",
        children: healthParameters,
      },
      {
        key: "aesthetic",
        title: "All Acceptability-based Parameter",
        children: aestheticParameters,
      },
    ];
  };
  return {
    states: (
      <TreeView
        treeData={states.map((item) => ({
          key: item.key,
          title: item.label,
        }))}
      />
    ),
    locations: <TreeView treeData={getLocation()} />,
    years: (
      <TreeView treeData={years.map((item) => ({ key: item, title: item }))} />
    ),
    parameters: <TreeView treeData={getParameters()} />,
  };
};

const AccessDataCard = ({ items }: any) => {
  const [activeTabKey, setActiveTabKey] = useState<string>(items[0].key);

  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };

  return (
    <Card
      tabList={items}
      activeTabKey={activeTabKey}
      // tabBarExtraContent={<Link to="#">More</Link>}
      onTabChange={onTabChange}
      tabProps={{
        size: "middle",
      }}
    >
      {contentListNoTitle()[activeTabKey]}
    </Card>
  );
};

const AccessDataPage = () => {
  const [visible, setVisible] = useState(true);
  const { contactUs } = useContextModal();
  const emailRef = useRef<InputRef>(null);

  const options: CheckboxGroupProps<string>["options"] = [
    { label: "Table", value: "table" },
  ];

  const onCheckboxChange = () => { };

  const onOpenAccessDataModal = () => {
    setVisible(true);
  };

  const onCloseAccessDataModal = () => {
    setVisible(false);
  };

  return (
    <div className="wjh-news">
      <BaseHelmet title="Access To Data" />
      <AccessToDataModal
        open={visible}
        onClose={onCloseAccessDataModal}
        onContactUsClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          contactUs.open();
        }}
      />
      <Container style={{ paddingBottom: 42 }}>
        <HomeTitle title="Access To Data" />
        <Form>
          <Row>
            <Col md={5}>
              <Input
                ref={emailRef}
                size="large"
                placeholder="Email"
                addonBefore={<i className="bi bi-person-fill"></i>}
              />
            </Col>
            <Col md={5}>
              <Input
                size="large"
                placeholder="Password"
                addonBefore={<i className="bi bi-lock-fill"></i>}
              />
            </Col>
            <Col md={2}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <Button type="primary" size="large" block>
                  Login
                </Button>
                <Link
                  to="/"
                  style={{ width: "100%", textAlign: "center" }}
                  onClick={(e) => {
                    e.preventDefault();
                    contactUs.open();
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </Col>
          </Row>
        </Form>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: "0",
              background: "rgba(255,255,255,0.5)",
              zIndex: "1",
              cursor: "pointer",
            }}
            onClick={onOpenAccessDataModal}
          ></div>
          <Row style={{ rowGap: 24 }}>
            {tabsData.map((item) => (
              <Col md={6} key={item.key}>
                <AccessDataCard items={item.data} />
              </Col>
            ))}
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col md={2}>
              <div>
                <span>Output Type</span>
                <Divider style={{ margin: "5px 0" }} />
                <Radio.Group options={options} defaultValue="Apple" />
              </div>
            </Col>
            <Col md={2}>
              <div>
                <span>File Type</span>
                <Divider style={{ margin: "5px 0" }} />
                <Radio.Group options={options} defaultValue="Apple" />
              </div>
            </Col>
            <Col md={5}>
              <div>
                <span>Thousand Separator in "Show Data"</span>
                <Divider style={{ margin: "5px 0" }} />
                <Radio.Group options={options} defaultValue="Apple" />
              </div>
            </Col>
            <Col md={3}>
              <div>
                <span>Output Formatting Options</span>
                <Divider style={{ margin: "5px 0" }} />
                <Checkbox.Group
                  options={options}
                  value={["Apple"]}
                  onChange={onCheckboxChange}
                />
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col md={6}></Col>
            <Col md={3}>
              <Button
                block
                size="large"
                type="primary"
                icon={<i className="bi bi-search"></i>}
              >
                Show Data
              </Button>
            </Col>
            <Col md={3}>
              <Button
                block
                size="large"
                color="cyan"
                variant="solid"
                icon={<i className="bi bi-download"></i>}
              >
                Download Data
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AccessDataPage;
