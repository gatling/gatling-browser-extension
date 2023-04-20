import * as htmlparser2 from "htmlparser2";

import { type GroupedEntry } from "@src/interfaces/Entry";

export const getResourcesFromHtml = (body: string): string[] => {
  const links: string[] = [];
  const scripts: string[] = [];
  const images: string[] = [];
  const parser = new htmlparser2.Parser({
    onopentag(name, attrs): void {
      if (name === "link" && attrs.href) {
        links.push(attrs.href);
      }
      if (name === "script" && attrs.src) {
        scripts.push(attrs.src);
      }
      if (name === "img" && attrs.src) {
        images.push(attrs.src);
      }
    },
  });
  parser.write(body);
  parser.end();
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
