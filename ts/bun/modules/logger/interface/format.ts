
interface Format {
  name: string;
  fmt: (entry: Entry) => string;
};

type FormatList = Format[]

export {Format};
export type {FormatList};
