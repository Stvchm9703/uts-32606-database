import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerWhereInput } from "../inputs/PlaylistOnFollowerWhereInput";

@TypeGraphQL.InputType("PlaylistOnFollowerListRelationFilter", {
  isAbstract: true
})
export class PlaylistOnFollowerListRelationFilter {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereInput, {
    nullable: true
  })
  every?: PlaylistOnFollowerWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereInput, {
    nullable: true
  })
  some?: PlaylistOnFollowerWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereInput, {
    nullable: true
  })
  none?: PlaylistOnFollowerWhereInput | undefined;
}
