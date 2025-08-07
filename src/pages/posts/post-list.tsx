import {
  List,
  DataTable,
  ReferenceField,
  EditButton,
  TextInput,
  ReferenceInput,
  SelectInput,
  TextField,
  Datagrid,
  FunctionField,
} from "react-admin";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn key="search" />,
  <ReferenceInput
    source="userId"
    reference="users"
    label="User"
    key="user-filter"
  >
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

const PostList = () => (
  <List filters={postFilters} sort={{ field: "id", order: "ASC" }}>
    <Datagrid rowClick="edit">
      {/* ID maydoni */}
      <TextField source="id" />

      {/* Nested appeal.contract_number maydoni */}
      <FunctionField
        label="Contract Number"
        render={(record: any) => record?.appeal?.contract_number || "N/A"}
      />

      {/* Edit tugmasi */}
      <EditButton />
    </Datagrid>
  </List>
);

export default PostList;
