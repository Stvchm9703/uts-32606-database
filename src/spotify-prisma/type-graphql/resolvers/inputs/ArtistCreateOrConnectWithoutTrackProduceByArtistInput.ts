import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateWithoutTrackProduceByArtistInput } from "../inputs/ArtistCreateWithoutTrackProduceByArtistInput";
import { ArtistWhereUniqueInput } from "../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.InputType("ArtistCreateOrConnectWithoutTrackProduceByArtistInput", {
  isAbstract: true
})
export class ArtistCreateOrConnectWithoutTrackProduceByArtistInput {
  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistCreateWithoutTrackProduceByArtistInput, {
    nullable: false
  })
  create!: ArtistCreateWithoutTrackProduceByArtistInput;
}
