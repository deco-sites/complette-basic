import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 555,
  site: "complette-basic",
  domains: ["complette-basic.deco.site"],
});
