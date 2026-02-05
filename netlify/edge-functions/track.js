export default async (request, context) => {
  const { geo } = context;
  console.log('Visitor from:', geo);  // Logs city, country, lat/long, etc. to Netlify dashboard
  return request;  // Pass the request through unchanged
};

export const config = { path: "/*" };  // Run on all page requests
