export default async (request, context) => {
  try {
    const geo = context.geo;
    const ip = context.ip || 'Unknown';
    console.log('Visitor IP:', ip);
    console.log('Visitor from:', geo);
    return await context.next();  // Proceed to origin and return its Response
  } catch (error) {
    console.error('Function error:', error.message, error.stack);
    return new Response('Internal Server Error', { status: 500 });
  }
};

export const config = {
  path: "/*",
  onError: "bypass"  // Or 'fail' for default page; use a function for custom response
};
