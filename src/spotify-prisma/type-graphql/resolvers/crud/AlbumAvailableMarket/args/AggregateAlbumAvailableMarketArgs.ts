import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumAvailableMarketOrderByWithRelationInput } from "../../../inputs/AlbumAvailableMarketOrderByWithRelationInput";
import { AlbumAvailableMarketWhereInput } from "../../../inputs/AlbumAvailableMarketWhereInput";
import { AlbumAvailableMarketWhereUniqueInput } from "../../../inputs/AlbumAvailableMarketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAlbumAvailableMarketArgs {
  @TypeGraphQL.Field(_type => AlbumAvailableMarketWhereInput, {
    nullable: true
  })
  where?: AlbumAvailableMarketWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AlbumAvailableMarketOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketWhereUniqueInput, {
    nullable: true
  })
  cursor?: AlbumAvailableMarketWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
