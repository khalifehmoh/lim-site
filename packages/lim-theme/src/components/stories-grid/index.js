import { Container, Row, Col } from "react-bootstrap";
import Story from "../UI/story";

const StoriesGrid = ({ state, items }) => {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {items.map((item, index) => {
          const post = state.source[item.type][item.id];
          return (
            <Col key={index}>
              <Story data={post} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default StoriesGrid;
