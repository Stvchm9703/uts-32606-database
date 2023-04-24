import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistCreateManyArtistInput } from "../inputs/AlbumProduceByArtistCreateManyArtistInput";

@TypeGraphQL.InputType("AlbumProduceByArtistCreateManyArtistInputEnvelope", {
  isAbstract: true
})
export class AlbumProduceByArtistCreateManyArtistInputEnvelope {
  @TypeGraphQL.Field(_type => [AlbumProduceByArtistCreateManyArtistInput], {
    nullable: false
  })
  data!: AlbumProduceByArtistCreateManyArtistInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
