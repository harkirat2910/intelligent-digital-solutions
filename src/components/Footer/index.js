import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

const Footer = ({ t }) => {
  const handleChange = (language) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }) => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={src}>
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>{t("Do you have any question? Feel free to reach out.")}</Para>
              <a href="mailto:l.qqbadze@gmail.com">
                <Chat>{t("Let's Chat")}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Language>{t("Address")}</Language>
              <Para>Rancho Santa Margarita</Para>
              <Para>2131 Elk Street</Para>
              <Para>California</Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
