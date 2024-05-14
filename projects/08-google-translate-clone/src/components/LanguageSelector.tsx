import { Form } from "react-bootstrap"
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants"
import {type FC} from 'react'
import { FromLanguage, Language, SectionType } from "../types"

type Props = 
    | {type: SectionType.From, value: FromLanguage, onchange: (language: FromLanguage) => void}
    | {type: SectionType.To, value: Language, onchange: (language: Language) => void}

    export const LanguageSelector: FC<Props> = ( {type, value, onchange} ) => {
        const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            onchange(event.target.value as Language)
        }
        
        return (
            <Form.Select aria-label="Selecciona el idioma" onChange={handleChange} value={value}>
                {type === 'from' && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}

                {Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => (
                    <option key={key} value={key}>
                        {value}
                    </option>
                ))}
            </Form.Select>
        )
    }