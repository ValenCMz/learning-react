import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import './App.css';
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGE } from './constants';
import { ArrowsIcon, CopyIcon, AudioIcon } from './components/icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea';
import { useEffect } from 'react';
import { translate } from './services/translate';
import { useDebounce } from './hooks/useDebounce';

function App() {
  // 3. Use useReducer hook
  const {   
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useStore()

  const debounceFromText = useDebounce(fromText)

  useEffect(() => {
    if(debounceFromText === '') return
    translate({fromLanguage, toLanguage, text: debounceFromText})
      .then(result => {
        if(result === null) return
        setResult(result as string) // Add type assertion here
      })
      .catch(error => {
        console.log(error)
      })
      
  }, [debounceFromText, fromLanguage, toLanguage])

  const handleCopy = () => {
    navigator.clipboard.writeText(result).catch(()=>{})
  }

  const handleAudio = () => {
    const audio = new SpeechSynthesisUtterance(result)
    speechSynthesis.speak(audio)
  }

  return (
    <Container fluid>
      <Row>
          <Col xs='auto'>
            <Stack  gap={2}>

              <LanguageSelector 
                type = {SectionType.From}
                value = {fromLanguage}
                onchange = {setFromLanguage} 
              />
              <TextArea 
                type = {SectionType.From}
                value= {fromText}
                onChange={setFromText}
              />
            </Stack>

          </Col>

          <Col xs='auto'>
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
              <ArrowsIcon></ArrowsIcon>
            </Button>
          </Col>

          <Col>
          <Stack  gap={2}>
              <LanguageSelector
                type = {SectionType.To}
                value={toLanguage}
                onchange={setToLanguage}
              />
              <div style={{position: 'relative'}}>
                <TextArea 
                  loading = {loading}
                  type = {SectionType.To}
                  value= {result}
                  onChange={setResult}
                />
                <Button variant='link' style={{position:'absolute', left:0, bottom: 0}} onClick={handleCopy}>
                  <CopyIcon></CopyIcon>
                </Button>
                <Button variant='link' style={{position:'absolute', right:0, bottom: 0}} onClick={handleAudio}>
                  <AudioIcon></AudioIcon>
                </Button>
              </div>
            </Stack>
          </Col>
      </Row>
    </Container>
  )
}

export default App
