import * as TypeGraphQL from "type-graphql";

export enum TrackScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  uid = "uid",
  name = "name",
  discNumber = "discNumber",
  durationMs = "durationMs",
  explicit = "explicit",
  popularity = "popularity",
  previewUrl = "previewUrl",
  trackNumber = "trackNumber",
  isLocal = "isLocal",
  albumId = "albumId"
}
TypeGraphQL.registerEnumType(TrackScalarFieldEnum, {
  name: "TrackScalarFieldEnum",
  description: undefined,
});
