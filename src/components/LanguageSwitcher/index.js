import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
  es: { nativeName: "Spanish" },
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            cursor: i18n.resolvedLanguage === lng ? "auto" : "pointer",
            color: "black",
            margin: "0 4px",
          }}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
