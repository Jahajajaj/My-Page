export default async (request, context) => {
  try {
    const geo = context.geo;
    const ip = context.ip || 'Unknown';
    console.log('Visitor IP:', ip);
    console.log('Visitor from:', geo);
    return request;
  } catch (error) {
    console.error('Function error:', error.message, error.stack);
    return new Response('Internal Server Error', { status: 500 });
  }
};
