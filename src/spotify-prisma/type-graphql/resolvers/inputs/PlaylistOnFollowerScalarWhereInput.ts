import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("PlaylistOnFollowerScalarWhereInput", {
  isAbstract: true
})
export class PlaylistOnFollowerScalarWhereInput {
  @TypeGraphQL.Field(_type => [PlaylistOnFollowerScalarWhereInput], {
    nullable: true
  })
  AND?: PlaylistOnFollowerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerScalarWhereInput], {
    nullable: true
  })
  OR?: PlaylistOnFollowerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerScalarWhereInput], {
    nullable: true
  })
  NOT?: PlaylistOnFollowerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  playlistId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;
}
