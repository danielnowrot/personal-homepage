import {Container, Description, Link, LinkLabel, List, Tile, Title} from "./styled"

export const SuccessCase = ({ repositories }) => (
    <List>
        {repositories && repositories.map(({ id, name, description, homepage, html_url }) =>
        (
            <Tile key={id}>
                <Container>
                    <Title>
                        {(name[0].toUpperCase() + name.substring(1)).replaceAll("-", " ")}
                    </Title>
                    <Description>{description}</Description>
                    <LinkLabel>
                        Demo:{" "}
                        <Link href={homepage} target="_blank">{homepage}</Link>
                    </LinkLabel>
                    <LinkLabel>
                        Code:{" "}
                        <Link href={html_url} target="_blank">{html_url}</Link>
                    </LinkLabel>
                </Container>
            </Tile>
        )
        )}
    </List>
);