import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateWithoutFollowersInput } from "../inputs/ArtistCreateWithoutFollowersInput";
import { ArtistWhereUniqueInput } from "../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.InputType("ArtistCreateOrConnectWithoutFollowersInput", {
  isAbstract: true
})
export class ArtistCreateOrConnectWithoutFollowersInput {
  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistCreateWithoutFollowersInput, {
    nullable: false
  })
  create!: ArtistCreateWithoutFollowersInput;
}
