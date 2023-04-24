import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketCreateManyAlbumInput } from "../inputs/AlbumAvailableMarketCreateManyAlbumInput";

@TypeGraphQL.InputType("AlbumAvailableMarketCreateManyAlbumInputEnvelope", {
  isAbstract: true
})
export class AlbumAvailableMarketCreateManyAlbumInputEnvelope {
  @TypeGraphQL.Field(_type => [AlbumAvailableMarketCreateManyAlbumInput], {
    nullable: false
  })
  data!: AlbumAvailableMarketCreateManyAlbumInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
