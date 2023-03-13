const BaseTabs = {
  data() {
    return {
      activeName: '',
      nameMapComponent: {},
    };
  },
  created() {
    this.activeName = this.tabList?.[0]?.name || '';
    this.tabList?.forEach(
      item => (this.nameMapComponent[item.name] = item.component)
    );
  },
  render() {
    return (
      <div>
        <el-tabs v-model={this.activeName}>
          {this.tabList.map(item => {
            return <el-tab-pane {...{ attrs: item }}></el-tab-pane>;
          })}
        </el-tabs>
        <keep-alive>{this.nameMapComponent[this.activeName]?.()}</keep-alive>
      </div>
    );
  },
};

BaseTabs.props = {
  tabList: {
    required: true,
    type: Array,
  },
};

BaseTabs.name = 'BaseTabs';

export default BaseTabs;
