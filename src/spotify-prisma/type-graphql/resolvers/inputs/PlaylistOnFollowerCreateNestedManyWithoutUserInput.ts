import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerCreateManyUserInputEnvelope } from "../inputs/PlaylistOnFollowerCreateManyUserInputEnvelope";
import { PlaylistOnFollowerCreateOrConnectWithoutUserInput } from "../inputs/PlaylistOnFollowerCreateOrConnectWithoutUserInput";
import { PlaylistOnFollowerCreateWithoutUserInput } from "../inputs/PlaylistOnFollowerCreateWithoutUserInput";
import { PlaylistOnFollowerWhereUniqueInput } from "../inputs/PlaylistOnFollowerWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistOnFollowerCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class PlaylistOnFollowerCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PlaylistOnFollowerCreateWithoutUserInput], {
    nullable: true
  })
  create?: PlaylistOnFollowerCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PlaylistOnFollowerCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PlaylistOnFollowerCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerWhereUniqueInput], {
    nullable: true
  })
  connect?: PlaylistOnFollowerWhereUniqueInput[] | undefined;
}
