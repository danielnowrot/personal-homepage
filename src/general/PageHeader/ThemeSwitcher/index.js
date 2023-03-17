import { ButtonText, IconContainer, ThemeButton, ThemeIconBackground } from "./styled";
import { ReactComponent as Sun } from "./Sun.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectMode, toggleMode } from "../../../features/PersonalInfo/themeSwitchSlice";


export const ThemeSwitcher = () => {
    const darkModeOff = useSelector(selectMode);
    const dispatch = useDispatch();

    return (
        <ThemeButton onClick={() => dispatch(toggleMode())}>
            <ButtonText >
                DARK MODE {darkModeOff ? "ON" : "OFF"}
            </ButtonText>
            <IconContainer>
                <ThemeIconBackground darkModeOff={!darkModeOff}><Sun /></ThemeIconBackground>
            </IconContainer>
        </ThemeButton>
    );
};