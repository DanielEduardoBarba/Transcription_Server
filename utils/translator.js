
import pkg from '@google-cloud/translate'

const { Translate } = pkg.v2

const googleTranslate = new Translate()

export async function translate(txt, trgt) {
    return new Promise(async (resolve, reject)=>{

        const [translation] = await googleTranslate.translate(txt, trgt) 
        resolve(translation)
    })
}
 


