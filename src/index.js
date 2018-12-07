import React from 'react';
import ReactDOM from 'react-dom';
import QRScanner from './QRScanner';

ReactDOM.render(
    // eslint-disable-next-line no-alert
    <QRScanner handleExitBtn={() => alert('종료 버튼을 누르셨습니다.')} />, document.getElementById('root'),
);
