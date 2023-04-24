import * as TypeGraphQL from "type-graphql";

export enum ArtistScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  uid = "uid",
  name = "name",
  popularity = "popularity",
  imageUrl = "imageUrl"
}
TypeGraphQL.registerEnumType(ArtistScalarFieldEnum, {
  name: "ArtistScalarFieldEnum",
  description: undefined,
});
