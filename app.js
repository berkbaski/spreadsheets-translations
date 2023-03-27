const fs = require("fs");

require("dotenv").config();

const REQUEST_URL = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEET_ID}/values/${process.env.GOOGLE_SHEET_NAME}!${process.env.GOOGLE_RANGE}?key=${process.env.GOOGLE_API_KEY}`;

const LANGUAGES = {
  TR: "tr",
  EN: "en",
};

async function fetchData(url) {
  const response = await fetch(url, {
    method: "GET",
  });
  return response.json();
}

function saveTranslationFiles(translations) {
  fs.writeFileSync(
    process.env.EN_OUTPUT_PATH,
    JSON.stringify(translations.en, null, 2)
  );
  fs.writeFileSync(
    process.env.TR_OUTPUT_PATH,
    JSON.stringify(translations.tr, null, 2)
  );
}

async function fetchTranslations() {
  try {
    const data = await fetchData(REQUEST_URL);
    const rows = data.values;
    const translations = {
      tr: {},
      en: {},
    };

    if (rows.length) {
      rows.forEach((row) => {
        const parts = row[0].split(".");
        let objTr = translations.tr;
        let objEn = translations.en;

        for (let i = 0; i < parts.length; i++) {
          const part = parts[i];

          if (i === parts.length - 1) {
            if (row[1] === LANGUAGES.TR) {
              objTr[part] = row[2];
            } else {
              objEn[part] = row[2];
            }
          } else {
            objTr[part] = objTr[part] || {};
            objTr = objTr[part];

            objEn[part] = objEn[part] || {};
            objEn = objEn[part];
          }
        }
      });

      saveTranslationFiles(translations);
    } else {
      console.log("No data in the table.");
    }
  } catch (error) {
    console.error("An error has occurred. Details: ", error);
  }
}

fetchTranslations();
