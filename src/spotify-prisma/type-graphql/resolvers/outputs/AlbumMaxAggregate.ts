import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AlbumMaxAggregate", {
  isAbstract: true
})
export class AlbumMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uid!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  albumType!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  totalTracks!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  releaseDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  releaseDatePrecision!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  albumGroup!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  copyrights!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imageUrl!: string | null;
}
