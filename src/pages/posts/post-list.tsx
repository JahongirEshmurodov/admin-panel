import {
  List,
  DataTable,
  ReferenceField,
  EditButton,
  TextInput,
  ReferenceInput,
  SelectInput,
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
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="title" label="Post Title" />
      <DataTable.Col
        label="Excerpt"
        render={(record) => `${record.body.substring(0, 50)}...`}
      />
      <DataTable.Col source="userId" label="User">
        <ReferenceField source="userId" reference="users" />
      </DataTable.Col>
      <DataTable.Col>
        <EditButton />
      </DataTable.Col>
    </DataTable>
  </List>
);

export default PostList;
