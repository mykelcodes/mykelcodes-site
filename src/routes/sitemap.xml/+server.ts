import { routes, site } from '$lib/site';

export const prerender = true;

const today = new Date().toISOString().slice(0, 10);

export function GET() {
	const body = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
	.map(
		(route) => `	<url>
		<loc>${site.url}${route === '/' ? '' : route}</loc>
		<lastmod>${today}</lastmod>
		<changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
		<priority>${route === '/' ? '1.0' : '0.8'}</priority>
	</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}
