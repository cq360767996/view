import type { Board, ColumnConfig } from '@/typings';
import type { AlignType } from 'ant-design-vue/lib/vc-table/interface';

export const generateColumns = (columns: ColumnConfig[]) =>
  columns.map(item => {
    const align: AlignType = 'center';
    const result = {
      ...item,
      dataIndex: item.dataIndex || item.key,
      align,
    };

    return result;
  });

export const spliceItems = <T>(arr: T[], indexArr: number[]) => {
  const selectedItems = indexArr.map(index => arr[index]);
  selectedItems.forEach(item => {
    const index = arr.indexOf(item);
    arr.splice(index, 1);
  });
  return selectedItems;
};

export const judgeGroupDisabled = (board: Board) => {
  const { selected, data } = board;

  if (selected.length <= 1) return true;

  let counter = 0;
  selected.forEach(index => {
    if (!data[index]) return;
    const { group } = data[index];
    if (!group || group.length === 0) counter++;
  });

  return counter !== selected.length;
};

export const judgeCancelGroupDisabled = (board: Board) => {
  const { selected, data } = board;

  if (selected.length !== 1) return true;

  const { group } = data[selected[0]];

  return !group?.length;
};
