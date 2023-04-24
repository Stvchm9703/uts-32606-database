import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ArtistOnFollowingScalarWhereInput", {
  isAbstract: true
})
export class ArtistOnFollowingScalarWhereInput {
  @TypeGraphQL.Field(_type => [ArtistOnFollowingScalarWhereInput], {
    nullable: true
  })
  AND?: ArtistOnFollowingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingScalarWhereInput], {
    nullable: true
  })
  OR?: ArtistOnFollowingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistOnFollowingScalarWhereInput], {
    nullable: true
  })
  NOT?: ArtistOnFollowingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  artistId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;
}
