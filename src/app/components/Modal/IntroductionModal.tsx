import { useEffect, useState } from "react";
import { Button, Checkbox, Modal, Typography } from "antd";
import { useConfiguration } from "../../contexts";
import "./styles.css";
import {extractFromDisclaimer} from "../../utils/baseHelper.ts";

const IntroductionModal = () => {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isFirstSlide = currentSlide === 0;
  const { configurations } = useConfiguration();
  const { introductionText } = configurations.data;

  const slides = [
    {
      key: "first",
      content: <div className="slide-content">{introductionText?.value}</div>,
    },
    {
      key: "second",
      content: (
        <div className="slide-content">
          <div
              className="wjh-privacy"
              dangerouslySetInnerHTML={{
                  __html: extractFromDisclaimer(configurations.data?.privacyContent?.value),
              }}
          ></div>
          <div style={{ marginTop: 10 }}>
            <Checkbox
              checked={checked}
              onChange={() => {
                setChecked((pre) => !pre);
              }}
            >
              I have read, understood, and agree to the terms stated above.
            </Checkbox>
          </div>
        </div>
      ),
    },
  ];

  const agreeModal = () => {
    setVisible(false);
    sessionStorage.setItem("showIntroductionModal", "true");
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const introductionModalSession = sessionStorage.getItem(
      "showIntroductionModal"
    );
    if (!introductionModalSession) {
      setVisible(true);
    }
  }, []);

  return (
    <Modal
      title={
        !isFirstSlide ? (
          <Typography.Title level={2}>Disclaimer</Typography.Title>
        ) : null
      }
      open={visible}
      width={!isFirstSlide ? 1000 : undefined}
      centered
      closable={false}
      footer={null}
    >
      <div className="carousel-container">
        <div
          className="slides-wrapper"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.key}
              className="slide"
              style={{ height: isFirstSlide ? "125px" : "auto" }}
            >
              {slide.content}
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          {currentSlide === 0 ? (
            <div style={{ width: "60px" }}></div>
          ) : (
            <Button className="carousel-arrow prev" onClick={prevSlide}>
              Prev
            </Button>
          )}

          <div className="indicators">
            {slides.map((slide, index) => (
              <button
                key={slide.key}
                className={`indicator ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          {currentSlide === 1 ? (
            <Button
              className="carousel-arrow next"
              type="primary"
              onClick={agreeModal}
              disabled={!checked}
            >
              Agree
            </Button>
          ) : (
            <Button
              className="carousel-arrow next"
              type="primary"
              onClick={nextSlide}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default IntroductionModal;
