import { type SimulationsWithCommonRequestHeaders } from "@src/interfaces/Entry";
import { type RecorderConfiguration } from "@src/interfaces/RecorderConfiguration";

export const getSeparator = (): string => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.includes("win")) {
    return "\\";
  } else return "/";
};

export const SEPARATOR = getSeparator();

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

const LATEST_VERSION_URL =
  "https://repo1.maven.org/maven2/io/gatling/highcharts/gatling-charts-highcharts-bundle/maven-metadata.xml";

const fetchLatestVersion = async (): Promise<string> => {
  const response = await fetch(LATEST_VERSION_URL);
  const xmlBody = await response.text();

  const parser = new DOMParser();
  const xmlDocument = parser.parseFromString(xmlBody, "text/xml");
  const latestElement = xmlDocument.querySelector("latest");
  return latestElement?.textContent ?? "";
};

export const openFileDirectory = (downloadId: number): void => {
  chrome.downloads.show(downloadId);
};

export const onGatlingDownload = (
  downloadId: number,
  onChange: (downloadDelta: chrome.downloads.DownloadDelta) => void
): void => {
  // Fonction de rappel appelée lorsque le téléchargement est terminé
  if (downloadId !== undefined) {
    // Attendre que le téléchargement soit terminé
    chrome.downloads.onChanged.addListener(onChange);
  } else {
    console.error("Le téléchargement a échoué");
  }
};

const downloadBundle = async (): Promise<number> => {
  const version = await fetchLatestVersion();
  const url = `https://repo1.maven.org/maven2/io/gatling/highcharts/gatling-charts-highcharts-bundle/${version}/gatling-charts-highcharts-bundle-${version}-bundle.zip`;
  return chrome.downloads.download({
    url,
    saveAs: false,
    conflictAction: "overwrite",
  });
};

const downloadDemo = (type: string): Promise<number> => {
  const url = `https://github.com/gatling/${type}/archive/refs/heads/main.zip`;
  return chrome.downloads.download({
    url,
    saveAs: false,
    conflictAction: "overwrite",
  });
};

export const downloadGatling = (type: string): Promise<number> => {
  if (type === "gatling-bundle") {
    return downloadBundle();
  } else {
    return downloadDemo(type);
  }
};

export const searchDownload = (
  id: number
): Promise<chrome.downloads.DownloadItem[]> =>
  chrome.downloads.search({ id, limit: 1 });

export const getDefaultDownloadDirectory = (filepath: string): string =>
  filepath.slice(0, filepath.lastIndexOf(SEPARATOR) + 1);

export const getFileName = (filepath: string): string =>
  filepath.substring(filepath.lastIndexOf(SEPARATOR) + 1).replace(".zip", "");

export const initDefaultDownloadDirectory = async (): Promise<string> => {
  const results = await chrome.downloads.search({ limit: 1 });
  if (results && results.length > 0) {
    const filepath = results[0].filename;
    return getDefaultDownloadDirectory(filepath);
  } else {
    return "";
  }
};
