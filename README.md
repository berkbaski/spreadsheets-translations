# Spreadsheets Translations
Translate Google Sheets Data to JSON

## Description
This project fetches data from a Google Sheets document and converts it to JSON format. The script reads the document from a specified range and generates two output files, one for Turkish and the other for English translations.

## Getting Started
To get started with this project, follow the instructions below:

## Prerequisites
- Node.js version 14 or later
- Google API key with access to the Google Sheets API
- Access to a Google Sheets document with the translation data

## Installation
1. Clone this repository to your local machine:
```bash
git clone https://github.com/berkbaski/spreadsheets-translations.git
```

2. Install the required dependencies:
```bash
cd spreadsheets-translations
npm install
```

3. Create a `.env` file in the root directory of the project with the following variables:
```makefile
GOOGLE_SHEET_ID=yourGoogleSheetId
GOOGLE_SHEET_NAME=yourGoogleSheetName
GOOGLE_RANGE=yourGoogleSheetRange
GOOGLE_API_KEY=yourGoogleApiKey
TR_OUTPUT_PATH=./translations/tr.json
EN_OUTPUT_PATH=./translations/en.json
```
Replace the values with your actual Google Sheets document ID, name, range, API key, and the paths to the output files.

4. Run the script:
```bash
npm start
```

## Example of Google Spread content
* | A | B | C
--- | --- | --- | ---
1 | Key | Language | Value
2 | hello_text |	tr |	Merhaba
3 | hello_text |	en |	Hello
4 | login_button_text |	tr |	Login
5 | login_button_text |	en |	Giriş Yap
6 | errors.login |	tr |	Kullanıcı adı veya şifre yanlış
7 | errors.login |	en |	Username or password is incorrect
8 | errors.general.required_field |	tr |	Zorunlu alan
9 | errors.general.required_field |	en |	Required field

## Usage
Once the script has run successfully, you can use the generated JSON files in your project to access the translated data. The Turkish translations are stored in `./translations/tr.json` and the English translations are stored in `./translations/en.json`.

## Contributing
If you'd like to contribute to this project, please fork the repository and make changes as you'd like. Pull requests are welcome!

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.