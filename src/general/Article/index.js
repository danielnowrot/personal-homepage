import { Title, Wrapper } from "./styled";

const Article = ({ title, content }) => (
    <Wrapper>
        <Title>
            {title}
        </Title>
        <div>
           {content}
        </div>
    </Wrapper>
);

export default Article;