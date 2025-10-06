import "./styles.css";

type Props = {
  title: string;
};

const HomeTitle = ({ title }: Props) => {
  return (
    <div className="wjh-home-title">
      <h3 className="wjh-home-title__text">{title}</h3>
    </div>
  );
};

export default HomeTitle;
