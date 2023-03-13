// { props, data, slots }
const BaseForm = ({ props, data }) => {
  const { formItems } = props;
  return (
    <el-form {...data} labelWidth="100px" size="mini">
      {formItems.map(item => {
        const { component, ...attrs } = item;
        return <el-form-item {...{ attrs }}>{component}</el-form-item>;
      })}
    </el-form>
  );
};

BaseForm.props = {
  formItems: {
    type: Array,
    required: true,
    default: () => [],
  },
};
BaseForm.functional = true
BaseForm.inheritAttrs = false;
BaseForm.name = 'BaseForm';

export default BaseForm;
