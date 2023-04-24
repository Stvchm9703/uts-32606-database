import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingCreateManyUserInputEnvelope } from "../inputs/ArtistOnFollowingCreateManyUserInputEnvelope";
import { ArtistOnFollowingCreateOrConnectWithoutUserInput } from "../inputs/ArtistOnFollowingCreateOrConnectWithoutUserInput";
import { ArtistOnFollowingCreateWithoutUserInput } from "../inputs/ArtistOnFollowingCreateWithoutUserInput";
import { ArtistOnFollowingWhereUniqueInput } from "../inputs/ArtistOnFollowingWhereUniqueInput";

@TypeGraphQL.InputType("ArtistOnFollowingCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ArtistOnFollowingCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ArtistOnFollowingCreateWithoutUserInput], {
    nullable: true
  })
  create?: ArtistOnFollowingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ArtistOnFollowingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ArtistOnFollowingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingWhereUniqueInput], {
    nullable: true
  })
  connect?: ArtistOnFollowingWhereUniqueInput[] | undefined;
}
