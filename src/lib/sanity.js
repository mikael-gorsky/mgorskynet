import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ajc9wz23',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

export async function fetchSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`)
}

export async function fetchTeachingPrograms() {
  return client.fetch(`*[_type == "teachingProgram"] | order(order asc)`)
}

export async function fetchTeachingProgram(slug) {
  return client.fetch(
    `*[_type == "teachingProgram" && slug.current == $slug][0]`,
    { slug }
  )
}

export async function fetchAIPravdaIssues() {
  return client.fetch(`*[_type == "aiPravdaIssue"] | order(publishDate desc)`)
}

export async function fetchAIChroniclesSources() {
  return client.fetch(`*[_type == "aiChroniclesSource"] | order(_createdAt desc)`)
}

export async function fetchAIChroniclesBook() {
  return client.fetch(`*[_type == "aiChroniclesBook"][0]`)
}

export async function fetchProBonoProjects() {
  return client.fetch(`*[_type == "proBonoProject"] | order(order asc)`)
}

export async function fetchServices() {
  return client.fetch(`*[_type == "service"] | order(order asc)`)
}

export async function fetchNewsItems() {
  return client.fetch(`*[_type == "newsItem"] | order(date desc)[0...5]`)
}

export async function fetchHeadlines() {
  return client.fetch(`*[_type == "headline"] | order(order asc)`)
}

export async function fetchXPosts() {
  return client.fetch(`*[_type == "xPost"] | order(date desc)[0...5]`)
}
