import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketListRelationFilter } from "../inputs/AlbumAvailableMarketListRelationFilter";
import { ArtistInGenresListRelationFilter } from "../inputs/ArtistInGenresListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TracksAvailableMarketListRelationFilter } from "../inputs/TracksAvailableMarketListRelationFilter";

@TypeGraphQL.InputType("TagWhereInput", {
  isAbstract: true
})
export class TagWhereInput {
  @TypeGraphQL.Field(_type => [TagWhereInput], {
    nullable: true
  })
  AND?: TagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereInput], {
    nullable: true
  })
  OR?: TagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagWhereInput], {
    nullable: true
  })
  NOT?: TagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  code?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketListRelationFilter, {
    nullable: true
  })
  AlbumAvailableMarket?: AlbumAvailableMarketListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketListRelationFilter, {
    nullable: true
  })
  TracksAvailableMarket?: TracksAvailableMarketListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresListRelationFilter, {
    nullable: true
  })
  ArtistInGenres?: ArtistInGenresListRelationFilter | undefined;
}
