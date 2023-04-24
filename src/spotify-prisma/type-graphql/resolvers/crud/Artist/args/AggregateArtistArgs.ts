import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistOrderByWithRelationInput } from "../../../inputs/ArtistOrderByWithRelationInput";
import { ArtistWhereInput } from "../../../inputs/ArtistWhereInput";
import { ArtistWhereUniqueInput } from "../../../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateArtistArgs {
  @TypeGraphQL.Field(_type => ArtistWhereInput, {
    nullable: true
  })
  where?: ArtistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArtistOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ArtistOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: true
  })
  cursor?: ArtistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
