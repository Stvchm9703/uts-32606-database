import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateOrConnectWithoutFollowersInput } from "../inputs/ArtistCreateOrConnectWithoutFollowersInput";
import { ArtistCreateWithoutFollowersInput } from "../inputs/ArtistCreateWithoutFollowersInput";
import { ArtistWhereUniqueInput } from "../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.InputType("ArtistCreateNestedOneWithoutFollowersInput", {
  isAbstract: true
})
export class ArtistCreateNestedOneWithoutFollowersInput {
  @TypeGraphQL.Field(_type => ArtistCreateWithoutFollowersInput, {
    nullable: true
  })
  create?: ArtistCreateWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => ArtistCreateOrConnectWithoutFollowersInput, {
    nullable: true
  })
  connectOrCreate?: ArtistCreateOrConnectWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: true
  })
  connect?: ArtistWhereUniqueInput | undefined;
}
