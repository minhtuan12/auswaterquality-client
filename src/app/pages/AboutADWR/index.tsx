import { BaseHelmet, ConfigurationText, HomeBanner } from "../../components";
import { Container, Table } from "react-bootstrap";
import { ADWR_Img } from "../../assets/images";
import { useConfiguration } from "../../contexts";
import "./styles.css";
import { useMemo } from "react";

const metadata: any = [
  {
    title: "TIMEFRAME",
    content: "",
  },
  {
    title: "DATA SOURCE",
    content: "",
  },
  {
    title: "DATA COLLECTION",
    content: ""
  },
  {
    title: "DATA DESCRIPTION",
    content: "",
  },
  {
    title: "FREQUENCY",
    content: "",
  },
  {
    title: "SPATIAL COVERAGE",
    content: ""
  },
  {
    title: "LIMITATIONS",
    content: "",
  },
];

const AboutADWRPage = () => {
  const { configurations } = useConfiguration();
  const ADWR_TABLE = useMemo(() => {
    const data: Record<string, string> = configurations?.data?.aboutADWRMetadata?.value;
    return metadata.map((item: any) => ({
      ...item,
      content: <ConfigurationText data={{ value: data[item.title] }} />
    }))
  }, [configurations?.data?.aboutADWRMetadata]);

  return (
    <div className="wjh-about-adwr">
      <BaseHelmet title="About ADWR" />
      {/* Banner */}
      <HomeBanner isVideo />
      <Container className="wjh-about-adwr__wrapper">
        <div className="wjh-about-adwr__about">
          <div className="wjh-about-adwr__about-left">
            <h5>{configurations.data?.aboutADWR?.name}</h5>
            <ConfigurationText
              data={configurations.data?.aboutADWR}
            />
          </div>
          <div className="wjh-about-adwr__about-right">
            <img src={ADWR_Img} alt="" width={500} />
          </div>
        </div>
        <ConfigurationText
          className="wjh-about-adwr__content"
          data={configurations.data?.aboutADWRContent}
        />
        <hr />
        <Table striped className="wjh-about-adwr__table">
          <thead>
            <tr>
              <th></th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {ADWR_TABLE.map((item: any) => (
              <tr key={item.title}>
                <td>{item.title}</td>
                <td>{item.content}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AboutADWRPage;
