import { Button } from "react-bootstrap";
import "./styles.css";

const GlobeInfoModal = () => {
  return (
    <div id="map-modal">
      <div className="map-modal-header">
        <div id="map-modal-image" className="wjh-globe-modal__cover">
          <img
            src="/images/homepagelibraries/giahs-map/giahs-map-image-48.jpg"
            alt="Jeju Batdam Agricultural System"
          />
        </div>
        <Button
          id="btn-modal-close"
          variant="secondary"
          className="wjh-btn-round"
        >
          <i className="bi bi-x"></i>
        </Button>
      </div>
      <div id="map-modal-body">
        <h3>Republic of Korea</h3>
        <h5>
          <a
            href="http://www.fao.org/giahs/giahsaroundtheworld/designated-sites/asia-and-the-pacific/jeju-batdam-agricultural-system/en/"
            target="_blank"
          >
            Jeju Batdam Agricultural System
          </a>
        </h5>
        <p>
          Batdam, black stone fences, are the result of the ingenuity of Jeju
          inhabitants striving to survive on a windy volcanic island. Using
          stones, 22 000 kilometers of fences were built and have survived
          natural disasters for over a thousand years. This system prevents
          winds and loss of soil and preserves the farming culture of Jeju.
        </p>
      </div>
    </div>
  );
};

export default GlobeInfoModal;
