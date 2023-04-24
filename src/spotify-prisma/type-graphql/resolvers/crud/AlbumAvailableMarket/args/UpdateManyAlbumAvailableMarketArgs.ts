import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumAvailableMarketUpdateManyMutationInput } from "../../../inputs/AlbumAvailableMarketUpdateManyMutationInput";
import { AlbumAvailableMarketWhereInput } from "../../../inputs/AlbumAvailableMarketWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAlbumAvailableMarketArgs {
  @TypeGraphQL.Field(_type => AlbumAvailableMarketUpdateManyMutationInput, {
    nullable: false
  })
  data!: AlbumAvailableMarketUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketWhereInput, {
    nullable: true
  })
  where?: AlbumAvailableMarketWhereInput | undefined;
}
