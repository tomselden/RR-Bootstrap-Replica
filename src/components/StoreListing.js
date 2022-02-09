import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Aldi from "../images/aldi.png"
import Sprouts from "../images/Sprouts.png"
import Heb from "../images/heb.png"


export default function StoreListings() {
  return (
    <div style={{ margin: "auto" }}>
      <h2
        style={{
          fontSize: "36px",
          lineHeight: "50px",
          marginTop: "20px",
          textAlign: "center",
          fontWeight: "normal",
        }}
      >
        Browse Stores In New Jersey
      </h2>
      <Container style={{ marginTop: "50px", textAlign: "center" }}>
        <Row
          style={{
            borderBottom: "1px solid #E8E9EB",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Row>
            <Col xs=".5">
              <Image
                style={{
                  height: "55px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                }}
                src={Aldi}
                roundedCircle
              />
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h5 style={{ fontWeight: "bolder" }}>ALDI</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image
                style={{
                  height: "50px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                }}
                src={Sprouts}
                roundedCircle
              />
            </Col>
            <Col style={{ textAlign: "center" }}>
              <h5 style={{ fontWeight: "bolder" }}>Sprouts Market</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image
                style={{
                  height: "50px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                }}
                src={Heb}
                roundedCircle
              />
            </Col>
            <Col md="6">
              <h5 style={{ fontWeight: "bolder" }}>Heb Super Market</h5>
              <p>Delivery</p>
            </Col>
          </Row>
        </Row>

        <Row
          style={{
            borderBottom: "1px solid #E8E9EB",
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "40px",
          }}
        >
          <Row>
            <Col xs=".5">
              <Image
                style={{
                  height: "55px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                }}
                src={Sprouts}
                roundedCircle
              />
            </Col>
            <Col style={{ textAlign: "center" }}>
              <h5 style={{ fontWeight: "bolder" }}>Sprouts Market</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image
                style={{
                  height: "50px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                }}
                src={Heb}
                roundedCircle
              />
            </Col>
            <Col style={{ textAlign: "center" }}>
              <h5 style={{ fontWeight: "bolder" }}>Heb Super Market</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image
                style={{
                  height: "50px",
                  width: "50px",
                  border: "1px solid #E8E9EB",
                }}
                src={Aldi}
                roundedCircle
              />
            </Col>
            <Col md="6">
              <h5 style={{ fontWeight: "bolder" }}>ALDI</h5>
              <p>Delivery</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}
