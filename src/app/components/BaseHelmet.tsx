import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import { APP_TITLE } from "../utils/consts";

type Props = {
  title?: string;
  desc?: string;
} & PropsWithChildren;

const BaseHelmet = ({ title, desc = APP_TITLE, children }: Props) => {
  return (
    <Helmet>
      <title>{title ? `${title} | ${APP_TITLE}` : APP_TITLE}</title>
      <meta name="description" content={desc} />
      {children}
    </Helmet>
  );
};

export default BaseHelmet;
