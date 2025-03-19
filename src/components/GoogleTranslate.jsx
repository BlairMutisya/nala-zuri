import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // Prevent multiple script loads
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      };

      const addScript = document.createElement("script");
      addScript.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);
    }
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
