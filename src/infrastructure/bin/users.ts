#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { UsersStack } from "../lib/users-stack";

const app = new cdk.App();
new UsersStack(app, "UsersStack");
