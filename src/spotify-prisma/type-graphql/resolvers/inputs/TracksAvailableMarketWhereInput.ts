import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";
import { TrackRelationFilter } from "../inputs/TrackRelationFilter";

@TypeGraphQL.InputType("TracksAvailableMarketWhereInput", {
  isAbstract: true
})
export class TracksAvailableMarketWhereInput {
  @TypeGraphQL.Field(_type => [TracksAvailableMarketWhereInput], {
    nullable: true
  })
  AND?: TracksAvailableMarketWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketWhereInput], {
    nullable: true
  })
  OR?: TracksAvailableMarketWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketWhereInput], {
    nullable: true
  })
  NOT?: TracksAvailableMarketWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tagId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  trackId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => TagRelationFilter, {
    nullable: true
  })
  Tag?: TagRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TrackRelationFilter, {
    nullable: true
  })
  Track?: TrackRelationFilter | undefined;
}
