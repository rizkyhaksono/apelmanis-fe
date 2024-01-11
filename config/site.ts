export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Apel Manis Kost",
	description: "Kost Kota Madiun Strategis dan Bersih",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "About",
      href: "/about",
    },
		{
      label: "Facilities",
      href: "/facilities",
    },
    {
      label: "Contact",
      href: "/contact",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "About",
      href: "/about",
    },
		{
      label: "Facilities",
      href: "/facilities",
    },
    {
      label: "Contact",
      href: "/contact",
    }
	],
	links: {
		github: "https://github.com/rizkyhaksono",
		twitter: "https://twitter.com/rizkyhaksono"
	},
};
