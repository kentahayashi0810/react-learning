import { useUpdateTheme } from "../context/ThemeContext";

const Footer = () => {
  const [setTheme] = useUpdateTheme();
  return (
    <footer>
      <h1>フッター</h1>
    </footer>
  );
};

export default Footer;
