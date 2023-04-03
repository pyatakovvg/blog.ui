
import type { Config } from "@jest/types";
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';


export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "node",

    roots: ["<rootDir>/src"],
    testMatch: ["**/**/*.test.ts"],
    transform: { "^.+\\.(t|j)sx?$": "ts-jest" },
    transformIgnorePatterns: [
      "<rootDir>/node_modules"
    ],
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
  };
};