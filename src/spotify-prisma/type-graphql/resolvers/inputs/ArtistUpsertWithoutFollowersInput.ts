import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateWithoutFollowersInput } from "../inputs/ArtistCreateWithoutFollowersInput";
import { ArtistUpdateWithoutFollowersInput } from "../inputs/ArtistUpdateWithoutFollowersInput";

@TypeGraphQL.InputType("ArtistUpsertWithoutFollowersInput", {
  isAbstract: true
})
export class ArtistUpsertWithoutFollowersInput {
  @TypeGraphQL.Field(_type => ArtistUpdateWithoutFollowersInput, {
    nullable: false
  })
  update!: ArtistUpdateWithoutFollowersInput;

  @TypeGraphQL.Field(_type => ArtistCreateWithoutFollowersInput, {
    nullable: false
  })
  create!: ArtistCreateWithoutFollowersInput;
}
