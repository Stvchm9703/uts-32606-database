import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateManyAlbumInput } from "../inputs/TrackCreateManyAlbumInput";

@TypeGraphQL.InputType("TrackCreateManyAlbumInputEnvelope", {
  isAbstract: true
})
export class TrackCreateManyAlbumInputEnvelope {
  @TypeGraphQL.Field(_type => [TrackCreateManyAlbumInput], {
    nullable: false
  })
  data!: TrackCreateManyAlbumInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
