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
  Button,
  Edit,
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
      <FunctionField
        label="Ariza raqami"
        render={(record: any) => record?.appeal?.id || "N/A"}
      />

      {/* Nested appeal.contract_number maydoni */}
      <FunctionField
        label="Shartnoma raqami"
        render={(record: any) => record?.appeal?.contract_number || "N/A"}
      />
      <TextField label="Korxona nomi" source="contragent_name" />

      <TextField label="Turi" source="device_type" />
      <Button label="Biriktirilgan" color="#030349ff"></Button>

      {/* Nested appeal.created_at maydoni */}
      {/* Edit tugmasi */}
      <EditButton label="Qiyoslash" />
    </Datagrid>
  </List>
);

export default PostList;
