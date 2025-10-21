import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { NewsType } from "../../types";
import { routeDefine } from "../../configs";
import moment from "moment";
import "./styles.css";

type Props = {
  data: NewsType;
};

const EventsCard = ({ data }: Props) => {
  const displayStartDate = data.meta?.startDate ?? data.createdAt;
  const displayEndDate = data.meta?.endDate ?? data.createdAt;
  const getCreateDate = useMemo(() => {
    const date = moment(displayStartDate).date();
    return date < 10 ? `0${date}` : date;
  }, [displayStartDate]);

  return (
    <Link
      to={`${routeDefine.detail}/${data.slug}`}
      reloadDocument
      className="wjh-link"
      style={{ padding: "0 16px", display: "block" }}
    >
      <Card className="wjh-events-card">
        <Card.Img
          className="wjh-events-card__thumbnail"
          src={data.thumbnailImage}
        />
        <div className="wjh-events-card__overlay"></div>
        <Card.Body>
          <div>
            <div className="wjh-events-card__created-at">
              <div className="wjh-events-card__date">{getCreateDate}</div>
              <div className="wjh-events-card__month">
                {moment(displayStartDate).format("MMM")}
              </div>
              <div className="wjh-events-card__year">
                {moment(displayStartDate).year()}
              </div>
            </div>
          </div>
          <Card.Title className="wjh-events-card__title text-truncate-4">
            {data.title}
          </Card.Title>
          <Card.Text className="wjh-events-card__content">
            {moment(displayStartDate).format("h a")} -{" "}
            {moment(displayEndDate).format("h a")}
          </Card.Text>
          {data.meta?.location && (
            <Card.Text className="wjh-events-card__location">
              {data.meta?.location}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Link>
  );
};

export default EventsCard;
