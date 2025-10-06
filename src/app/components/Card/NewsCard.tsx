import { Button } from "antd";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NewsType } from "../../types";
import { routeDefine } from "../../configs";
import "./styles.css";

type Props = {
  data: NewsType;
  hasThumbnail?: boolean;
  isGridCard?: boolean;
  thumbnailHeight?: number;
};

const NewsCard = ({
  data,
  hasThumbnail = true,
  isGridCard,
  thumbnailHeight,
}: Props) => {
  const hasYoutubeUrl = !!data?.meta?.youtubeUrl;
  return (
    <div
      style={{ ...(isGridCard ? { display: "block", height: "100%" } : {}) }}
    >
      <Card
        className="wjh-news-card border-0"
        style={{ ...(isGridCard ? { height: "100%" } : {}) }}
      >
        {hasThumbnail && (
          <>
            {hasYoutubeUrl ? (
              <iframe
                title={data.title}
                src={data?.meta?.youtubeUrl}
                style={{ width: "100%", height: 414, borderRadius: 20 }}
              />
            ) : (
              <Card.Img
                className="ratio ratio-3x2"
                src={data.thumbnailImage}
                style={{
                  ...(thumbnailHeight
                    ? {
                        height: thumbnailHeight,
                        objectFit: "cover",
                        overflow: "hidden",
                      }
                    : {}),
                }}
              />
            )}
          </>
        )}
        <Card.Body
          className={!hasThumbnail ? "pt-0" : ""}
          style={{
            ...(thumbnailHeight
              ? {
                  flex: "1",
                }
              : {}),
          }}
        >
          <h6 className="wjh-news-card__category">
            {typeof data.category === "object"
              ? (data.category as any).title
              : data.category}
          </h6>
          <Card.Title
            className={`wjh-news-card__title ${
              hasThumbnail ? "text-truncate-4" : "text-truncate-2"
            }`}
          >
            <Link
              to={`${routeDefine.detail}/${data.slug}`}
              className="wjh-link"
            >
              {data.title}
            </Link>
          </Card.Title>
          <div className={hasThumbnail ? "wjh-news-card__content" : ""}>
            <Card.Text className="text-truncate-2 text-secondary">
              {data.shortDesc}
            </Card.Text>
            <div className="wjh-news-card__action">
              <Button
                className="primary-link text-white"
                href={`${routeDefine.detail}/${data.slug}`}
                type="primary"
              >
                Learn More &gt; &gt;
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsCard;
