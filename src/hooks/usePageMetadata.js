import { useEffect } from "react";

export function usePageMetadata(title, description) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content");
    if (meta) meta.setAttribute("content", description);
    return () => {
      document.title = "Shai Kohn — React Native Developer";
      if (meta && previousDescription) meta.setAttribute("content", previousDescription);
    };
  }, [description, title]);
}
