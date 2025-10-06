import moment from "moment";
import { Link } from "react-router-dom";
import { routeDefine } from "../../configs";
import { NewsType } from "../../types";

type Props = {
  data: NewsType;
};

const NewsCarouselBanner = ({ data }: Props) => {
  const { slug, title, thumbnailImage, category, createdAt } = data;
  return (
    <div className="wjh-research__carousel">
      <div className="wjh-research__carousel-overlay"></div>
      <div className="wjh-research__carousel-card">
        <div className="wjh-research__carousel-content">
          <span className="wjh-research__carousel-content-category">
            {typeof category === "object" ? (category as any).title : category}
          </span>
          <h5>
            <Link to={`${routeDefine.detail}/${slug}`} className="primary-link">
              {title}
            </Link>
          </h5>
          <span>{moment(createdAt).format("MMMM DD, yyyy")}</span>
        </div>
      </div>
      <img src={thumbnailImage} alt="" className="wjh-research__carousel-img" />
    </div>
  );
};

export default NewsCarouselBanner;
