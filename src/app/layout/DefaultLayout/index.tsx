import { useState } from "react";
import { Button, Drawer, Grid, Menu } from "antd";
import { Container } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Main_Logo } from "../../assets/images";
import { GoogleSearchInput, IntroductionModal } from "../../components";
import { FOOTER_SOCIAL, HEADER_NAVIGATION } from "../../utils/mocks";
import { APP_TITLE } from "../../utils/consts";
import DefaultNavBar from "./Navbar";
import MainFooter from "./Footer";
import { ContextModalProvider, useContextModal } from "../../contexts";
import "./styles.css";

const { useBreakpoint } = Grid;

const ContactUsEmail = ({ item }: { item: (typeof FOOTER_SOCIAL)[0] }) => {
  const { contactUs } = useContextModal();
  return (
    <li className="list-inline-item">
      <Link
        to={"/"}
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          e.preventDefault();
          contactUs.open();
        }}
      >
        <img
          src={item.imgUrl}
          title={item.key}
          data-displaymode="Original"
          alt={item.key}
        />
      </Link>
    </li>
  );
};

const DefaultLayout = () => {
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(false);
  const screens = useBreakpoint();
  const isMobile = (screens.xs || screens.sm) && !screens.md;

  const onToggleSidebar = () => {
    setOpenSidebar((pre) => !pre);
  };

  return (
    <ContextModalProvider>
      <div>
        {isMobile && (
          <Drawer
            open={openSidebar}
            styles={{ body: { padding: 0 } }}
            onClose={onToggleSidebar}
          >
            <Menu
              inlineIndent={16}
              mode="inline"
              items={HEADER_NAVIGATION}
              style={{ width: screens.lg ? 208 : isMobile ? "100%" : 80 }}
              inlineCollapsed={isMobile ? false : !screens.lg}
              onClick={(e) => {
                navigate(e.key);
                onToggleSidebar();
              }}
            />
          </Drawer>
        )}
        <IntroductionModal />
        <header className="wjh-header">
          <Container>
            <div className="wjh-header-wrapper">
              {isMobile && (
                <Button
                  icon={<i className="bi bi-list"></i>}
                  onClick={() => {
                    setOpenSidebar((pre) => !pre);
                  }}
                />
              )}

              <Link to="/">
                <img
                  src={Main_Logo}
                  title={APP_TITLE}
                  data-displaymode="Original"
                  alt={APP_TITLE}
                  className="wjh-header__left-logo"
                />
              </Link>
              <div></div>
              {!isMobile && (
                <div className="wjh-header__right">
                  <div className="wjh-header__actions">
                    <ul className="wjh-footer__social-list">
                      {FOOTER_SOCIAL.map((item) => {
                        if (item.key === "social-icon-email") {
                          return <ContactUsEmail key={item.key} item={item} />;
                        }
                        return (
                          <li key={item.key} className="list-inline-item">
                            <Link
                              to={item.path}
                              title={item.key}
                              target="_blank"
                            >
                              <img
                                src={item.imgUrl}
                                title={item.key}
                                data-displaymode="Original"
                                alt={item.key}
                              />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <GoogleSearchInput />
                  </div>
                  <DefaultNavBar />
                </div>
              )}
            </div>
          </Container>
        </header>
        <div className="wjh-main">
          <Outlet />
        </div>
        <MainFooter />
      </div>
    </ContextModalProvider>
  );
};

export default DefaultLayout;
