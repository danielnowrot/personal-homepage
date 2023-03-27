import PageHeader from "../../general/PageHeader";
import Article from "../../general/Article";
import List from "../../general/Article/List";
import { skills } from "../../general/Article/List/skills";
import { skillsToLearn } from "../../general/Article/List/skillsToLearn";

const PersonalInfo = () => {
    return (
        <>
            <PageHeader />
            <Article
                title="My skillset includes 🛠️"
                content={List(skills)}
            >
            </Article>
            <Article
                title="What I want to learn next 🚀"
                content={List(skillsToLearn)}
            >
            </Article>
        </>
    );
};

export default PersonalInfo;