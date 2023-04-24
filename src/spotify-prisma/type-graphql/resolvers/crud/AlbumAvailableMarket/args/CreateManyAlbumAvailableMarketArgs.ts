import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumAvailableMarketCreateManyInput } from "../../../inputs/AlbumAvailableMarketCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAlbumAvailableMarketArgs {
  @TypeGraphQL.Field(_type => [AlbumAvailableMarketCreateManyInput], {
    nullable: false
  })
  data!: AlbumAvailableMarketCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
