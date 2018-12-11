/**
 * 마지막이 숫자가 아닌(공백) 숫자 3개씩 끊어서 연결한 값에서 앞이 숫자인 값을 찾아 기억하는 표현식
 * 123456789
 * 123 456 789
 * 123앞은 숫자가 아니므로 다음
 * 456앞은 3이 숫자이므로 3이 $1로 저장
 * 다음 789 앞 6이 숫자이므로 $1로 저장
 */
const regPrice = /(\d)(?=(\d{3})+(?!\d))/g;
// eslint-disable-next-line import/prefer-default-export
export const priceFormat = _that => (String(_that).replace(regPrice, '$1,'));
