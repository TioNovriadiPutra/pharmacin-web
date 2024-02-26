import Hashids from "hashids";

const hashids = new Hashids("", 20);

export const hashIdUrl = (id) => {
  return hashids.encode(id);
};

export const unHashIdUrl = (hash) => {
  return hashids.decode(hash)[0];
};
