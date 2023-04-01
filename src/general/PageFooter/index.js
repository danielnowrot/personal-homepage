import { ReactComponent as Facebook } from "./Facebook_black.svg";
import { ReactComponent as Github } from "./Github_black.svg";
import { ReactComponent as Linkedin } from "./LinkedIN_black.svg";
import { Content, Link, MailToLink, PreTitle, Socials, Wrapper } from "./styled";

const PageFooter = () => (
    <Wrapper>
        <PreTitle>LET'S TALK</PreTitle>
        <MailToLink href="mailto:daniel.nowrot@gmail.com">
            daniel.nowrot@gmail.com
        </MailToLink>
        <Content>
            Hello, I am open to suggestions for cooperation and new knowledge in the frontend topic.<br />
            If you are looking for a person like me to join your team - feel free to contact me....👇
        </Content>
        <Socials>
            <Link href="https://github.com/danielnowrot">
                <Github />
            </Link>
            <Link href="https://www.facebook.com/daniel.nowrot">
                <Facebook />
            </Link>
            <Link href="https://www.linkedin.com/in/daniel-nowrot-159546b5/">
                <Linkedin />
            </Link>
        </Socials>
    </Wrapper>
);

export default PageFooter;