export const site = {
	name: 'Michael Olawale',
	role: 'Lead React Native Engineer, VP; founder-minded product technologist',
	tagline:
		'Building high-trust mobile and web products across fintech, health, travel, logistics, and commerce.',
	description:
		'Michael Olawale is a London-based React Native and frontend engineering leader with 10+ years of experience shipping mobile and web products across Africa, North America, and Europe.',
	url: 'https://mykelcodes.com',
	email: 'hello@mykelcodes.com',
	calendarUrl: 'https://cal.com/mykelcodes',
	socials: [
		{ label: 'GitHub', href: 'https://github.com/mykelcodes' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/michaelolawale/' },
		{ label: 'X', href: 'https://x.com/mykel_io' }
	]
};

export const navigation = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Work', href: '/work' },
	// { label: 'Impact', href: '/impact' },
	// { label: 'Writing', href: '/writing' },
	{ label: 'Contact', href: '/contact' }
] as const;

export type ProjectLink = {
	label: string;
	href: string;
	kind: 'product' | 'subdomain' | 'app-store' | 'play-store' | 'case-study' | 'source';
};

export type Project = {
	title: string;
	description: string;
	status: string;
	accent: string;
	technologies: string[];
	links: ProjectLink[];
};

export const featuredProjects: Project[] = [
	{
		title: 'Newsroom',
		description:
			'A SvelteKit-based news aggregation and reading application, built with a focus on simplicity, performance, and a clean reading experience.',
		status: 'Personal project',
		accent: 'bg-gray-500',
		technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers'],
		links: [
			{
				label: 'Source code',
				href: 'https://github.com/mykelcodes/newsroom',
				kind: 'source'
			},
			{ label: 'Live site', href: 'https://newsroom.mykelcodes.com', kind: 'product' }
		]
	},
	{
		title: 'Enterprise Mobile Banking Platforms',
		description:
			'Mobile banking and digital platform work for major financial institutions, spanning architecture, delivery, brand consistency, and scalable frontend/mobile systems.',
		status: 'Enterprise systems',
		accent: 'bg-purple-500',
		technologies: ['React Native', 'Flutter', 'TypeScript', 'Banking platforms'],
		links: [
			{
				label: 'Overview',
				href: '/work#enterprise-mobile-banking-platforms',
				kind: 'case-study'
			},
			{ label: 'Experience', href: '/about#experience', kind: 'case-study' }
		]
	},
	{
		title: 'Mojo AI Mobile App',
		description:
			'A robust React Native application for an AI-enabled health product, built with attention to reliability, product polish, and high-velocity delivery.',
		status: 'Shipped product',
		accent: 'bg-violet-500',
		technologies: ['React Native', 'TypeScript', 'AI product', 'Mobile architecture'],
		links: [
			{ label: 'Overview', href: '/work#mojo-ai-mobile-app', kind: 'case-study' },
			{
				label: 'LinkedIn',
				href: 'https://www.linkedin.com/in/michaelolawale/',
				kind: 'source'
			}
		]
	}
];

export const projectArchive: Project[] = [
	...featuredProjects,
	{
		title: 'JPMorganChase Mobile Engineering',
		description:
			'Lead React Native engineering work at VP level, contributing to mobile platform quality, architecture, and delivery inside a high-trust financial environment.',
		status: 'Current role',
		accent: 'bg-purple-400',
		technologies: ['React Native', 'Expo', 'TypeScript', 'Mobile platforms'],
		links: [
			{ label: 'Experience', href: '/about#experience', kind: 'case-study' },
			{
				label: 'LinkedIn',
				href: 'https://www.linkedin.com/in/michaelolawale/',
				kind: 'source'
			}
		]
	},
	{
		title: 'Cross-Platform Consulting',
		description:
			'Contract and consulting delivery across React Native, Ionic, Angular, and frontend systems for distributed teams and complex product environments.',
		status: 'Consulting work',
		accent: 'bg-violet-400',
		technologies: ['React Native', 'Ionic', 'Angular', 'TypeScript'],
		links: [{ label: 'Overview', href: '/work#cross-platform-consulting', kind: 'case-study' }]
	},
	{
		title: 'Mobile Commerce and Logistics Apps',
		description:
			'Mobile product work across commerce and logistics, including fashion e-commerce, operational workflows, and products designed for fast-moving markets.',
		status: 'Shipped apps',
		accent: 'bg-purple-600',
		technologies: ['React Native', 'TypeScript', 'MobX', 'Mobile UX'],
		links: [
			{
				label: 'Overview',
				href: '/work#mobile-commerce-and-logistics-apps',
				kind: 'case-study'
			},
			{ label: 'GitHub', href: 'https://github.com/mykelcodes', kind: 'source' }
		]
	}
];

export const careerHighlights = [
	'Lead React Native Engineer, VP at JPMorganChase, working on high-trust mobile engineering in London.',
	'10+ years building across fintech, health tech, travel, logistics, commerce, and consulting teams in Africa, North America, and Europe.',
	'Led and shipped multiple mobile applications for major banking institutions, including team leadership, hiring, onboarding, and delivery ownership.'
];

