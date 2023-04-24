import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateManyOwnerInputEnvelope } from "../inputs/PlaylistCreateManyOwnerInputEnvelope";
import { PlaylistCreateOrConnectWithoutOwnerInput } from "../inputs/PlaylistCreateOrConnectWithoutOwnerInput";
import { PlaylistCreateWithoutOwnerInput } from "../inputs/PlaylistCreateWithoutOwnerInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistCreateNestedManyWithoutOwnerInput", {
  isAbstract: true
})
export class PlaylistCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [PlaylistCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: PlaylistCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: PlaylistCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => PlaylistCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: PlaylistCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  connect?: PlaylistWhereUniqueInput[] | undefined;
}
