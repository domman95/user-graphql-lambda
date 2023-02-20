"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfrastructureStack = void 0;
const core_1 = require("@aws-cdk/core");
const cdk_typescript_tooling_1 = require("cdk-typescript-tooling");
const getConfiguredTypeScriptFunction_1 = require("cdk-typescript-tooling/build/getConfiguredTypeScriptFunction");
var AvailableTables;
(function (AvailableTables) {
})(AvailableTables || (AvailableTables = {}));
var AvailableLambdas;
(function (AvailableLambdas) {
    AvailableLambdas[AvailableLambdas["USER_GQL"] = 0] = "USER_GQL";
})(AvailableLambdas || (AvailableLambdas = {}));
const { ToolkitFunction } = (0, getConfiguredTypeScriptFunction_1.default)(AvailableLambdas, AvailableTables);
class InfrastructureStack extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        new core_1.CfnOutput(this, 'branchName', {
            value: 'branchName',
        });
        const entryPoint = require.resolve("../../app/createApp.ts");
        new ToolkitFunction(this, AvailableLambdas.USER_GQL, {
            entry: entryPoint,
            handler: "handler",
            memorySize: 180,
            withHttp: true,
        });
        //const userGraphqlLambda = new lambda.Function(this, "userGraphqlLambda", {
        //  code: lambda.Code.fromAsset(path.join(__dirname, "../../app")),
        //  handler: "createApp.handler",
        //  runtime: lambda.Runtime.NODEJS_16_X,
        //});
        //new apiGateway.LambdaRestApi(this, "userGraphqlEndpoint", {
        //  handler: userGraphqlLambda,
        //});
        (0, cdk_typescript_tooling_1.initializeToolkitDependencies)();
    }
}
exports.InfrastructureStack = InfrastructureStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmFzdHJ1Y3R1cmUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZyYXN0cnVjdHVyZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBa0Y7QUFDbEYsbUVBQXVFO0FBQ3ZFLGtIQUEyRztBQUUzRyxJQUFLLGVBQWtCO0FBQXZCLFdBQUssZUFBZTtBQUFFLENBQUMsRUFBbEIsZUFBZSxLQUFmLGVBQWUsUUFBRztBQUV2QixJQUFLLGdCQUVKO0FBRkQsV0FBSyxnQkFBZ0I7SUFDbkIsK0RBQVEsQ0FBQTtBQUNWLENBQUMsRUFGSSxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBRXBCO0FBRUQsTUFBTSxFQUFFLGVBQWUsRUFBRSxHQUFHLElBQUEseUNBQStCLEVBQ3pELGdCQUFnQixFQUNoQixlQUFlLENBQ2hCLENBQUM7QUFDRixNQUFhLG1CQUFvQixTQUFRLFlBQUs7SUFDNUMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixJQUFJLGdCQUFTLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUNoQyxLQUFLLEVBQUUsWUFBWTtTQUNwQixDQUFDLENBQUM7UUFFSCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFN0QsSUFBSSxlQUFlLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtZQUNuRCxLQUFLLEVBQUUsVUFBVTtZQUNqQixPQUFPLEVBQUUsU0FBUztZQUNsQixVQUFVLEVBQUUsR0FBRztZQUNmLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsNEVBQTRFO1FBQzVFLG1FQUFtRTtRQUNuRSxpQ0FBaUM7UUFDakMsd0NBQXdDO1FBQ3hDLEtBQUs7UUFFTCw2REFBNkQ7UUFDN0QsK0JBQStCO1FBQy9CLEtBQUs7UUFFTCxJQUFBLHNEQUE2QixHQUFFLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBN0JELGtEQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENmbk91dHB1dCwgQ29uc3RydWN0LCBTdGFjaywgU3RhY2tQcm9wcywgRHVyYXRpb24gfSBmcm9tIFwiQGF3cy1jZGsvY29yZVwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVRvb2xraXREZXBlbmRlbmNpZXMgfSBmcm9tIFwiY2RrLXR5cGVzY3JpcHQtdG9vbGluZ1wiO1xuaW1wb3J0IGdldENvbmZpZ3VyZWRUeXBlU2NyaXB0RnVuY3Rpb24gZnJvbSBcImNkay10eXBlc2NyaXB0LXRvb2xpbmcvYnVpbGQvZ2V0Q29uZmlndXJlZFR5cGVTY3JpcHRGdW5jdGlvblwiO1xuXG5lbnVtIEF2YWlsYWJsZVRhYmxlcyB7fVxuXG5lbnVtIEF2YWlsYWJsZUxhbWJkYXMge1xuICBVU0VSX0dRTCxcbn1cblxuY29uc3QgeyBUb29sa2l0RnVuY3Rpb24gfSA9IGdldENvbmZpZ3VyZWRUeXBlU2NyaXB0RnVuY3Rpb24oXG4gIEF2YWlsYWJsZUxhbWJkYXMsXG4gIEF2YWlsYWJsZVRhYmxlc1xuKTtcbmV4cG9ydCBjbGFzcyBJbmZyYXN0cnVjdHVyZVN0YWNrIGV4dGVuZHMgU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IFN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIG5ldyBDZm5PdXRwdXQodGhpcywgJ2JyYW5jaE5hbWUnLCB7XG4gICAgICB2YWx1ZTogJ2JyYW5jaE5hbWUnLFxuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IGVudHJ5UG9pbnQgPSByZXF1aXJlLnJlc29sdmUoXCIuLi8uLi9hcHAvY3JlYXRlQXBwLnRzXCIpO1xuXG4gICAgbmV3IFRvb2xraXRGdW5jdGlvbih0aGlzLCBBdmFpbGFibGVMYW1iZGFzLlVTRVJfR1FMLCB7XG4gICAgICBlbnRyeTogZW50cnlQb2ludCxcbiAgICAgIGhhbmRsZXI6IFwiaGFuZGxlclwiLFxuICAgICAgbWVtb3J5U2l6ZTogMTgwLFxuICAgICAgd2l0aEh0dHA6IHRydWUsXG4gICAgfSk7XG5cbiAgICAvL2NvbnN0IHVzZXJHcmFwaHFsTGFtYmRhID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcInVzZXJHcmFwaHFsTGFtYmRhXCIsIHtcbiAgICAvLyAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi4vLi4vYXBwXCIpKSxcbiAgICAvLyAgaGFuZGxlcjogXCJjcmVhdGVBcHAuaGFuZGxlclwiLFxuICAgIC8vICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTZfWCxcbiAgICAvL30pO1xuXG4gICAgLy9uZXcgYXBpR2F0ZXdheS5MYW1iZGFSZXN0QXBpKHRoaXMsIFwidXNlckdyYXBocWxFbmRwb2ludFwiLCB7XG4gICAgLy8gIGhhbmRsZXI6IHVzZXJHcmFwaHFsTGFtYmRhLFxuICAgIC8vfSk7XG5cbiAgICBpbml0aWFsaXplVG9vbGtpdERlcGVuZGVuY2llcygpO1xuICB9XG59XG4iXX0=