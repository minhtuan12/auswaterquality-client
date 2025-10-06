import { Home_Banner } from "../../assets/images";
import { useConfiguration } from "../../contexts";
import "./styles.css";

type Props = {
  bannerUrl?: string;
  title?: string;
  description?: string;
  isVideo?: boolean;
};

const HomeBanner = ({ bannerUrl, isVideo, title, description }: Props) => {
  const { configurations } = useConfiguration();
  const { banner } = configurations.data;

  return (
    <div className="wjh-home__banner">
      {isVideo ? (
        <video
          className="wjh-home__banner-video"
          loop
          autoPlay
          muted
          playsInline
          preload="auto"
        >
          <source src={bannerUrl ?? "/videos/BannerVideo.mp4"} />
        </video>
      ) : (
        <img
          src={bannerUrl ?? Home_Banner}
          alt=""
          className="wjh-home__banner-img"
        />
      )}
      <div className="wjh-home__banner-ribbon">
        <h5>
          {banner?.fields?.bannerTitle?.value ??
            title ??
            "Australian Drinking Water Record"}
        </h5>
        <p>
          {banner?.fields?.bannerSubTitle?.value ??
            description ??
            "Empowering decisions with data and research infrastructure for water justice"}
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
