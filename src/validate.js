import Menu from './menu';

class Validate {
  static INVALID_ORDER =
    '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';
  static #INVALID_DATE =
    '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.';

  /** @param {string[]} input  */
  static menus(input) {
    /** @type {Menu[]} */
    const result = [];

    input.forEach(inputMenu => {
      const parseOrder = inputMenu.split('-');
      this.#validateParseOrderByHypen(parseOrder);
      const [menuName, orderCnt] = parseOrder;
      this.#validateIsDuplicate(menuName, result);
      const count = Number(orderCnt);
      this.#validateMoreThenOne(count);
      const menu = new Menu(menuName, count);
      result.push(menu);
    });
    // this.#validateMinimumTenThousand(result);
    this.#validateOnlyBeverage(result);
    this.#validateMaximumTwenty(result);
    return result;
  }
  /** @param {number} num  */
  static date(num) {
    if (isNaN(num) || num < 1 || num > 31) {
      throw new Error(this.#INVALID_DATE);
    }
    return num;
  }
  /** @param {string[]} parseOrder  */
  static #validateParseOrderByHypen(parseOrder) {
    if (parseOrder.length !== 2) {
      throw new Error(this.INVALID_ORDER);
    }
  }
  /** @param {number} count  */
  static #validateMoreThenOne(count) {
    if (isNaN(count) || count < 1) {
      throw new Error(this.INVALID_ORDER);
    }
  }
  /**
   *
   * @param {string} menuName
   * @param {Menu[]} result
   */
  static #validateIsDuplicate(menuName, result) {
    if (result.some(storedMenu => storedMenu.get().menuName === menuName)) {
      throw new Error(this.INVALID_ORDER);
    }
  }

  /** @param {Menu[]} orderList  */
  static #validateMinimumTenThousand(orderList) {
    if (
      orderList.reduce((total, menu) => total + menu.get().price, 0) < 10_000
    ) {
      throw new Error(this.INVALID_ORDER);
    }
  }

  /** @param {Menu[]} orderList  */
  static #validateOnlyBeverage(orderList) {
    const { appetizer, main, dessert } = Menu.getCountOfKeys(orderList);
    if (!appetizer && !main && !dessert) {
      throw new Error(this.INVALID_ORDER);
    }
  }

  /** @param {Menu[]} orderList  */
  static #validateMaximumTwenty(orderList) {
    if (orderList.reduce((total, menu) => total + menu.get().count, 0) > 20) {
      throw new Error(this.INVALID_ORDER);
    }
  }
}

export default Validate;
