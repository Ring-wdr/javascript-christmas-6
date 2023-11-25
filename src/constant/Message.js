const GUIDE = Object.freeze({
  INTRO: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  WHEN_YOU_COME:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
  ORDER_MENU_AND_COUNT:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
  SHOW_PROMO_LIST: '12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
});

const TITLE = Object.freeze({
  ORDER_MENU: '주문 메뉴',
  AMOUNT_BEFORE_DISCOUNT: '할인 전 총주문 금액',
  GIFT_MENU: '증정 메뉴',
  PROMO_LIST: '혜택 내역',
  TOTAL_DISCOUNT: '총혜택 금액',
  AMOUNT_AFTER_DISCOUNT: '할인 후 예상 결제 금액',
  EVENT_BADGE: '12월 이벤트 배지',
});

const UNIT = Object.freeze({
  WON: '원',
  QTY: '개',
});

const DISCOUNT = Object.freeze({
  XMAS_DAY_DISCOUNT: '크리스마스 디데이 할인',
  WEEKDAY_DISCOUNT: '평일 할인',
  SPECIAL_DISCOUNT: '특별 할인',
  GIFT_EVENT: '증정 이벤트',
});

const BADGE = Object.freeze({
  STAR: '별',
  TREE: '트리',
  SANTA: '산타',
});

const MESSAGE = Object.freeze({
  GUIDE,
  TITLE,
  UNIT,
  DISCOUNT,
  BADGE,
});

export default MESSAGE;
