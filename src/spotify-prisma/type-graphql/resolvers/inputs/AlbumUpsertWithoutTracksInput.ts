import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumCreateWithoutTracksInput } from "../inputs/AlbumCreateWithoutTracksInput";
import { AlbumUpdateWithoutTracksInput } from "../inputs/AlbumUpdateWithoutTracksInput";

@TypeGraphQL.InputType("AlbumUpsertWithoutTracksInput", {
  isAbstract: true
})
export class AlbumUpsertWithoutTracksInput {
  @TypeGraphQL.Field(_type => AlbumUpdateWithoutTracksInput, {
    nullable: false
  })
  update!: AlbumUpdateWithoutTracksInput;

  @TypeGraphQL.Field(_type => AlbumCreateWithoutTracksInput, {
    nullable: false
  })
  create!: AlbumCreateWithoutTracksInput;
}
