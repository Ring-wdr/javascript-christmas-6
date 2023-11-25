import { Console } from '@woowacourse/mission-utils';
import Validate from './validate';

const InputView = {
  initiate() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },
  async readDate() {
    while (true) {
      try {
        const input = await Console.readLineAsync(
          '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
        );
        const num = Number(input);
        return Validate.date(num);
      } catch (e) {
        Console.print(e.message);
      }
    }
    // ...
  },
  async readOrder() {
    let limit = 3;
    while (true) {
      try {
        if (!limit--) {
          Console.print('limit break');
          return;
        }
        const input = await Console.readLineAsync(
          '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
        );
        const splitedInput = input.split(',').map(menu => menu.trim());
        return Validate.menus(splitedInput);
      } catch (e) {
        Console.print(e.message);
      }
    }
  },
  // ...
};

export default InputView;
