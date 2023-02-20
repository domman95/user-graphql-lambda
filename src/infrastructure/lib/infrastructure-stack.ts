import { CfnOutput, Construct, Stack, StackProps } from "@aws-cdk/core";
import { PolicyStatement, Effect } from "@aws-cdk/aws-iam";
import { initializeToolkitDependencies } from "cdk-typescript-tooling";
import getConfiguredTypeScriptFunction from "cdk-typescript-tooling/build/getConfiguredTypeScriptFunction";

enum AvailableTables {}

enum AvailableLambdas {
  USER_GQL,
}

const { ToolkitFunction } = getConfiguredTypeScriptFunction(
  AvailableLambdas,
  AvailableTables
);
export class InfrastructureStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new CfnOutput(this, "branchName", {
      value: "branchName",
    });

    const entryPoint = require.resolve("../../app/createApp.ts");

    new ToolkitFunction(this, AvailableLambdas.USER_GQL, {
      entry: require.resolve(entryPoint),
      handler: "handler",
      memorySize: 180,
      withHttp: true,
    });

    initializeToolkitDependencies();
  }
}
