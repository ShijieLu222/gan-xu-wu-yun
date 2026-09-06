"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { asset, pagesAsset } from "./asset";

type Props = Omit<ImageProps, "src"> & { src: string };

export function SmartImage({ src, onError, ...props }: Props) {
  const preferred = asset(src);
  const fallback = pagesAsset(src);
  const [current, setCurrent] = useState(preferred);

  return (
    <Image
      {...props}
      src={current}
      onError={(event) => {
        if (current !== fallback) setCurrent(fallback);
        onError?.(event);
      }}
    />
  );
}
