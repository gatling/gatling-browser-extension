import { type SimulationsWithCommonRequestHeaders } from "@src/interfaces/Entry";
import { type RecorderConfiguration } from "@src/interfaces/RecorderConfiguration";

export const downloadSimulation = (
  simulation: SimulationsWithCommonRequestHeaders,
  configuration: RecorderConfiguration
): void => {
  const file = new Blob([JSON.stringify(simulation, undefined, 4)], {
    type: "text/java",
  });
  console.log(simulation);
  console.log(configuration);
  const url = URL.createObjectURL(file);
  chrome.downloads.download({
    conflictAction: "overwrite",
    filename:
      "./gatling-record-test/" +
      configuration.core.simulationsFolder +
      configuration.core.className +
      ".java",
    url,
  });
};
