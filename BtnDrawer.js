import BaseDrawer from './BaseDrawer';
import styles from './BtnDrawer.less'

const BtnDrawer = {
  data() {
    return {
      visible: false,
      btnSlot: null,
      defaultSlot: null,
    };
  },
  created() {
    const {
      default: [defaultSlot],
      button: [btnSlot],
    } = this.$slots;
    btnSlot.data.on = {
      click: () => (this.visible = !this.visible),
    };
    this.btnSlot = btnSlot;
    this.defaultSlot = defaultSlot;
  },
  render() {
    return (
      <div>
        {this.visible && (
          <BaseDrawer
            visible={this.visible}
            append-to-body={true}
            close={() => (this.visible = !this.visible)}
            {...{ attrs: this.$attrs }}
          >
            {this.defaultSlot}
          </BaseDrawer>
        )}
        {this.btnSlot}
      </div>
    );
  },
};

BtnDrawer.name = 'BtnDrawer';
BtnDrawer.inheritAttrs = false;

export default BtnDrawer;
