import { JSDOM } from "jsdom";

import { type GroupedEntry } from "@src/interfaces/Entry";

export const getResourcesFromHtml = (body: string): string[] => {
  const dom = new JSDOM(body);
  const links = Array.from(dom.window.document.querySelectorAll("link")).map(
    (link) => link.href
  );
  const scripts = Array.from(
    dom.window.document.querySelectorAll("script")
  ).map((script) => script.src);
  const images = Array.from(dom.window.document.querySelectorAll("img")).map(
    (img) => img.src
  );
  return [...links, ...images, ...scripts].filter(Boolean);
};

const filterResourcesFromHtml = (
  contentText: string,
  request: GroupedEntry
): GroupedEntry => {
  const resources = getResourcesFromHtml(contentText);
  const resourcesWithHostname = resources.map((r) =>
    !r.startsWith("http://") || !r.startsWith("https://")
      ? new URL(request.root.request.url).origin + r
      : r
  );
  request.resources.forEach((resource) =>
    console.log("resource.request.url", resource.request.url)
  );
  request.resources = request.resources.filter(
    (resource) => !resourcesWithHostname.includes(resource.request.url)
  );
  return request;
};

export const interResources = (
  groupedRequests: GroupedEntry[]
): GroupedEntry[] => {
  return groupedRequests.map((request) => {
    const contentText = request.root.response.content.text;
    return contentText
      ? filterResourcesFromHtml(contentText, request)
      : request;
  });
};
