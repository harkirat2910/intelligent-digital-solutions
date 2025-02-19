import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const ContentBlock = ({ icon, title, content, section, button, t, id, direction }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow justify="space-between" align="middle" id={id} direction={direction}>
          {icon && 
          <Col lg={11} md={11} sm={12} xs={24} style={{paddingBottom:'30px'}}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>}
          <Col>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {direction === "right" ? (
                <ContentWrapper>
                <ButtonWrapper>
                  {Array.isArray(button) &&
                    button.map((item, id) => (
                      <Button key={id} color={item.color} onClick={() => scrollTo("about")}>
                        {t(item.title)}
                      </Button>
                    ))}
                </ButtonWrapper>
                </ContentWrapper>
              ) : (
                <ServiceWrapper>
                  <Row style={{maxWidth:"none", width: "100%"}}>
                    {Array.isArray(section) &&
                      section.map((item, id) => (
                        <Col key={id} span={6} style={{paddingRight:'30px', paddingTop:'20px'}}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      ))}
                  </Row>
                </ServiceWrapper>
              )}
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
