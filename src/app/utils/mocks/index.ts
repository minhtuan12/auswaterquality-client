import { routeDefine } from "../../configs";

export const LIST_LANGUAGE = [
  { name: "English", countryCode: "en" },
  { name: "العربية", countryCode: "ar" },
  { name: "中文", countryCode: "zh" },
  { name: "Français", countryCode: "fr" },
  { name: "Español", countryCode: "es" },
];

export const HEADER_NAVIGATION: any = [
  {
    label: "Home",
    key: routeDefine.home,
  },
  {
    label: "Data Explorer",
    children: [
      {
        label: "Map Viewer",
        key: routeDefine.gisMapViewer,
      },
      {
        label: "Interactive Dashboards",
        key: routeDefine.interactiveDashboard,
      },
      {
        label: "Access to Data",
        key: routeDefine.accessData,
      },
    ],
  },
  {
    label: "Water Quality Guidelines",
    key: routeDefine.waterQualityGuidelines,
  },
  {
    label: "Research",
    key: routeDefine.research,
  },
  {
    label: "New and Events",
    key: routeDefine.newsAndEvents,
  },
  {
    key: "about",
    label: "About",
    children: [
      {
        label: "About ADWR",
        key: routeDefine.aboutADWR,
      },
      {
        label: "People",
        key: routeDefine.aboutPeople,
      },
    ],
  },
];

export const FOOTER_SOCIAL = [
  {
    key: "social-icon-facebook",
    imgUrl: "/images/social-icons/social-icon-facebook.svg",
    path: "https://www.facebook.com/WaterJusticeHub",
  },
  {
    key: "social-icon-linkedin",
    imgUrl: "/images/social-icons/social-icon-linkedin.svg",
    path: "https://www.linkedin.com/in/water-justice-hub-372bb61a8/",
  },
  {
    key: "social-icon-twitter",
    imgUrl: "/images/social-icons/social-icon-twitter.svg",
    path: "https://x.com/WaterJusticeHub",
  },
  {
    key: "social-icon-youtube",
    imgUrl: "/images/social-icons/social-icon-youtube.svg",
    path: "https://www.youtube.com/channel/UClfoolpymi_J702dYoCD2ag",
  },
  {
    key: "social-icon-email",
    imgUrl: "/images/social-icons/gmail.png",
    path: "mailto:admin@waterjusticehub.org",
  },
];
