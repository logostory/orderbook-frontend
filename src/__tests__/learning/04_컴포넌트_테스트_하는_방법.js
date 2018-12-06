import { shallow } from 'enzyme';
import React from 'react';
import TestComp from '../../learning/components/TestComp';

describe('TestComp 테스트', () => {
    it('TestComp를 렌더링하면 div여야 한다.', () => {
        const shallowWrapper = shallow(<TestComp />);
        expect(shallowWrapper.type()).toBe('div');
        expect(shallowWrapper).toMatchSnapshot();
    });
    it('테스트 케이스 정의 2', () => {

    });
});
