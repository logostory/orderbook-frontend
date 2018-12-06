import { shallow } from 'enzyme';
import React from 'react';
import QRScanner from '../QRScanner';

describe('QR 스캐너 컴포넌트를 구현한다.', () => {
    it('왼쪽 최상단에 닫기 버튼이 있다.', () => {
        const wrapper = shallow(<QRScanner />);
        expect(wrapper.exists('.exitBtn')).toEqual(true);
    });

    it('[학습테스트] jest.fn()이 function이어야 한다.', () => {
        const onExitBtnClick = jest.fn();
        expect(onExitBtnClick).toEqual(expect.any(Function));
    });

    it('닫기 버튼을 누르면 컴포넌트의 종료 콜백이 호출된다.', () => {
        const onExitBtnClick = jest.fn();
        const wrapper = shallow(<QRScanner onClick={onExitBtnClick} />);
        const exitBtn = wrapper.find('.exitBtn');
        exitBtn.simulate('click');
        expect(onExitBtnClick).toHaveBeenCalledTimes(1);
    });
});
