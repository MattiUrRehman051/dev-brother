import React from "react";
import { Card, Typography, Flex, Row, Col } from "antd";
import {
  CameraOutlined,
  CodepenOutlined,
  DribbbleOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const CardsPractise = () => {
  return (
    <>
      <div className="container">
        <Row
          gutter={[24, 24]}
          justify={"center"}
          align={"center"}
          style={{ width: "100%" }}
        >
          <Col xs={24} sm={24} md={8} lg={7} xl={7}>
            <Card className="card-design card-one ripple-btn">
              <div className="card-icon-one">
                <CameraOutlined className="icon-size"/>
              </div>
            </Card>
          </Col>

          <Col xs={24} sm={24} md={8} lg={7} xl={7}>
            <Card className="card-design card-two">
              <div className="icon">
                <CodepenOutlined align="center" />
              </div>
            </Card>
          </Col>

          <Col xs={24} sm={24} md={8} lg={7} xl={7}>
            <Card className="card-design card-three">
              <div className="card-icon-three">
                <DribbbleOutlined className="icon-size"/>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CardsPractise;
