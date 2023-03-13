const BaseDrawer = ({ props, data, slots }) => {
  const { visible, close } = props;
  const { default: defaultSlot } = slots();
  const [drawerContent] = defaultSlot;
  console.log('ddd', data);
  return (
    <el-drawer
      title="标题"
      visible={visible}
      direction="rtl"
      before-close={() => close()}
      {...{ attrs: data.attrs }}
    >
      {drawerContent}
    </el-drawer>
  );
};

BaseDrawer.props = {
  visible: {
    type: Boolean,
    default: false,
  },
  close: {
    type: Function,
    default: () => {},
  },
};
BaseDrawer.name = 'BaseDrawer';
BaseDrawer.inheritAttrs = false;
BaseDrawer.functional = true;

export default BaseDrawer;
