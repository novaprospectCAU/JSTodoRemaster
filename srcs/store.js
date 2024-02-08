/**
 * 배열을 저장하는 상위 개체
 */
export class Store {
  items = [];
  /** "all, active, completed" */
  currentFilter = "all"; //옵션
}
