import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistRelationFilter } from "../inputs/ArtistRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";

@TypeGraphQL.InputType("ArtistInGenresWhereInput", {
  isAbstract: true
})
export class ArtistInGenresWhereInput {
  @TypeGraphQL.Field(_type => [ArtistInGenresWhereInput], {
    nullable: true
  })
  AND?: ArtistInGenresWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresWhereInput], {
    nullable: true
  })
  OR?: ArtistInGenresWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresWhereInput], {
    nullable: true
  })
  NOT?: ArtistInGenresWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  artistId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tagId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ArtistRelationFilter, {
    nullable: true
  })
  Artist?: ArtistRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagRelationFilter, {
    nullable: true
  })
  Tag?: TagRelationFilter | undefined;
}
