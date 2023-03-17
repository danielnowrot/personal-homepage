import photo from "../myPhoto.JPG";
import messageButton from "../msgButton.svg";
import { Photo, Wrapper, Paragraph, PreTitle, Content, Title, MessageButton, Link, Button } from "./styled";
import { ThemeSwitcher } from "./ThemeSwitcher";

const PageHeader = () => (
    <Wrapper>
        <Photo src={photo} alt="Daniel Nowrot" />
        <Content>
            <ThemeSwitcher/>
            <PreTitle>THIS IS</PreTitle>
            <Title>Daniel Nowrot</Title>
            <Paragraph>
                💼🆕 I'm a starting front end developer.
                I'm looking for a job where I can improve my skills and acquire completely new ones.
            </Paragraph>
            <Link href="mailTo: daniel.nowrot@gmail.com">
                <Button>
                    <MessageButton src={messageButton} alt="" />
                    Hire Me
                </Button>
            </Link>
        </Content>
    </Wrapper>
);

export default PageHeader;