import { NotFound } from "../../components";
import { routeAdminDefine } from "../../configs";

const PageNotFound = () => {
  return (
    <div>
      <NotFound homePageUrl={routeAdminDefine.dashboard} />
    </div>
  );
};

export default PageNotFound;
