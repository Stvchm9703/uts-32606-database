import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksAvailableMarketOrderByWithRelationInput } from "../../../inputs/TracksAvailableMarketOrderByWithRelationInput";
import { TracksAvailableMarketWhereInput } from "../../../inputs/TracksAvailableMarketWhereInput";
import { TracksAvailableMarketWhereUniqueInput } from "../../../inputs/TracksAvailableMarketWhereUniqueInput";
import { TracksAvailableMarketScalarFieldEnum } from "../../../../enums/TracksAvailableMarketScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTracksAvailableMarketArgs {
  @TypeGraphQL.Field(_type => TracksAvailableMarketWhereInput, {
    nullable: true
  })
  where?: TracksAvailableMarketWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TracksAvailableMarketOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketWhereUniqueInput, {
    nullable: true
  })
  cursor?: TracksAvailableMarketWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"tagId" | "trackId"> | undefined;
}
