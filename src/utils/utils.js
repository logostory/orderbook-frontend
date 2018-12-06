/**
 * 숫자 3개씩 끊어서 마지막이 숫자가 아닌 앞의 3자리를 찾아서 기억하는 표현식
 * 123456789
 * 123 456 789
 * 123앞은 숫자가 아니므로 다음
 * 456앞은 3이 숫자이므로 3이 $1로 저장
 * 다음 789 앞 6이 숫자이므로 $1로 저장
 */
const regPrice = /(\d)(?=(\d{3})+(?!\d))/g;
export const priceFormat = (_that) => (String(_that).replace(regPrice, '$1,'));