import { Button } from "antd";
import { NewsType } from "../../types";
import { Link } from "react-router-dom";
import { routeDefine } from "../../configs";
import "./styles.css";

type Props = {
  data: NewsType;
  orientation: "ltr" | "rtl";
};

const HighlightCard = ({ data, orientation = "ltr" }: Props) => {
  const hasYoutubeUrl = !!data?.meta?.youtubeUrl;
  return (
    <div className="wjh-link">
      <div className="wjh-highlight-card">
        <div
          className={`wjh-highlight-card__thumbnail ${
            orientation === "ltr"
              ? "wjh-highlight-card__thumbnail-ltr"
              : "wjh-highlight-card__thumbnail-rtl"
          }`}
        >
          {hasYoutubeUrl ? (
            <iframe
              title={data.title}
              src={data?.meta?.youtubeUrl}
              style={{ width: 400, height: 212, borderRadius: 20 }}
            />
          ) : (
            <img src={data.thumbnailImage} alt="" />
          )}
        </div>

        <div className="wjh-highlight-card__content">
          <span className="wjh-highlight-card__category">
            {typeof data.category === "object"
              ? (data.category as any).title
              : data.category}
          </span>
          <h5 className="wjh-highlight-card__title">
            <Link
              to={`${routeDefine.detail}/${data.slug}`}
              className="wjh-link"
            >
              {data.title}
            </Link>
          </h5>
          <p className="wjh-highlight-card__desc">{data.shortDesc}</p>
          <div
            className={`${
              orientation === "ltr"
                ? "wjh-highlight-card__actions-ltr"
                : "wjh-highlight-card__actions-rtl"
            }`}
          >
            <Button
              className="primary-link text-white"
              // size="small"
              href={`${routeDefine.detail}/${data.slug}`}
              type="primary"
            >
              Learn More &gt; &gt;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
