import { Console } from '@woowacourse/mission-utils';
import Menu from './menu';

const OutputView = {
  /** @param {Menu[]} menuList  */
  printMenu(menuList) {
    Console.print('<주문 메뉴>');
    menuList.forEach(menu => {
      const { menuName, count } = menu.get();
      Console.print(`${menuName} ${count}개`);
    });
    // ...
  },
  /** @param {Menu[]} menuList  */
  printBeforeDiscount(menuList) {
    Console.print('<할인 전 총주문 금액>');
    const totalAmt = menuList
      .reduce((amt, menu) => amt + menu.get().price, 0)
      .toLocaleString();
    Console.print(`${totalAmt}원`);
  },
  // ...
};

export default OutputView;
