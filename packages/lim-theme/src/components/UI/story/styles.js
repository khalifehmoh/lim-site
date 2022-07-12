import { styled } from "frontity";

const StyledStory = styled.div`
    img {
        width: 100%;
        height: auto;
        aspect-ratio: attr(width)/attr(height);
    }
`;

export default StyledStory;
