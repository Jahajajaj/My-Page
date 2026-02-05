export default async (request, context) => {
  try {
    const { geo } = context;
    const ip = request.headers.get('x-forwarded-for') || 'Unknown';  // Fallback if header is missing
    console.log('Visitor IP:', ip);
    console.log('Visitor from:', geo);
    return request;
  } catch (error) {
    console.error('Function error:', error.message, error.stack);  // Logs the full error
    return new Response('Internal Server Error', { status: 500 });
  }
};

export const config = { path: "/*" };
