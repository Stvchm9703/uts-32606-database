import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  uid = "uid",
  name = "name",
  email = "email",
  authType = "authType",
  type = "type",
  country = "country",
  explicitContentFilterEnabled = "explicitContentFilterEnabled",
  explicitContentFilterLocked = "explicitContentFilterLocked",
  imagesId = "imagesId",
  product = "product"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
