import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumAvailableMarketWhereUniqueInput } from "../../../inputs/AlbumAvailableMarketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAlbumAvailableMarketOrThrowArgs {
  @TypeGraphQL.Field(_type => AlbumAvailableMarketWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumAvailableMarketWhereUniqueInput;
}
