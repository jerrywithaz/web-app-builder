import { ArgsType, Field, ID } from "type-graphql";
import { ApplicationType } from "./types";

@ArgsType()
export class GetApplicationArgs {

    @Field(() => ID) 
    id: ApplicationType["id"];
    
}
