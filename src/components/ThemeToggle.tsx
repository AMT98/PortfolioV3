import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLightMode } from "../redux/themeSlice";

const ThemeToggleButton: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector(
    (state: { theme: { theme: string } }) => state.theme.theme
  );

  const handleThemeChange = () => {
    if (theme === "dark") {
      dispatch(setLightMode());
    } else {
      dispatch(setDarkMode());
    }
  };

  return (
    <button
      onClick={handleThemeChange}
      className="hidden md:flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-smallTextColor hover:text-white ease-in duration-300"
    >
      <i className={`ri-${theme === "dark" ? "sun-line" : "moon-line"}`}></i>
    </button>
  );
};

export default ThemeToggleButton;
