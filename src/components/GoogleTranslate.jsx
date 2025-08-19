import { useEffect } from "react";
//import "./GoogleTranslate.css";

const GoogleTranslate = () => {
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            { pageLanguage: "en", includedLanguages: "en,fr,es,zh-CN"},
            "google_translate_element"
          );
        }
      };

      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        display: "block",
        textAlign: "center",
        margin: "10px auto",
        zIndex: 9999,
      }}
    ></div>
  );
};

export default GoogleTranslate;
