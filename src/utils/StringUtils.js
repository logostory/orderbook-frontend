const StringUtils = {};

// 숫자를 천 단위로 , 찍음
StringUtils.formatPrice = price => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default StringUtils;
