import { useState } from "react";

const phrases = new Map([
  ["english", "Happy Birthday"],
  ["german", "Alles Gute zum Geburtstag"],
  ["spanish", "Feliz Cumpleaños"],
  ["japanese", "誕生日おめでとう！"],
]);

function BirthdayTranslator() {
  //++++++++++++++++++++++Original++++++++++++++++++++++++++++++++
  //   const [currentLanguage, setCurrentLanguage] = useState("english");
  //   const [phrase, setPhrase] = useState(phrases.get("english"));

  //   const handleChangeLanguage = (lang) => {
  //     setCurrentLanguage(lang);
  //     setPhrase(phrases.get(lang));
  //   };

  //   return (
  //     <div className="BirthdayTranslator componentBox">
  //       <h3>
  //         {phrase}! ({currentLanguage})
  //       </h3>
  //       <button onClick={() => handleChangeLanguage("english")}>English</button>
  //       <button onClick={() => handleChangeLanguage("german")}>German</button>
  //       <button onClick={() => handleChangeLanguage("spanish")}>Spanish</button>
  //     </div>
  //   );

  // ++++++++++Better way for this case as those 2 states are+++++++++++++
  //   const [currentPhrase, setCurrentPhrase] = useState({
  //     lang: "english",
  //     phrase: "Happy Birthday",
  //   });
  //   const handleChangeLanguage = (newlang) => {
  //     setCurrentPhrase({ lang: newlang, phrase: phrases.get(newlang) });
  //   };
  //   return (
  //     <div className="BirthdayTranslator componentBox">
  //       <h3>
  //         {currentPhrase.phrase}! ({currentPhrase.lang})
  //       </h3>
  //       <button onClick={() => handleChangeLanguage("english")}>English</button>
  //       <button onClick={() => handleChangeLanguage("german")}>German</button>
  //       <button onClick={() => handleChangeLanguage("spanish")}>Spanish</button>
  //       <button onClick={() => handleChangeLanguage("japanese")}>Japanese</button>
  //     </div>
  //   );

  // ++++++++++Even Better By Removing Unnecessary state+++++++++++++
  const [currentLanguage, setCurrentLanguage] = useState("english");
  const handleChangeLanguage = (newlang) => {
    setCurrentLanguage(newlang);
  };
  return (
    <div className="BirthdayTranslator componentBox">
      <h3>
        {phrases.get(currentLanguage)}! ({currentLanguage})
      </h3>
      <button onClick={() => handleChangeLanguage("english")}>English</button>
      <button onClick={() => handleChangeLanguage("german")}>German</button>
      <button onClick={() => handleChangeLanguage("spanish")}>Spanish</button>
      <button onClick={() => handleChangeLanguage("japanese")}>Japanese</button>
    </div>
  );
}
// Add this to BirthdayTranslator.jsx and render it in App.jsx
// ++ Add support for another language!

export default BirthdayTranslator;
