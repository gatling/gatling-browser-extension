import { GroupedEntry, SimpleEntry } from "@src/interfaces/Entry";
import { groupRequests, TIMESTAMP_100_MS } from "@src/utils/generate/group";
import {
  entry1,
  entry2bundle,
  entry3logoSvg,
  entry4logoSvg,
  entry5serliPng,
  entry6serli2Png,
  entry7serliJpg,
  entry8upPng,
  entry9upPng,
  entry10analytics,
  entry11faviconPng,
  entry12analytics,
  entry13pagePresentation,
  entry14bundlePresentation,
  entry15presentationAnalytics,
  entry16presentationFavicon,
  entry17presentationAnalytics2,
  entry18pageFaq,
  entry19faqBundle
} from "@src/utils/generate/group.mocks";

const UNGROUPED_REQUESTS: SimpleEntry[] = [entry1, entry2bundle, entry3logoSvg, entry4logoSvg, entry5serliPng, entry6serli2Png, entry7serliJpg, entry8upPng, entry9upPng, entry10analytics, entry11faviconPng, entry12analytics, entry13pagePresentation, entry14bundlePresentation, entry15presentationAnalytics, entry16presentationFavicon, entry17presentationAnalytics2, entry18pageFaq, entry19faqBundle];

const GROUP1: GroupedEntry = {
  sendTime: new Date(entry1.startedDateTime).getTime(),
  arrivalTime: new Date(entry12analytics.startedDateTime).getTime() + TIMESTAMP_100_MS,
  root: entry1,
  resources: [entry2bundle, entry3logoSvg, entry4logoSvg, entry5serliPng, entry6serli2Png, entry7serliJpg, entry8upPng, entry9upPng, entry10analytics, entry11faviconPng, entry12analytics]
}

const GROUP2: GroupedEntry = {
  sendTime: new Date(entry13pagePresentation.startedDateTime).getTime(),
  arrivalTime: new Date(entry17presentationAnalytics2.startedDateTime).getTime() + TIMESTAMP_100_MS,
  root: entry13pagePresentation,
  resources: [entry14bundlePresentation, entry15presentationAnalytics, entry16presentationFavicon, entry17presentationAnalytics2]
}

const GROUP3: GroupedEntry = {
  sendTime: new Date(entry18pageFaq.startedDateTime).getTime(),
  arrivalTime: new Date(entry19faqBundle.startedDateTime).getTime() + TIMESTAMP_100_MS,
  root: entry18pageFaq,
  resources: [entry19faqBundle]
}

export const GROUPED_ENTRIES: GroupedEntry[] = [
  GROUP1,
  GROUP2,
  GROUP3
]

describe("groupRequests", () => {
  it("should return 3 groups", () => {
    expect(groupRequests(UNGROUPED_REQUESTS)).toEqual(GROUPED_ENTRIES);
  });
});
