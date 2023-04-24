import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumAvailableMarketCreateInput } from "../../../inputs/AlbumAvailableMarketCreateInput";
import { AlbumAvailableMarketUpdateInput } from "../../../inputs/AlbumAvailableMarketUpdateInput";
import { AlbumAvailableMarketWhereUniqueInput } from "../../../inputs/AlbumAvailableMarketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAlbumAvailableMarketArgs {
  @TypeGraphQL.Field(_type => AlbumAvailableMarketWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumAvailableMarketWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketCreateInput, {
    nullable: false
  })
  create!: AlbumAvailableMarketCreateInput;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketUpdateInput, {
    nullable: false
  })
  update!: AlbumAvailableMarketUpdateInput;
}
