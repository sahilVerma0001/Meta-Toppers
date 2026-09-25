import leadGeneration from "./lead-generation";
import webDesign from "./web-design";
import seo from "./seo";
import geo from "./geo";
import aeo from "./aeo";
import googleAds from "./google-ads";
import socialMedia from "./social-media";
import graphicDesign from "./graphic-design";
import appDevelopment from "./app-development";
import crmSolutions from "./crm-solutions";
import apiAutomation from "./api-automation";

// Ordered by psychological positioning (primacy → recency)
export const servicesData = [
  leadGeneration,
  webDesign,
  seo,
  geo,
  aeo,
  googleAds,
  socialMedia,
  graphicDesign,
  crmSolutions,
  apiAutomation,
  appDevelopment,
];

export type { ServiceData, ServiceVariant } from "./types";
