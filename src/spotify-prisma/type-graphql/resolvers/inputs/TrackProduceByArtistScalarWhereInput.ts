import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("TrackProduceByArtistScalarWhereInput", {
  isAbstract: true
})
export class TrackProduceByArtistScalarWhereInput {
  @TypeGraphQL.Field(_type => [TrackProduceByArtistScalarWhereInput], {
    nullable: true
  })
  AND?: TrackProduceByArtistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistScalarWhereInput], {
    nullable: true
  })
  OR?: TrackProduceByArtistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistScalarWhereInput], {
    nullable: true
  })
  NOT?: TrackProduceByArtistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  trackId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  artistId?: IntFilter | undefined;
}
