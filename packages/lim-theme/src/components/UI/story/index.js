import { Card } from "react-bootstrap";
import Link from "@frontity/components/link";
import StyledStory from "./styles";

const Story = ({ data }) => {
  return (
    <StyledStory className="story" key={data.id}>
      <Link link={data.link}>
        <Card>
          <Card.Img variant="top" src={data.image} />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </StyledStory>
  );
};

export default Story;
