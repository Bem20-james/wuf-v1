export interface Partner {
  name: string;
  logo?: string;
  accent: string;
}

export const partners: Partner[] = [
  {
    name: "UNICEF Nigeria",
    logo: "/impact/partner1.jpg",
    accent: "#009EDB",
  },
  {
    name: "Bill & Melinda Gates Foundation",
    logo: "/impact/partner2.png",
    accent: "#E8242B",
  },
  {
    name: "Federal Ministry of Education",
    logo: "/impact/partner5.jpg",
    accent: "#007A3D",
  },
  {
    name: "Access Bank Foundation",
    logo: "/impact/partner6.png",
    accent: "#E31837",
  },
  {
    name: "Tony Elumelu Foundation",
    logo: "/impact/partner3.jpg",
    accent: "#C8A84B",
  },
  {
    name: "World Food Programme",
    logo: "/impact/partner4.png",
    accent: "#0A6FA6",
  },
];
