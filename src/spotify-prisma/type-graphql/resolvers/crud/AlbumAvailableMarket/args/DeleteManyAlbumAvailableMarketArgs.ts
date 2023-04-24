import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumAvailableMarketWhereInput } from "../../../inputs/AlbumAvailableMarketWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAlbumAvailableMarketArgs {
  @TypeGraphQL.Field(_type => AlbumAvailableMarketWhereInput, {
    nullable: true
  })
  where?: AlbumAvailableMarketWhereInput | undefined;
}
