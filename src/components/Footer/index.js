import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Para,
  Large,
  Chat,
  Language
} from "./styles";

const Footer = ({ t }) => {
  const handleChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Phone: +1-613-804-8000")}</Large>
              <Para>{t("Do you have any question? Feel free to reach out.")}</Para>
              <a href="mailto:aabbas@uottawa.ca">
                <Chat>{t("Let's Chat")}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Language>{t("Address")}</Language>
              <Para>12 Monet Crt. Ottawa</Para>
              <Para>Ontario, Canada</Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
