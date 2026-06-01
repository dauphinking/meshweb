import { redirect } from "next/navigation"

export default async function BlogPostRootPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  redirect(`/en/blog/${slug}`)
}
