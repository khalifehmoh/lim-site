import { Card } from "react-bootstrap";
import Link from "@frontity/components/link"

const Story = ({ data }) => {
    return (
        <div className='story' key={data.id}>
            <Link link={data.link}>
                <Card>
                    <Card.Img variant="top" src={data.image} />
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Link >
        </div>
    )
}

export default Story;