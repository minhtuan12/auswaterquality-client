import { Link } from "react-router-dom";
import { useConfiguration } from "../../contexts";
import "./styles.css";

const GuidelinesContent = () => {
  const { configurations } = useConfiguration();

  if (!configurations?.data?.aboutADWG) {
    return;
  }

  const { name, fields } = configurations?.data?.aboutADWG ?? {};

  return (
    <div className="wjh-guidelines__about">
      <div className="wjh-guidelines__about-left">
        <h5>{name}</h5>
        <p
          dangerouslySetInnerHTML={{
            __html: fields?.aboutADWGContent?.value,
          }}
        ></p>
        <Link to={fields?.aboutADWGDownloadLink?.value} target="_blank">
          {fields?.aboutADWGDownloadText?.value}
        </Link>
      </div>
      <div className="wjh-guidelines__about-right">
        <div className="wjh-guidelines__about-image">
          <div className="wjh-guidelines__about-image-rotate">
            <div className="bk-front">
              <div className="bk-cover-back"></div>
              <div className="bk-cover"></div>
            </div>
            <div className="bk-left"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidelinesContent;
