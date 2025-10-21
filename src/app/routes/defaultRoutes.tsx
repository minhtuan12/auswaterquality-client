import { routeDefine } from "../configs";
import {
  HomePage,
  NewsPage,
  NewsDetailPage,
  ResearchPage,
  GuidelinesPage,
  AboutADWRPage,
  AboutPeoplePage,
  GISMapViewerPage,
  InteractiveDashboardPage,
  AccessDataPage,
  PrivacyCopyrightPage,
} from "../pages";
import PageNotFound from "../pages/PageNotFound";
import UnderConstructorPage from "../pages/UnderConstructorPage";

export const defaultRoutes = [
  {
    path: routeDefine.home,
    element: <HomePage />,
  },
  {
    path: routeDefine.newsAndEvents,
    element: <NewsPage />,
  },
  {
    path: routeDefine.detail + "/:id",
    element: <NewsDetailPage />,
  },
  {
    path: routeDefine.research,
    element: <ResearchPage />,
  },
  {
    path: routeDefine.waterQualityGuidelines,
    element: <GuidelinesPage />,
  },
  {
    path: routeDefine.aboutADWR,
    element: <AboutADWRPage />,
  },
  {
    path: routeDefine.aboutPeople,
    element: <AboutPeoplePage />,
  },
  {
    path: routeDefine.gisMapViewer,
    element: <GISMapViewerPage />,
  },
  {
    path: routeDefine.interactiveDashboard,
    element: <InteractiveDashboardPage />,
  },
  {
    path: routeDefine.accessData,
    element: <AccessDataPage />,
  },
  {
    path: routeDefine.privacyCopyrightDisclaimer,
    element: <PrivacyCopyrightPage />,
  },
  {
    path: routeDefine.underConstructor,
    element: <UnderConstructorPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
