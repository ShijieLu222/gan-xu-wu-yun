const REPO = "ShijieLu222/gan-xu-wu-yun";

export function pagesAsset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

export function asset(path: string) {
  if (process.env.NEXT_PUBLIC_SITE_URL?.includes("github.io")) {
    return `https://cdn.jsdmirror.com/gh/${REPO}@main/public${path}`;
  }
  return pagesAsset(path);
}
