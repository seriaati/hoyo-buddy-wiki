# Hoyo Buddy Wiki

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

Translators! Please access your language directories in `i18n\[Your_Lang]`.

Please submit your translate docs using pull request. Folder structure:

```
i18n/
    [your_lang]/
        docusaurus-plugin-content-docs/current/
            [Your translated Markdown files]
```

You can copy other languages as a template.

### Installation

Start installation with the command below

```
$ npm install
```

### Local Development

Once finished, start local dev to see preview

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server. Please note that localhost index page is always redirect to Hoyo Buddy Homepage. To access the docs, visit:

```
localhost:3000/docs/intro
```

To add other languages, open [docusaurus.config.js](./docusaurus.config.js) and update the following:

```javascript
localeConfigs: {
    en: {
      label: '[Language Name]',
      direction: 'ltr', // ltr = Left to Right
      htmlLang: 'en', // htmlLang uses ISO 639-1 Language Codes
      calendar: 'gregorian',
      path: 'en', // Please name your path the same as the Language Codes
    }
}
```

To change the Language Codes, visit [this link](https://www.w3schools.com/tags/ref_language_codes.asp)

If you test with other languages, local dev command per lang is this:

```
npm run start -- --locale [Your Lang]
```

Local Dev Link is:

```
localhost:3000/[Your Lang]/docs/intro
```

### Build

```
$ npm build
```

This command generates static content into the `build` directory with all the existing and newly added language and can be served using any static contents hosting service.

Once built, run this command and see if the site is showing correctly.

```
npm run serve
```

If nothing went wrong, you can now make a pull request to add the new language.

### Deployment

Once finished, please create a pull request to deploy the Wiki