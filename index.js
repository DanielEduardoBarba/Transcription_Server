
// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// const projectId = '';
// // Instantiates a client
// const translate = new Translate({projectId});
const translate = new Translate();
async function quickStart() {
  // The text to translate
  const text = '¡Claro! Aquí tienes una frase en español: "Hola, ¿cómo estás?"';

  // The target language
  const target = 'en'; // Translate to Spanish

  // Translates some text into Spanish
  const [translation] = await translate.translate(text, target);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);
}

quickStart();
