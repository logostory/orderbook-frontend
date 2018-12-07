import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

const styles = {
    root: {
        backgroundColor: '#cccccc',
        paddingTop: 30,
    },
    topSquare: {
        height: 360,
        width: 360,
        border: '1px solid black',
        margin: '30px auto 30px auto',
    },
    exitBtn: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    footer: {
        backgroundColor: '#464646',
        width: '100%',
        height: 360,
    },
    helperText: {
        textAlign: 'center',
        paddingTop: 20,
        color: 'white',
    },
    pictureBtn: {
        backgroundColor: '#FFFFFF',
        height: 50,
        width: 50,
        borderRadius: '50%',
        display: 'block',
        margin: '0 auto',
    },
};

class QRScanner extends Component {
    constructor() {
        super();
        this.state = {
            inputVal: '',
        };
    }

    handleScan = (inputVal) => {
        if (inputVal === '') return;
        this.setState({ inputVal });
    }

    handleCaptureBtn = () => {
        const { inputVal } = this.state;

        if (inputVal === '') return;

        // eslint-disable-next-line no-alert
        alert(inputVal);
    }

    render() {
        const { handleExitBtn } = this.props;

        return (
            <div id="qr-scanner-root" style={styles.root}>
                <div id="top-square" style={styles.topSquare}>
                    <QrReader
                        onError={f => f}
                        onScan={this.handleScan}
                        style={{ width: 360, height: 360 }}
                    />
                </div>
                <button type="button" id="exitBtn" onClick={handleExitBtn} style={styles.exitBtn}>X</button>
                <div id="footer" style={styles.footer}>
                    <div id="helper-text" style={styles.helperText}>앉은 테이블에 있는 QR 코드를 촬영해 주세요</div>
                    <button
                        type="button"
                        id="picture-btn"
                        style={styles.pictureBtn}
                        onClick={this.handleCaptureBtn}
                    />
                </div>
            </div>
        );
    }
}

export default QRScanner;
