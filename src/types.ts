export type WithTestID<T = {}> = T & { testID?: string };

export type Generic<T = unknown> = {
  [key: string]: T;
};

export type PropsWithTypedChildren<T, C> = T & { children: C };
