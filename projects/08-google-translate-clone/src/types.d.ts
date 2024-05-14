import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from './constants'

// Con keyof se obtiene el tipo de las claves de un objeto
export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = keyof typeof AUTO_LANGUAGE
export type FromLanguage = Language | 'auto'

// Esta es la definición de los tipos de datos que se van a utilizar en la aplicación
export interface State  {
    fromLanguage: FromLanguage,
    toLanguage: Language,
    fromText: string,
    result: string,
    loading: boolean
}

// Esta es la definición de las acciones que se pueden realizar en la aplicación
// Algunos pueden tener un payload que es la información que se necesita para realizar la acción
export type Action = 
    | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
    | { type: 'INTERCHANGE_LANGUAGES' }
    | { type: 'SET_TO_LANGUAGE', payload: Language }
    | { type: 'SET_FROM_TEXT', payload: string }
    | { type: 'SET_RESULT', payload: string }

export enum SectionType {
    From = 'from',
    To = 'to'
}