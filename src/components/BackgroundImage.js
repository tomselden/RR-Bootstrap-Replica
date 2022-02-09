import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import BackgroundImage from "../images/backGroundImage.jpg";

export default function Background() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Card
          style={{
            width: "1300px",
            minHeight: "428px",
            marginBottom: "50px",
            backgroundColor: "#DEEED6",
          }}
          className="text-black"
        >
          <div
            style={{
              top: "auto",
              width: "600px",
              marginBottom: "50px",
              marginTop: "75px",
            }}
          >
            <Card.Text
              style={{
                fontSize: "2.5em",
                fontWeight: "bold",
                alignContent: "center",
              }}
            >
              Order groceries for delivery <br /> or pickup today
            </Card.Text>
            <Card.Text style={{ fontSize: "1em" }}>
              Whatever you want from local stores, brought right to your door.
            </Card.Text>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Enter Address Here..."
                  style={{ textAlign: "center" }}
                />
              </Form.Group>
            </Form>
          </div>
        </Card>
      </div>
      <div>
        <img
          style={{
            height: "500px",
            width: "30%",
            right: "2px",
            transform: "rotate(180deg)",
            position: "absolute",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          src={BackgroundImage} alt="instacart background image"
          alt="Card image"
        />
      </div>
    </div>
  );
}
