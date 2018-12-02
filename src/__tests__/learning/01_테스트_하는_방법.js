/*
    Jest로 Test Suite를 먼저 생성

    Test Suite는 describe 함수로 생성

    describe(테스트스위트명, 테스트대상함수)
*/
describe('테스트 스위트 정의 1', () => {
    /*
        Jest로 Test Case를 생성

        Test Case도 Test Suite처럼 똑같은 매개변수를 받음

        it(테스트케이스명, 테스트대상함수)
    */
    test('테스트 케이스 정의 1', () => {
        /*
            expect는 단언(assert)이라고 해서 특정 값을 비교해 조건을 만족해야 테스트를 통과시킨다.
            1 + 1 = 2여야 테스트가 통과한다.
        */
        expect(1 + 1).toBe(2);
    });
    test('테스트 케이스 정의 2', () => {

    });
});
