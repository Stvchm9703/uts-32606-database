import * as TypeGraphQL from "type-graphql";

export enum CategoryScalarFieldEnum {
  id = "id",
  hashId = "hashId",
  name = "name",
  icon = "icon"
}
TypeGraphQL.registerEnumType(CategoryScalarFieldEnum, {
  name: "CategoryScalarFieldEnum",
  description: undefined,
});
