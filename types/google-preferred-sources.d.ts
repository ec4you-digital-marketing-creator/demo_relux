// Type declarations for Google News Preferred Sources custom JSX attributes.
// https://developers.google.com/news/google-news-preferred-sources

import "react";

declare module "react" {
  interface HTMLAttributes<T> {
    /** Marks a <div> as the Google "Add to Preferred Sources" button container. */
    "google-add-preferred-source-btn"?: boolean | string;
    /** Sets the button theme: "light" | "dark" */
    "data-theme"?: "light" | "dark" | string;
    /** Overrides the button language using a BCP-47 language code, e.g. "en" */
    "data-lang"?: string;
  }
}
