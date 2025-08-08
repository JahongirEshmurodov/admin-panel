import {
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  EditProps,
} from "react-admin";
import { FC } from "react";

const PostEdit: FC<EditProps> = (props) => (
  <Edit {...props} title="Edit Post">
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="id" disabled /> {/* ID odatda o‘zgartirilmaydi */}
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);

export default PostEdit;
