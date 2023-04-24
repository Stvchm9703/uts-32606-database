import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackScalarWhereInput } from "../inputs/TrackScalarWhereInput";
import { TrackUpdateManyMutationInput } from "../inputs/TrackUpdateManyMutationInput";

@TypeGraphQL.InputType("TrackUpdateManyWithWhereWithoutAlbumInput", {
  isAbstract: true
})
export class TrackUpdateManyWithWhereWithoutAlbumInput {
  @TypeGraphQL.Field(_type => TrackScalarWhereInput, {
    nullable: false
  })
  where!: TrackScalarWhereInput;

  @TypeGraphQL.Field(_type => TrackUpdateManyMutationInput, {
    nullable: false
  })
  data!: TrackUpdateManyMutationInput;
}
