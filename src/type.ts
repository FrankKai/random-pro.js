export type SupportTypes<K, T> =
  | Array<K>
  | Record<string, T>
  | Map<K, T>
  | Set<K>;

export type Random = () => any;
