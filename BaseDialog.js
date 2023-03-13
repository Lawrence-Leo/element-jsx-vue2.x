const BaseDialog = {
  data() {
    return {
      btnLoading: false,
      contentVNode: null,
    };
  },
  created() {
    const { default: defaultSlots } = this.$slots;
    const [contentVNode] = defaultSlots;
    this.contentVNode = contentVNode;
  },
  methods: {
    handleConfirm() {
      this.btnLoading = true;
      new Promise((resolve, reject) => this.confirm(resolve, reject))
        .then(() => {
          this.close();
        })
        .catch((e) => {
          this.$message({ type: 'error', message: e || '接口异常' });
        })
        .finally(() => (this.btnLoading = false));
    },
  },
  render() {
    return (
      <el-dialog
        visible={this.visible}
        title="提示"
        width="30%"
        onClose={() => this.close()}
        {...{ attrs: this.$attrs }}
      >
        {this.contentVNode}
        <div
          slot="footer"
          style="display:inline-block;width: 100%;text-align: right"
        >
          <el-button size="mini" onClick={() => this.close()}>
            取消
          </el-button>
          <el-button
            type="primary"
            size="mini"
            loading={this.btnLoading}
            onClick={() => this.handleConfirm()}
          >
            确定
          </el-button>
        </div>
      </el-dialog>
    );
  },
};
BaseDialog.props = {
  visible: {
    required: true,
    type: Boolean,
    default: false,
  },
  close: {
    type: Function,
    default: () => {},
  },
  confirm: {
    type: Function,
    default: () => {},
  },
};
BaseDialog.name = 'BaseDialog';
BaseDialog.inheritAttrs = false
export default BaseDialog;
