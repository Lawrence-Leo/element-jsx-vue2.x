// 文本按钮
export const TextButton = ({ data, slots }) => (
  <el-button type="text" {...data}>
    {slots()['default'][0]}
  </el-button>
);
// 编辑按钮
export const EditButton = ({ data }) => (
  <el-button type="text" icon="el-icon-edit" {...data}>
    编辑
  </el-button>
);
// 删除按钮
export const DeleteButton = ({ data }) => (
  <el-button type="text" icon="el-icon-delete" {...data}>
    删除
  </el-button>
);
// 复制按钮
export const CopyButton = ({ data }) => (
  <el-button type="text" icon="el-icon-copy-document" {...data}>
    复制
  </el-button>
);
// 导出按钮
export const ExportButton = ({ data }) => (
  <el-button type="primary" icon="el-icon-download" {...data}>
    导出
  </el-button>
);
// 导入按钮
export const ImportButton = ({ data }) => (
  <el-button type="primary" icon="el-icon-upload" {...data}>
    导入
  </el-button>
);
