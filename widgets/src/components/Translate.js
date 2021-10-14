import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
    {
        label: 'afrikaans',
        value: 'af'
    },
    {
        label: 'arabic',
        value: 'ar'
    },
    {
        label: 'hindi',
        value: 'hi'
    },
    {
        label: 'italian',
        value: 'it'
    }
]

const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={e => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown label="Select a Language" selected={language} onSelectedChange={setLanguage} options={options}/>
            <hr />
            <h3 className="ui header">Translated</h3>
            <Convert text={text} language={language}/>
        </div>
    );
};

export default Translate;