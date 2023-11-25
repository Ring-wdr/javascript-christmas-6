import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView';
import OutputView from './OutputView';

class App {
  async run() {
    // InputView.initiate();
    const date = await InputView.readDate();
    const menuList = await InputView.readOrder();
    if (!menuList) return;
    OutputView.printMenu(menuList);
    OutputView.printBeforeDiscount(menuList);
    [
      '<증정 메뉴>',
      '<혜택 내역>',
      '<총혜택 금액>',
      '<할인 후 예상 결제 금액>',
      '<12월 이벤트 배지>',
    ].forEach(Console.print);
  }
}

export default App;
