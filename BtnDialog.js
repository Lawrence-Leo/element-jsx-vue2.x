import BaseDialog from './BaseDialog';

const BtnDialog = {
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
          <BaseDialog
            visible={this.visible}
            close={() => (this.visible = !this.visible)}
            append-to-body={true}
            {...{ attrs: this.$attrs }}
          >
            {this.defaultSlot}
          </BaseDialog>
        )}
        {this.btnSlot}
      </div>
    );
  },
};

BtnDialog.name = 'BtnDialog';
BtnDialog.inheritAttrs = false;

export default BtnDialog;
