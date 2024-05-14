import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap';
import './App.css';
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGE } from './constants';
import { ArrowsIcon } from './components/icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d'

function App() {
  // 3. Use useReducer hook
  const {   
    fromLanguage,
    toLanguage,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
  } = useStore()

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
              <Form.Control as='textarea' rows={3} placeholder='Texto a traducir' autoFocus style={{ height: '150px' }} />
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
            <Form.Control as='textarea' rows={3} placeholder='Texto traducido' readOnly style={{ height: '150px' }} />
          </Stack>
        </Col>
      </Row>
    </Container>
  )

}

export default App
