import { CohereClient } from "cohere-ai";
import { franc } from "franc-min";
import { SUPPORTED_LANGUAGES } from "../constants";
import { FromLanguage, Language } from "../types";

const cohere = new CohereClient({
    token:  import.meta.env.VITE_API_KEY_COHERE
})

export async function translate ({fromLanguage, toLanguage, text}: {fromLanguage: FromLanguage, toLanguage: Language, text: string}){
    const fromCode = fromLanguage === 'auto' ? franc(text) : SUPPORTED_LANGUAGES[fromLanguage]
    const toCode = SUPPORTED_LANGUAGES[toLanguage]

    const response = await cohere.chat({
        message: `Translate from this language: ${fromCode} to this other language: ${toCode}. This text: ${text}. It is important that you do not answer me, just translate the text` ,
    })

    console.log("Respuesta en traslate", response)

    return response.chatHistory?.[1]?.message
} 

