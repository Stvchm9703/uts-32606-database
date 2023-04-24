import * as TypeGraphQL from "type-graphql";

export enum TagScalarFieldEnum {
  id = "id",
  code = "code",
  type = "type",
  name = "name"
}
TypeGraphQL.registerEnumType(TagScalarFieldEnum, {
  name: "TagScalarFieldEnum",
  description: undefined,
});
