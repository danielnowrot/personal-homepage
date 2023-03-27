import { LoadingCase } from "./LoadingCase";
import { ErrorCase } from "./ErrorCase";
import { SuccessCase } from "./SuccessCase";

export const Content = ({ state, repositories }) => {
    switch (state) {
        case "initial":
            return null;
        case "loading":
            return <LoadingCase />;
        case "error":
            return <ErrorCase />;
        case "success":
            return <SuccessCase repositories={repositories} />;
        default:
            throw new Error(`incorrect state: ${state}`);
    };
};