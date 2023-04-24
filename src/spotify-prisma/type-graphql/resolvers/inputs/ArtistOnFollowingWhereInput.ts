import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistRelationFilter } from "../inputs/ArtistRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ArtistOnFollowingWhereInput", {
  isAbstract: true
})
export class ArtistOnFollowingWhereInput {
  @TypeGraphQL.Field(_type => [ArtistOnFollowingWhereInput], {
    nullable: true
  })
  AND?: ArtistOnFollowingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingWhereInput], {
    nullable: true
  })
  OR?: ArtistOnFollowingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingWhereInput], {
    nullable: true
  })
  NOT?: ArtistOnFollowingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  artistId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ArtistRelationFilter, {
    nullable: true
  })
  Artist?: ArtistRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  User?: UserRelationFilter | undefined;
}
