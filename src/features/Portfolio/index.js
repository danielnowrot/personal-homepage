import { PortfolioIcon, Subtitle, Title, Wrapper } from "./styled";
import portfolioIcon from "./Shape.svg";
import { Content } from "./Content";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "./portfolioSlice";
import { useEffect } from "react";

const Portfolio = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch((fetchRepositories()));
    }, [dispatch]);

    return (
        <Wrapper>
            <PortfolioIcon src={portfolioIcon} alt=" " />
            <Title>Portfolio</Title>
            <Subtitle>My recent projects</Subtitle>
            <Content
                state={status}
                repositories={repositories}
            />
        </Wrapper>
    );
};

export default Portfolio;