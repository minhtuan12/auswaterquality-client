import { useEffect, useState } from "react";
import { Carousel } from "antd";
import { useTranslation } from "react-i18next";
import HomeWidget from "./HomeWidget";
import { EventsCard } from "../../../components";
import { NewsType } from "../../../types";
import { NewsService } from "../../../services";

const eventsCarouselConfig = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const EventsCarousel = () => {
  const { t } = useTranslation();
  const [eventData, setEventData] = useState<{
    data: NewsType[];
    meta: { limit: number; page: number; total: number };
  }>({
    data: [],
    meta: { limit: 10, page: 1, total: 10 },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    NewsService.searchList({
      limit: 6,
      categories: ["da48bc3c-a1c6-42f7-b691-2af0b363e600"],
    })
      .then(({ data }) => {
        setEventData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading || eventData.data.length === 0) {
    return;
  }

  return (
    <HomeWidget title={t("Events")}>
      <Carousel {...eventsCarouselConfig} className="wjh-home__carousel">
        {eventData.data.map((item) => (
          <EventsCard key={item.id} data={item} />
        ))}
      </Carousel>
    </HomeWidget>
  );
};

export default EventsCarousel;
