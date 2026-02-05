export default async (request, context) => {
  const { geo } = context;
  const ip = request.headers.get('x-forwarded-for');
  console.log('Visitor IP:', ip);
  console.log('Visitor from:', geo);

  // Increment view count (using KV store)
  const kv = context.kv;  // Assumes you named your store 'views'
  let count = await kv.get('page_views') || 0;
  count++;
  await kv.put('page_views', count);

  return request;
};

export const config = { path: "/*" };
