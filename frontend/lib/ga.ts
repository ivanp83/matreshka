// export const pageview = (url: URL): void => {
//   window.gtag("config", String(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS), {
//     page_path: url,
//   });
// };

// type GTagEvent = {
//   action: string;
//   category: string;
//   label: string;
//   value: number;
// };

// export const event = ({ action, category, label, value }: GTagEvent): void => {
//   window.gtag("event", action, {
//     event_category: category,
//     event_label: label,
//     value,
//   });
// };
"use client";

import { useEffect } from "react";
import * as Fathom from "fathom-client";

const Analytics = () => {
  useEffect(() => {
    Fathom.load(String(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS), {
      includedDomains: ["matryoshkaflowers.ru"],
    });

    const onRouteChange = () => Fathom.trackPageview();

    window.addEventListener("routeChange", onRouteChange);
    return () => window.removeEventListener("routeChange", onRouteChange);
  }, []);

  return null;
};

export default Analytics;
