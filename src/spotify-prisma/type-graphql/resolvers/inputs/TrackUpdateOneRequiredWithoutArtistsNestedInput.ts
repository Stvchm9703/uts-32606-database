import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateOrConnectWithoutArtistsInput } from "../inputs/TrackCreateOrConnectWithoutArtistsInput";
import { TrackCreateWithoutArtistsInput } from "../inputs/TrackCreateWithoutArtistsInput";
import { TrackUpdateWithoutArtistsInput } from "../inputs/TrackUpdateWithoutArtistsInput";
import { TrackUpsertWithoutArtistsInput } from "../inputs/TrackUpsertWithoutArtistsInput";
import { TrackWhereUniqueInput } from "../inputs/TrackWhereUniqueInput";

@TypeGraphQL.InputType("TrackUpdateOneRequiredWithoutArtistsNestedInput", {
  isAbstract: true
})
export class TrackUpdateOneRequiredWithoutArtistsNestedInput {
  @TypeGraphQL.Field(_type => TrackCreateWithoutArtistsInput, {
    nullable: true
  })
  create?: TrackCreateWithoutArtistsInput | undefined;

  @TypeGraphQL.Field(_type => TrackCreateOrConnectWithoutArtistsInput, {
    nullable: true
  })
  connectOrCreate?: TrackCreateOrConnectWithoutArtistsInput | undefined;

  @TypeGraphQL.Field(_type => TrackUpsertWithoutArtistsInput, {
    nullable: true
  })
  upsert?: TrackUpsertWithoutArtistsInput | undefined;

  @TypeGraphQL.Field(_type => TrackWhereUniqueInput, {
    nullable: true
  })
  connect?: TrackWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TrackUpdateWithoutArtistsInput, {
    nullable: true
  })
  update?: TrackUpdateWithoutArtistsInput | undefined;
}
