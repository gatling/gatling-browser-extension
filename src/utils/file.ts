import { type HarItem } from "@src/interfaces/HarItem";

export const getFilename = (har: HarItem): string =>
  har.date + "_" + har.domain + ".har";

export const download = (item: HarItem): void => {
  const har = {
    log: {
      version: "1.2",
      creator: {
        name: "Gatling Browser Extension",
        version: "1.0.0",
      },
      entries: item.requests,
    },
  };

  const file = new Blob([JSON.stringify(har, undefined, 4)], {
    type: "application/json",
  });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = getFilename(item);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
};
