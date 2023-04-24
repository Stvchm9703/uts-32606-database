import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumAvailableMarketCreateInput } from "../../../inputs/AlbumAvailableMarketCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAlbumAvailableMarketArgs {
  @TypeGraphQL.Field(_type => AlbumAvailableMarketCreateInput, {
    nullable: false
  })
  data!: AlbumAvailableMarketCreateInput;
}
