import { useEffect, useRef } from "react";
import { Timeline } from "@knight-lab/timelinejs";
import "@knight-lab/timelinejs/dist/css/timeline.css";
import "./styles.css";

const CustomTimeline = ({ data }: any) => {
  const containerRef = useRef(null);

  useEffect(() => {
    new Timeline(containerRef.current, data, {
      language: "en",
      initial_zoom: 2,
      start_at_end: true,
    });
  }, [data]);

  return <div ref={containerRef} id="wjh-timeline" />;
};

export default CustomTimeline;
