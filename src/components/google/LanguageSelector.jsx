import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronUp } from "react-icons/fa6";

const languages = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
  { code: "de", label: "DE" },
  { code: "zh-CN", label: "CH" },
];

const LanguageSelector = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Google Translate setup
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.querySelector("#google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,es,de,zh-CN",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();

    const hideGoogleToolbar = () => {
      const interval = setInterval(() => {
        document.querySelector(".goog-te-banner-frame")?.remove();
        document.querySelector("body").style.top = "0px";
        document.querySelector(".goog-te-gadget")?.style.setProperty("display", "none", "important");
        document.querySelector(".goog-tooltip")?.remove();
        document.querySelector(".goog-tooltip-text")?.remove();
        document.querySelector(".goog-te-balloon-frame")?.remove();
      }, 500);

      setTimeout(() => clearInterval(interval), 5000);
    };

    hideGoogleToolbar();
  }, []);

  const handleLanguageChange = (langCode) => {
    setSelectedLang(langCode);
    setDropdownOpen(false);

    const selectElement = document.querySelector(".goog-te-combo");
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event("change"));

      setTimeout(() => {
        document.querySelector(".goog-te-banner-frame")?.remove();
      }, 1000);
    }
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative notranslate">
      {/* Trigger */}
      <div
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="p-2  text-[#1a1a1a] cursor-pointer select-none w-16 text-center flex items-center justify-between"
      >
        {languages.find((lang) => lang.code === selectedLang)?.label}
        {
          dropdownOpen ? <FaChevronUp className={"text-[#1a1a1a] text-[12px]"}/>:<FaChevronDown className={"text-[#1a1a1a] text-[12px]"}/> 
        }
      </div>

      {/* Custom dropdown */}
      {dropdownOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg w-20 z-50">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="p-2 text-center text-gray-800 hover:bg-gray-200 cursor-pointer"
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}

      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden"></div>

      {/* CSS to suppress Translate bar */}
      <style>
        {`
          .goog-te-banner-frame { display: none !important; }
          body { top: 0px !important; }
          .goog-tooltip,
          .goog-tooltip-text,
          .goog-te-balloon-frame { display: none !important; }
          .goog-te-gadget { display: none !important; }
        `}
      </style>
    </div>
  );
};

export default LanguageSelector;
