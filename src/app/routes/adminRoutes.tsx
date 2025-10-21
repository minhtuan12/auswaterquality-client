import { routeAdminDefine } from "../configs";
import {
  NewsList,
  NewsCreate,
  NewsEdit,
  EventsList,
  EventsCreate,
  EventsEdit,
  ResearchList,
  ResearchCreate,
  ResearchEdit,
  UserListPage,
  UserCreatePage,
  PageNotFound,
  TextsPage,
  PeoplePage,
  RoleListPage,
} from "../pages/admin";

export const adminRoutes = [
  {
    path: routeAdminDefine.dashboard,
    element: <div>Dashboard</div>,
  },
  {
    path: routeAdminDefine.newsList,
    element: <NewsList />,
  },
  {
    path: routeAdminDefine.newsCreate,
    element: <NewsCreate />,
  },
  {
    path: routeAdminDefine.newsEdit,
    element: <NewsEdit />,
  },
  {
    path: routeAdminDefine.eventsList,
    element: <EventsList />,
  },
  {
    path: routeAdminDefine.eventsCreate,
    element: <EventsCreate />,
  },
  {
    path: routeAdminDefine.eventsEdit,
    element: <EventsEdit />,
  },
  {
    path: routeAdminDefine.researchList,
    element: <ResearchList />,
  },
  {
    path: routeAdminDefine.researchCreate,
    element: <ResearchCreate />,
  },
  {
    path: routeAdminDefine.researchEdit,
    element: <ResearchEdit />,
  },
  {
    path: routeAdminDefine.userList,
    element: <UserListPage />,
  },
  {
    path: routeAdminDefine.userCreate,
    element: <UserCreatePage />,
  },
  {
    path: routeAdminDefine.role,
    element: <RoleListPage />,
  },
  {
    path: routeAdminDefine.configuration,
    element: <TextsPage />,
  },
  {
    path: routeAdminDefine.peoples,
    element: <PeoplePage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
