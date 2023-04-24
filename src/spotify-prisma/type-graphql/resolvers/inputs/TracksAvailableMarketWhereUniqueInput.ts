import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksAvailableMarketTrackIdTagIdCompoundUniqueInput } from "../inputs/TracksAvailableMarketTrackIdTagIdCompoundUniqueInput";

@TypeGraphQL.InputType("TracksAvailableMarketWhereUniqueInput", {
  isAbstract: true
})
export class TracksAvailableMarketWhereUniqueInput {
  @TypeGraphQL.Field(_type => TracksAvailableMarketTrackIdTagIdCompoundUniqueInput, {
    nullable: true
  })
  trackId_tagId?: TracksAvailableMarketTrackIdTagIdCompoundUniqueInput | undefined;
}
