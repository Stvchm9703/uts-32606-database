import * as TypeGraphQL from "type-graphql";

export enum PlaylistScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  uid = "uid",
  collaborative = "collaborative",
  description = "description",
  name = "name",
  "public" = "public",
  snapshotId = "snapshotId",
  primaryColor = "primaryColor",
  tracksIds = "tracksIds",
  ownerId = "ownerId",
  imagesId = "imagesId"
}
TypeGraphQL.registerEnumType(PlaylistScalarFieldEnum, {
  name: "PlaylistScalarFieldEnum",
  description: undefined,
});
