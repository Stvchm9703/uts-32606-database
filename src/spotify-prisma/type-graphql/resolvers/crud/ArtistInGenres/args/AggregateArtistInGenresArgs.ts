import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInGenresOrderByWithRelationInput } from "../../../inputs/ArtistInGenresOrderByWithRelationInput";
import { ArtistInGenresWhereInput } from "../../../inputs/ArtistInGenresWhereInput";
import { ArtistInGenresWhereUniqueInput } from "../../../inputs/ArtistInGenresWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateArtistInGenresArgs {
  @TypeGraphQL.Field(_type => ArtistInGenresWhereInput, {
    nullable: true
  })
  where?: ArtistInGenresWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArtistInGenresOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ArtistInGenresOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresWhereUniqueInput, {
    nullable: true
  })
  cursor?: ArtistInGenresWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
