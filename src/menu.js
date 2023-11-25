/**
 * @typedef MenuType
 * @property {string} name
 * @property {number} price
 */

import Validate from './validate';

class Menu {
  #menuName;
  #price;
  #category;
  #count;

  /**
   * @param {string} menuName
   * @param {number} count
   */
  constructor(menuName, count) {
    const { category, price } = Menu.getCategoryAndPrice(menuName);
    this.#menuName = menuName;
    this.#count = count;
    this.#category = category;
    this.#price = price;
  }

  get() {
    return {
      menuName: this.#menuName,
      price: this.#price,
      category: this.#category,
      count: this.#count,
    };
  }

  /**
   * 존재하는 메뉴인지 알려주는 메서드
   * @param {string} menuName
   */
  static getCategoryAndPrice(menuName) {
    const entries = Object.entries(this.list);
    for (const [category, list] of entries) {
      const foundMenu = list.find(({ name }) => name === menuName);
      if (foundMenu) {
        return { category, price: foundMenu.price };
      }
    }
    throw new Error(Validate.INVALID_ORDER);
  }

  /** @satisfies {Record<string, MenuType[] >} */
  static list = Object.freeze({
    appetizer: [
      {
        name: '양송이수프',
        price: 6_000,
      },
      {
        name: '타파스',
        price: 5_500,
      },
      {
        name: '시저샐러드',
        price: 8_000,
      },
    ],
    main: [
      {
        name: '티본스테이크',
        price: 55_000,
      },
      {
        name: '바비큐립',
        price: 54_000,
      },
      {
        name: '해산물파스타',
        price: 35_000,
      },
      {
        name: '크리스마스파스타',
        price: 25_000,
      },
    ],
    dessert: [
      {
        name: '초코케이크',
        price: 15_000,
      },
      {
        name: '아이스크림',
        price: 5_000,
      },
    ],
    beverage: [
      {
        name: '제로콜라',
        price: 3_000,
      },
      {
        name: '레드와인',
        price: 60_000,
      },
      {
        name: '샴페인',
        price: 25_000,
      },
    ],
  });
  /**
   * 주문에 각 종류별 몇 개씩 있는지 반환하는 메서드
   * @param {Menu[]} orderList
   */
  static getCountOfKeys(orderList) {
    const listEntries = Object.entries(this.list);
    return orderList.reduce((acc, order) => {
      for (const [key, list] of listEntries) {
        if (list.some(({ name }) => name === order.get().menuName)) {
          return { ...acc, [key]: acc[key] ? acc[key] + 1 : 1 };
        }
      }
      return acc;
    }, {});
  }
}

export default Menu;
