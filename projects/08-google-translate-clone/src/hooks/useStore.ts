import { AUTO_LANGUAGE } from '../constants';
import { type State, type Action, type Language, type FromLanguage } from '../types'
import { useReducer } from 'react';

// 1. Create a initial state
const initialState: State = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false
  }
  
  // 2. Create a reducer function
  function reducer (state: State, action: Action) {
    const { type } = action
  
    // Intercambiar idiomas
    if (type === 'INTERCHANGE_LANGUAGES'){
      if(state.fromLanguage === AUTO_LANGUAGE) return state
      
      const loading  = state.fromText === ''

      return {      
        ...state,
        loading: loading,
        result: '',
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }
    }
  
    if(type === 'SET_FROM_LANGUAGE'){
      if(state.fromLanguage === action.payload) return state
      const loading  = state.fromText === ''

      return {
        ...state,
        fromLanguage: action.payload,
        result: '',
        loading
      }
    }
  
    if(type === 'SET_TO_LANGUAGE'){
      return{
        ...state,
        toLanguage: action.payload,
        result: ''
      }
    }
  
    if(type === 'SET_FROM_TEXT'){
      return {
        ...state,
        loading: true,
        fromText: action.payload,
        result: ''
      }
    }
  
    if(type === 'SET_RESULT'){
      return {
        ...state,
        loading: false,
        result: action.payload
      }
    }
  
    // Siempre tiene q devolver un estado
    return state
  }
  

export function useStore () {
    const [ {fromLanguage, toLanguage, fromText, result, loading}, dispatch] = useReducer(reducer, initialState)

    //Funciones que envuelve el dispatch, para no tener que importar el dispatch en el componente
    const interchangeLanguages = () => dispatch({ type: 'INTERCHANGE_LANGUAGES' })
    const setFromLanguage = (payload: FromLanguage) => dispatch({ type: 'SET_FROM_LANGUAGE', payload})
    const setToLanguage = (payload: Language) => dispatch({ type: 'SET_TO_LANGUAGE', payload})
    const setFromText = (payload: string) => dispatch({ type: 'SET_FROM_TEXT', payload})
    const setResult = (payload: string) => dispatch({ type: 'SET_RESULT', payload})

    // No se devuelve directamente el dispatch, sino una función que lo envuelve
    return {fromLanguage, toLanguage, fromText, result, loading, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult}
}
