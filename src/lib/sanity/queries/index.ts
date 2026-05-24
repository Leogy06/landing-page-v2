export const HERO_QUERY = `
  *[_type == "hero"][0]
`;

export const FAQ_QUERY = `
  *[_type == "faq"] | order(_createdAt asc)
`;

export const FEATURES_QUERY = `
  *[_type == "feature"] | order(order asc)
`;
