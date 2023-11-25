/**
 * @typedef  {Object} MenuProps
 * @property {string} name
 * @property {number} price
 */

/**
 * @typedef {MenuProps & {type: string}} MenuPropsWithType
 */

/** @type {Readonly<MenuProps[]>} */
const APPETIZER = Object.freeze([
  { name: '양송이수프', price: 6_000 },
  { name: '타파스', price: 5_500 },
  { name: '시저샐러드', price: 8_000 },
]);
/** @type {Readonly<MenuProps[]>} */
const MAIN = Object.freeze([
  { name: '티본스테이크', price: 55_000 },
  { name: '바비큐립', price: 54_000 },
  { name: '해산물파스타', price: 35_000 },
  { name: '크리스마스파스타', price: 25_000 },
]);
/** @type {Readonly<MenuProps[]>} */
const DESSERT = Object.freeze([
  { name: '초코케이크', price: 15_000 },
  { name: '아이스크림', price: 5_000 },
]);
/** @type {Readonly<MenuProps[]>} */
const BEVERAGE = Object.freeze([
  { name: '제로콜라', price: 3_000 },
  { name: '레드와인', price: 60_000 },
  { name: '샴페인', price: 25_000 },
]);

const LIST = Object.freeze([
  ...addTypeOnMenuList(APPETIZER, 'APPETIZER'),
  ...addTypeOnMenuList(MAIN, 'MAIN'),
  ...addTypeOnMenuList(DESSERT, 'DESSERT'),
  ...addTypeOnMenuList(BEVERAGE, 'BEVERAGE'),
]);

const MENU = Object.freeze({
  APPETIZER,
  MAIN,
  DESSERT,
  BEVERAGE,
  LIST,
});

export default MENU;

/**
 * @param {MenuProps[]} menuList
 * @param {string} type
 * @returns {MenuPropsWithType[]}
 */
function addTypeOnMenuList(menuList, type) {
  return menuList.map(menu => ({ ...menu, type }));
}
