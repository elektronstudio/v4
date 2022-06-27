export const sentenceCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const replaceTokens = (str: string, obj: Record<string, string>) => {
  return str.replace(/\${(.*?)}/g, (_, v) => obj[v]);
};

export const parseDetails = (str = ""): any[] => {
  if (!str) return [];
  const details = str
    .replace(/<\/?p>/g, "")
    .replace("<br>", "\n")
    .replace("\n{2,}", "\n\n")
    .split("\n")
    .map((el) =>
      el
        .split(/:(.*)/s)
        .map((s) => s.trim())
        .filter((s) => s)
        .map((s) =>
          parseMarkdown(s)
            .replace(/^<p>/, "")
            .replace(/<\/p>\n$/, "")
            .replace(" href", ' target="_blank" href')
        )
    )
    .map((row) => {
      if (row[1]) {
        row[0] = `${row[0]}:`;
      }
      return row;
    });

  return details.at(-1).length ? details : details.slice(0, -1);
};
