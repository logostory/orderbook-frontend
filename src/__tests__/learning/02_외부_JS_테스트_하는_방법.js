import Calculator from '../../learning/modules/Calculator';

describe('Calculator 스펙 정의', () => {
    it('덧셈이 가능해야 한다', () => {
        expect(Calculator.sum).not.toBe(undefined);
        expect(1 + 1).toBe(Calculator.sum(1, 1));
    });
});
