import { Title, Text, Button } from "./styled"
import { ReactComponent as Danger } from "./Danger.svg";

export const ErrorCase = () => (
    <>
        <Danger />
        <Title>Ooops! Somethink went wrong...</Title>
        <Text>
            Sorry, failed to load Github projects.<br></br>
            You can check them directly on Github.
        </Text>
        <a href="https://github.com/danielnowrot">
            <Button>Go to Github</Button>
        </a>

    </>
);