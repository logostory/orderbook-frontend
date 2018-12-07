# QR 코드 컴포넌트를 TDD로 구현해보자

## 최초 SPEC

* depth로 들어가는 요구사항들은 최초 요구사항에서 추상적인 설명에서 구현 가능한 요구사항으로 쪼갠 것들입니다.

* `<QrReader>` 컴포넌트는 카메라 화면을 어떻게 구현할까? 하다가 `instascan`을 사용하기로 했던 부분이고, 테스트도 `instascan`을 활용했습니다. (ex: QrReader 컴포넌트가 렌더링만 되면 카메라 화면은 보이는 것으로 가정)

* 반응형 CSS는 요구사항에 넣지 않아서 (haha) 구현하지 않았습니다.

1. 왼쪽 최상단에 닫기 버튼이 있다. (v)
    1. 최상단이려면 `position: 'absolute', top: 10, left: 10` 이어야 한다.
    2. 닫기 버튼의 내용은 `X`여야 한다.
2. 닫기 버튼을 누르면 컴포넌트가 종료된다.(= 클릭 이벤트 콜백이 호출된다.) (v)
3. 화면 상단에 정사각형으로 카메라 영역이 있다. (v)
    1. 화면 상단에 정사각형 영역이 있다. (이후 카메라 화면 표시) (v)
    2. 화면 상단의 정사각형 영역에 카메라 화면을 표시한다.
        1. `<QrReader>` 컴포넌트가 렌더링되면 카메라 화면이 나온 것으로 생각한다. (v)
            1. 문제점 1: Blob(Html5 File API), Worker(가 없으면 렌더링할 수 없음 (browser-specific)
                1. 아래의 소스로 해결함 (일종의 mock - 구현체 제공 용도로)
                    ```js
                    window.Worker = class {};
                    window.URL.createObjectURL = f => f;
                    navigator.mediaDevices = {
                        getSupportedConstraints: {},
                    };
                    ```
        2. `<QrReader>` 컴포넌트의 크기 또한 `360x360`이어야 한다. (v)
        3. `<QrReader>` 컴포넌트는 정사각형 내에 있어야 한다. (v)
    3. 상단 정사각형은 크기가 `360x360`이어야 한다. (v)
    4. 상단 정사각형은 테두리가 검은색으로 있어야 한다. (`border: 1px solid black`) (v)
    5. 상단 정사각형은 중앙에 있어야 하며 위/아래 30px 정도의 간격이 있어야 한다. (v)(`margin: 30px auto 30px auto`) (v)
4. 화면 하단에 챠콜 바탕으로 사각형 영역이 있다. (Footer) (v)
    1. `width: 100%, height: 360px, background-color: #464646`이어야 한다. (v)
5. Footer의 중앙 최상단에는 "앉은 테이블에 있는 QR 코드를 촬영해주세요."라는 텍스트가 위치한다.
    1. 텍스트는 Footer 내에 있어야 한다. (Footer의 자식이어야) (v)
    2. 중앙 정렬되어야 하며 (`text-align: center`), 위에서 20px 아래여야 한다. (`padding-top: 20px`) (v)
    3. text는 흰색이어야 한다. (`color: white`) (v)
6. (5)의 Text 바로 아래에 원형의 흰색 버튼이 위치한다.
    1. 버튼의 크기는 `50x50`이어야 한다. (v)
    2. 버튼의 배경색은 `#FFFFFF`이어야 한다. (v)
    3. 버튼은 원형이어야 한다. (`border-radius: 50%`) (v)
    4. 버튼은 텍스트 바로 아래에 있어야 한다. (v)
    5. 버튼은 중앙에 있어야 한다. (`display: block; margin: 0 auto`) (v)
7. [연구] (6)의 버튼을 누르면 화면이 저장된다(찍힌다).
    1. `<QrReader>` 컴포넌트는 카메라 화면이 띄워진 이후로 delay를 텀으로 계속해서 onScan 콜백을 호출한다. (qr 코드가 아니면 ''을 전달)
    2. 따라서 ''가 아닌 값이 전달되면 해당 값을 마지막 QR 코드로 보는 게 맞다.
    3. 버튼을 누르면 마지막 QR 코드 값을 alert로 띄우면 될 것 같다.
8. 버튼을 누르면 QR 코드를 인식한다. (v)
    1. QRScanner는 handleScan 메소드를 가져야 한다. (v)
    2. `<QrReader>` 컴포넌트는 onScan으로 handleScan을 받아야 한다. (v)
    3. handleScan은 '' 값이면 state에 저장하면 안 된다. (v)
    4. handleScan은 '' 값이 아니면 state에 저장해야 한다. (v)
    5. 버튼을 누르면 state에 저장한 QR 코드 값을 alert로 띄운다. (v)
        1. 버튼을 누르면 작동하는 handleCaptureBtn이 있어야 한다. (v)
        2. handleCaptureBtn은 호출 시 state에 저장한 QR 코드 값이 empty가 아니면 alert로 띄워야 한다. (v)
        3. handleCaptureBtn은 호출 시 state에 저장한 QR 코드 값이 empty이면 alert를 띄우지 않는다. (v)

## 추가 SPEC

1. 배경은 회색이어야 한다. (`background-color: #cccccc`) (v)

## QrScanner의 Container/Presentational 리팩토링

1. QrScanner가 처리하는 내부 로직 및 상태를 Container로 리팩토링한다.

2. Presentational은 QrReader를 렌더링하고, JSX 부분을 포함한다.

3. Presentational의 작동을 위해 모든 콜백을 Container에서 전달한다.

4. Container는 render에서 Presentational 컴포넌트만 그린다.
