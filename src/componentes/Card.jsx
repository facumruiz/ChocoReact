import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function BasicExample() {
  return (
    <>
 
      <CardGroup
        style={{
          paddingLeft: 300,
          paddingRight: 300,
          padding: 150,
          color: "#5A423B",
          backgroundColor: "#3F2212",
        }}
      >
        <Card>
          <img
            alt="Sample"
            src="https://raw.githubusercontent.com/Uriel-27/Repository-IL.CIOCCOLATO/main/im%C3%A1genes/combo-rocklets-2021-05-02.jpeg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>$$$</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <img
            alt="Sample"
            src="https://raw.githubusercontent.com/Uriel-27/Repository-IL.CIOCCOLATO/main/im%C3%A1genes/combo-rocklets-2021-05-02.jpeg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>$$$</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <img
            alt="Sample"
            src="https://raw.githubusercontent.com/Uriel-27/Repository-IL.CIOCCOLATO/main/im%C3%A1genes/combo-rocklets-2021-05-02.jpeg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>$$$</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <img
            alt="Sample"
            src="https://raw.githubusercontent.com/Uriel-27/Repository-IL.CIOCCOLATO/main/im%C3%A1genes/combo-rocklets-2021-05-02.jpeg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>$$$</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default BasicExample;
