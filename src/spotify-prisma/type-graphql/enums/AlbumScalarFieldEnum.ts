import * as TypeGraphQL from "type-graphql";

export enum AlbumScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  uid = "uid",
  albumType = "albumType",
  totalTracks = "totalTracks",
  name = "name",
  releaseDate = "releaseDate",
  releaseDatePrecision = "releaseDatePrecision",
  albumGroup = "albumGroup",
  copyrights = "copyrights",
  imageUrl = "imageUrl"
}
TypeGraphQL.registerEnumType(AlbumScalarFieldEnum, {
  name: "AlbumScalarFieldEnum",
  description: undefined,
});
