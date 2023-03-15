// Format("Java 8", "java8", "java", ";", "()")
// Format("Java 11", "java11", "java", ";", "()")
// Format("Java 17", "java17", "java", ";", "()")
// Format("Kotlin", "kotlin", "kt", "", "()")
// Format("Scala", "scala", "scala", "", "")

// export interface Format {
//   label: String,
//   configValue: String,
//   fileExtension: String,
//   lineTermination: String,
//   parameterlessMethodCall: String
// }

export interface CoreConfiguration {
  encoding: string;
  simulationsFolder: string;
  resourcesFolder: string;
  pkg: string;
  className: string;
  thresholdForPauseCreation: number; // Duration on Scala
  saveConfig: boolean;
  headless: boolean;
  harFilePath?: string;
  format: "java8" | "java11" | "java17" | "kotlin" | "scala";
}

export interface FiltersConfiguration {
  enabled: boolean;
  allowList: string[];
  denyList: string[];
}

export interface HttpConfiguration {
  automaticReferer: boolean;
  followRedirect: boolean;
  inferHtmlResources: boolean;
  removeCacheHeaders: boolean;
  checkResponseBodies: boolean;
  useSimulationAsPrefix: boolean;
  useMethodAndUriAsPostfix: boolean;
}

export interface RecorderConfiguration {
  core: CoreConfiguration;
  filters: FiltersConfiguration;
  http: HttpConfiguration;
}
