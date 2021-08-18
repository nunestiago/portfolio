import './App.scss';
import 'bootstrap';

import Emoji from 'a11y-react-emoji';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { About, Experience, Footer, Header, Skills } from './components';
import Projects from './components/Projects';

function App() {
  const { i18n } = useTranslation();
  const changeLanguageHandler = (lang: string | undefined): void => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='App'>
      <Header />
      <div className='col-md-12 mx-auto text-center language'>
        <div
          onClick={() => changeLanguageHandler('pt')}
          style={{ display: 'inline' }}
        >
          <Emoji
            symbol='🇧🇷'
            label='brazilian flag'
            style={{
              height: '100%',
              fontSize: 36,
              textAlign: 'center',
              marginRight: 24,
              cursor: 'pointer',
            }}
          />
        </div>
        <div
          onClick={() => changeLanguageHandler('en')}
          style={{ display: 'inline' }}
        >
          <Emoji
            symbol='🇺🇸'
            onClick={() => changeLanguageHandler('en')}
            label='sun'
            style={{
              height: '100%',
              fontSize: 36,
              textAlign: 'center',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
