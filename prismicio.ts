import * as prismic from '@prismicio/client';
import sm from './sm.json';

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc: Record<string, unknown>) {
  switch (doc.type) {
    case 'home':
      return '/';
    default:
      return null;
  }
}

// This factory function allows smooth preview setup
export function createClient(config: prismic.ClientConfig) {
  const client = prismic.createClient(endpoint, {
    ...config,
  });

  return client;
}
