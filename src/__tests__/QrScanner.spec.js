import { shallow, mount } from 'enzyme';
import React from 'react';
import QrReader from 'react-qr-reader';
import QRScanner from '../QRScanner';

describe('QR 스캐너 컴포넌트를 구현한다.', () => {
    it('왼쪽 최상단에 닫기 버튼이 있다.', () => {
        const wrapper = mount(<QRScanner />);

        // 존재를 확인
        expect(wrapper.exists('#exitBtn')).toEqual(true);

        // 내용을 확인
        const exitBtn = wrapper.find('#exitBtn');
        expect(exitBtn.text()).toEqual('X');

        // 위치를 확인
        const exitBtnNode = exitBtn.getDOMNode();
        expect(exitBtnNode).toHaveStyle('position: absolute');
        expect(exitBtnNode).toHaveStyle('top: 10px');
        expect(exitBtnNode).toHaveStyle('left: 10px');
    });

    it('[학습테스트] jest.fn()이 function이어야 한다.', () => {
        const onExitBtnClick = jest.fn();
        expect(onExitBtnClick).toEqual(expect.any(Function));
    });

    it('닫기 버튼을 누르면 컴포넌트의 종료 콜백이 호출된다.', () => {
        const onExitBtnClick = jest.fn();
        const wrapper = shallow(<QRScanner handleExitBtn={onExitBtnClick} />);
        const exitBtn = wrapper.find('#exitBtn');
        exitBtn.simulate('click');
        expect(onExitBtnClick).toHaveBeenCalledTimes(1);
    });

    it('화면 상단에 정사각형 영역이 있다.', () => {
        const wrapper = shallow(<QRScanner />);
        expect(wrapper.exists('#top-square')).toEqual(true);
    });

    describe('화면 상단의 정사각형 영역에 카메라 화면을 표시한다.', () => {
        window.Worker = class {};
        window.URL.createObjectURL = f => f;
        navigator.mediaDevices = {
            getSupportedConstraints: {},
        };
        it('<QrReader> 컴포넌트가 렌더링되면 카메라 화면이 나온 것으로 생각한다.', () => {
            const wrapper = shallow(<QRScanner />);
            expect(wrapper.find(QrReader).exists()).toEqual(true);
        });

        it('<QrReader> 컴포넌트의 크기 또한 360x360이어야 한다.', () => {
            const wrapper = shallow(<QRScanner />);
            expect(wrapper.find(QrReader).prop('style')).toEqual({ width: 360, height: 360 });
        });

        it('<QrReader> 컴포넌트는 정사각형 내에 있어야 한다.', () => {
            const wrapper = shallow(<QRScanner />);
            expect(wrapper.find('#top-square').find(QrReader).exists()).toEqual(true);
        });
    });

    it('상단 정사각형은 크기가 360x360이어야 한다.', () => {
        const wrapper = mount(<QRScanner />);

        // 반드시 mount에서만 됨
        const domNode = wrapper.find('#top-square').getDOMNode();

        expect(domNode).toHaveStyle('height:360px'); // js-dom 사용
        expect(domNode).toHaveStyle('width:360px'); // js-dom 사용
    });

    it('상단 정사각형은 테두리가 검은색으로 있어야 한다.', () => {
        const wrapper = mount(<QRScanner />);
        const domNode = wrapper.find('#top-square').getDOMNode();
        expect(domNode).toHaveStyle('border: 1px solid black');
    });

    it('상단 정사각형은 중앙에 있으며 위/아래 30px 정도의 간격이 있어야 한다.', () => {
        const wrapper = mount(<QRScanner />);
        const qrRootNode = wrapper.find('#qr-scanner-root').getDOMNode();
        expect(qrRootNode).toHaveStyle('padding-top: 30px');

        const domNode = wrapper.find('#top-square').getDOMNode();

        expect(domNode).toHaveStyle('margin: 30px auto 30px auto');
    });

    it('화면 하단에 챠콜 바탕으로 직사각형 영역이 있다.', () => {
        const wrapper = mount(<QRScanner />);
        const domNode = wrapper.find('#footer').getDOMNode();

        expect(domNode).toHaveStyle('background-color: #464646');
        expect(domNode).toHaveStyle('width: 100%');
        expect(domNode).toHaveStyle('height: 360px');
    });

    it('Footer의 중앙 최상단에는 "앉은 테이블에 있는 QR 코드를 촬영해 주세요."라는 텍스트가 위치한다.', () => {
        const wrapper = mount(<QRScanner />);
        const textNode = wrapper.find('#helper-text');
        expect(textNode.text()).toEqual('앉은 테이블에 있는 QR 코드를 촬영해 주세요');

        // 텍스트는 footer 내에 있어야 한다.
        expect(wrapper.find('#footer #helper-text').exists()).toEqual(true);

        const textDomNode = textNode.getDOMNode();
        expect(textDomNode).toHaveStyle('text-align: center');
        expect(textDomNode).toHaveStyle('padding-top: 20px');
        expect(textDomNode).toHaveStyle('color: white');
    });

    describe('텍스트 바로 아래에 원형의 흰색 버튼이 위치한다.', () => {
        it('버튼의 크기는 50x50이어야 한다.', () => {
            const wrapper = mount(<QRScanner />);
            const pictureBtn = wrapper.find('#picture-btn');
            const pictureBtnDomNode = pictureBtn.getDOMNode();
            expect(pictureBtnDomNode).toHaveStyle('height: 50');
            expect(pictureBtnDomNode).toHaveStyle('width: 50');
        });

        it('버튼의 배경색은 #FFFFFF이어야 한다.', () => {
            const wrapper = mount(<QRScanner />);
            const pictureBtn = wrapper.find('#picture-btn');
            const pictureBtnDomNode = pictureBtn.getDOMNode();
            expect(pictureBtnDomNode).toHaveStyle('background-color: #FFFFFF');
        });

        it('버튼은 원형이어야 한다.', () => {
            const wrapper = mount(<QRScanner />);
            const pictureBtn = wrapper.find('#picture-btn');
            const pictureBtnDomNode = pictureBtn.getDOMNode();
            expect(pictureBtnDomNode).toHaveStyle('border-radius: 50%');
        });

        it('버튼은 텍스트 바로 아래에 있어야 한다.', () => {
            const wrapper = mount(<QRScanner />);
            const footer = wrapper.find('#footer');
            const pictureBtn = wrapper.find('#picture-btn');

            // 텍스트는 footer 내에 있어야 한다.
            expect(wrapper.exists('#footer #picture-btn')).toEqual(true);

            // 텍스트 바로 아래에 있어야 한다.
            // 텍스트가 0번째 자식이므로, picture는 바로 그 아래여야 한다.
            expect(footer.childAt(1)).toEqual(pictureBtn);

            // 텍스트가 0번째 자식인지도 확인한다.
            expect(wrapper.find('#helper-text')).toEqual(footer.childAt(0));
        });

        it('버튼은 중앙에 있어야 한다.', () => {
            const wrapper = mount(<QRScanner />);
            const pictureBtn = wrapper.find('#picture-btn');
            const pictureBtnDomNode = pictureBtn.getDOMNode();
            expect(pictureBtnDomNode).toHaveStyle('display: block');
            expect(pictureBtnDomNode).toHaveStyle('margin: 0 auto');
        });
    });

    describe('버튼을 누르면 QR 코드를 인식한다.', () => {
        window.alert = jest.fn(); // mocking for implementation purpose

        it('QRScanner는 handleScan 메소드를 가져야 한다.', () => {
            const wrapper = mount(<QRScanner />);

            // onScanCallback이 있는지 확인
            // 이렇게 instance()를 해야 check가능한진 의문
            expect(wrapper.instance().handleScan).toEqual(expect.any(Function));
        });

        it('<QrReader> 컴포넌트는 onScan으로 handleScan을 받아야 한다.', () => {
            const wrapper = mount(<QRScanner />);
            const { handleScan } = wrapper.instance(); // handleScan 가져옴

            expect(wrapper.find(QrReader).prop('onScan')).toEqual(handleScan);
        });

        it('onScan 콜백은 empty 값이면 state에 저장하면 안 된다.', () => {
            const wrapper = mount(<QRScanner />);
            const { handleScan } = wrapper.instance(); // handleScan 가져옴

            handleScan('');

            expect(wrapper.state('inputVal')).toBe('');
        });

        it('onScan 콜백은 empty 값이 아니면 state에 저장해야 한다.', () => {
            const wrapper = mount(<QRScanner />);
            const { handleScan } = wrapper.instance(); // handleScan 가져옴

            const inputVal = 'some kind of value';
            handleScan(inputVal);

            expect(wrapper.state('inputVal')).toBe(inputVal);
        });

        describe('버튼을 누르면 QR 코드를 인식한다.', () => {
            it('버튼을 누르면 작동하는 handleCaptureBtn이 있어야 한다.', () => {
                const wrapper = mount(<QRScanner />);
                const { handleCaptureBtn } = wrapper.instance();

                // onClick으로 받아야 한다.
                expect(wrapper.find('#picture-btn').prop('onClick')).toEqual(handleCaptureBtn);
            });

            it('handleCaptureBtn은 호출 시 state에 저장한 QR 코드 값이 empty이면 alert를 띄우지 않는다.', () => {
                const wrapper = mount(<QRScanner />);
                const { handleCaptureBtn } = wrapper.instance();

                handleCaptureBtn();

                expect(window.alert).not.toHaveBeenCalled();
            });

            it('handleCaptureBtn은 호출 시 state에 저장한 QR 코드 값이 empty가 아니면 alert로 띄워야 한다.', () => {
                const wrapper = mount(<QRScanner />);
                const { handleCaptureBtn, handleScan } = wrapper.instance();

                const inputVal = 'some kind of value';

                handleScan(inputVal);
                handleCaptureBtn();

                expect(window.alert).toHaveBeenCalledWith(inputVal);
            });
        });
    });

    // ----추가SPEC----

    it('배경은 회색이어야 한다.', () => {
        const wrapper = mount(<QRScanner />);
        expect(wrapper.find('#qr-scanner-root').getDOMNode()).toHaveStyle('background-color: #cccccc');
    });
});
