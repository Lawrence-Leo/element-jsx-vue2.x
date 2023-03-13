// { props, data, slots }
const BaseTable = ({ props, data }) => {
  const { tableColumn } = props;
  return (
    <el-table
      {...data}
      style="width: 100%"
      size="mini"
      highlight-current-row
      how-overflow-tooltip
      stripe
      border
    >
      {tableColumn.map(item => {
        const { component, ...attrs } = item;
        const scopedSlots = {};
        if (component instanceof Function) {
          scopedSlots['default'] = scope => component(scope.row);
        }
        if (Object.prototype.toString.call(component) === '[object Object]') {
          const { header, default: defaultSlot } = component;
          scopedSlots['default'] =
            !!defaultSlot && (scope => defaultSlot(scope.row));
          scopedSlots['header'] = !!header && (scope => header(scope.column));
        }
        return <el-table-column {...{ attrs, scopedSlots }}> </el-table-column>;
      })}
    </el-table>
  );
};

BaseTable.props = {
  tableColumn: {
    type: Array,
    required: true,
    default: () => [],
  },
};
BaseTable.functional = true;
BaseTable.inheritAttrs = false;
BaseTable.name = 'BaseTable';

export default BaseTable;
