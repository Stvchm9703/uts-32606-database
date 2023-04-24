import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumAvailableMarketUpdateInput } from "../../../inputs/AlbumAvailableMarketUpdateInput";
import { AlbumAvailableMarketWhereUniqueInput } from "../../../inputs/AlbumAvailableMarketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAlbumAvailableMarketArgs {
  @TypeGraphQL.Field(_type => AlbumAvailableMarketUpdateInput, {
    nullable: false
  })
  data!: AlbumAvailableMarketUpdateInput;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumAvailableMarketWhereUniqueInput;
}
