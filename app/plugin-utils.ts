export function pluginSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/^@/, "at-")
    .replace(/[\/_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function pluginInitials(name: string) {
  return name.replace(/^@[^/]+\//, "").replace(/^dsh[-_]?/i, "").split(/[-_]/).filter(Boolean).map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "DS";
}
