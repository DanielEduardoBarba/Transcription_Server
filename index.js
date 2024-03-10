
import pkg from '@google-cloud/translate'

const { Translate } = pkg.v2

const googleTranslate = new Translate()

async function transcribe(txt, trgt) {
    return new Promise(async (resolve, reject)=>{

        const [translation] = await googleTranslate.translate(txt, trgt);
        resolve(translation)
    })
}

// The text to translate
const text = '¡Claro! Aquí tienes una frase en español: "Hola, ¿cómo estás?"'

transcribe(text, 'en')
.then(response=>{

    console.log(`Text: ${text}`)
    console.log(`Translation: ${response}`)

})

