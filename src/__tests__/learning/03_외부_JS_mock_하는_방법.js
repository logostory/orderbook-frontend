// Mock을 사용하는 Calculator로 import 변경
import Calculator from '../../learning/modules/CalculatorUsingMock';

// default로 function을 바로 내보내면 mock이 안 됨 (read-only)
import DependencyOfCalculator from '../../learning/modules/DependencyOfCalculator';

describe('Calculator 스펙 정의', () => {
    it('덧셈이 가능해야 한다', () => {
        // STEP 1: 의존성을 mock함
        DependencyOfCalculator.add = jest.fn(() => 1); // 항상 1을 반환하도록 구현

        // STEP 2: sum을 호출
        expect(Calculator.sum(1, 1)).toBe(1 + 1);

        // STEP 3: mock이 호출되었는지 검증
        expect(DependencyOfCalculator.add).toHaveBeenCalledTimes(1);
    });
});
