import logo from "./logo.svg";
import "./App.css";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useTranslation, Trans } from "react-i18next";

const fileName = "src\\App.js";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LanguageSwitcher />
        <h1>{t("title", { ns: "welcome" })}</h1>
        <p>
          <Trans i18nKey="description.text">
            <code>{{ fileName }}</code>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("description.reactLink")}
            </a>
          </Trans>
        </p>
      </header>
    </div>
  );
}

export default App;