export const currentFocus = [
	'Expo and React Native architecture for reliable, high-quality mobile products',
	'AI-enabled mobile experiences that turn complex workflows into clear product moments',
	'Founder-led product systems and tools that make useful ideas easier to ship'
];

export const timeline = [
	{
		period: '2025 - Now',
		title: 'Lead React Native Engineer, VP - JPMorganChase',
		detail: 'Leading React Native engineering work in a high-trust financial environment, with a focus on mobile architecture, Expo, TypeScript, quality, and delivery.'
	},
	{
		period: '2023 - 2025',
		title: 'Senior React Native Engineer - Mojo',
		detail: 'Built and scaled a React Native AI application for a health product, balancing product polish, reliability, and fast iteration.'
	},
	{
		period: '2022 - 2023',
		title: 'Senior Software Engineer - Tourlane',
		detail: 'Enhanced high-performance travel web applications in Berlin with TypeScript, React, and responsive frontend engineering.'
	},
	{
		period: '2021 - 2022',
		title: 'Senior Frontend Engineer - Forto',
		detail: 'Delivered logistics frontend systems with React, TypeScript, MobX, Material UI, and product-focused engineering practices.'
	},
	{
		period: '2021 - 2022',
		title: 'Software Engineer - Modus Create',
		detail: 'Contributed to cross-platform applications across React Native, Ionic, Angular, and distributed consulting environments.'
	},
	{
		period: '2019 - 2021',
		title: 'Senior Frontend / Mobile Engineer - First Bank of Nigeria',
		detail: 'Managed mobile and web applications, drove new digital solutions, protected brand consistency, and collaborated closely with product and design teams.'
	},
	{
		period: '2015 - 2019',
		title: 'Head of Mobile Applications / Software Engineer - Longbridge Technologies',
		detail: 'Led mobile application delivery for major banks, built commerce experiences, mentored engineers, and helped establish mobile product capability across client systems.'
	}
];

export const expertise = [
	'React Native',
	'Expo',
	'TypeScript',
	'Mobile architecture',
	'Frontend systems',
	'React',
	'Angular',
	'Ionic',
	'Flutter',
	'Swift',
	'Design systems',
	'AI mobile products',
	'Fintech platforms',
	'SvelteKit',
	'Technical leadership'
];

export const principles = [
	{
		title: 'Make the important thing obvious',
		description:
			'Great products lower the cognitive cost of action. The interface, data model, and business logic should all point in the same direction.'
	},
	{
		title: 'Build with pace and taste',
		description:
			'Speed matters, but so does the judgment to remove noise, protect trust, and ship the version people can believe in.'
	},
	{
		title: 'Prefer systems that compound',
		description:
			'The best work keeps paying rent: reusable patterns, clearer decisions, stronger teams, and tools that create future leverage.'
	}
];

export const metrics = [
	{ value: '10+', label: 'Years building software products' },
	{ value: '3', label: 'Continents worked across: Africa, North America, and Europe' },
	{ value: '6+', label: 'Mobile applications initiated, led, or shipped' },
	{ value: '5+', label: 'Industries touched: fintech, health, travel, logistics, commerce' }
];

export const impactAreas = [
	'Fintech and banking',
	'AI mobile products',
	'Health tech',
	'Travel platforms',
	'Logistics systems',
	'Commerce',
	'Cross-platform mobile apps',
	'Design-system implementation',
	'Engineering leadership'
];

export const testimonials = [
	{
		quote: 'A seasoned technologist with experience across fintech, logistics, health, travel, and commerce, shaped by teams across continents.',
		author: 'Profile',
		role: 'Global product perspective'
	},
	{
		quote: 'The through-line is reliable mobile delivery: product polish, reusable code, brand consistency, and systems that scale across teams.',
		author: 'Delivery',
		role: 'Mobile engineering pattern'
	}
];

export const writing = [
	{
		title: 'Building Mobile Products People Can Trust',
		excerpt:
			'Notes on reliability, product judgment, and the invisible engineering choices behind high-trust mobile experiences.',
		date: '2026-05-12',
		readingTime: '6 min read',
		tags: ['Mobile', 'Product', 'Engineering']
	},
	{
		title: 'What Global Teams Teach You About Product Work',
		excerpt:
			'Lessons from building with teams across Africa, North America, and Europe in fintech, logistics, travel, and health.',
		date: '2026-04-24',
		readingTime: '4 min read',
		tags: ['Leadership', 'Teams']
	},
	{
		title: 'Shipping Tastefully With AI',
		excerpt:
			'A practical lens for using AI in product teams without letting automation flatten judgment, quality, or craft.',
		date: '2026-03-30',
		readingTime: '7 min read',
		tags: ['AI', 'Engineering']
	}
];

export const routes = ['/', '/about', '/work', '/contact'];
