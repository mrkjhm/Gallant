



type RemixIcon =
  | "ri-donut-chart-fill"
  | "ri-speak-ai-line"
  | "ri-edit-circle-line"
  | "ri-swap-2-line";

interface Service {
  slug: string;
  title: string;
  icon: RemixIcon;
  desc1: string;
  desc: string;
  image: string;
}

export const Services: Service[] = [
  {
    slug: "service-1",
    title: "Service 1",
    image: "/images/service1.jpg",
    icon: "ri-donut-chart-fill",
    desc1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, odit consequuntur quod iste, error facilis distinctio, dolor eius aspernatur architecto accusantium at. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, odit consequuntur quod iste, error facilis distinctio, dolor eius aspernatur architecto accusantium at.",
  },
  {
    slug: "service-2",
    title: "Service 2",
    image: "/images/service2.jpg",
    icon: "ri-donut-chart-fill",
    desc1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, odit consequuntur quod iste, error facilis distinctio, dolor eius aspernatur architecto accusantium at. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, odit consequuntur quod iste, error facilis distinctio, dolor eius aspernatur architecto accusantium at.",
  },
  {
    slug: "service-3",
    title: "Service 3",
    image: "/images/service3.jpg",
    icon: "ri-donut-chart-fill",
    desc1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, odit consequuntur quod iste, error facilis distinctio, dolor eius aspernatur architecto accusantium at. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, odit consequuntur quod iste, error facilis distinctio, dolor eius aspernatur architecto accusantium at.",
  },
  {
    slug: "service-4",
    title: "Service 4",
    image: "/images/service1.jpg",
    icon: "ri-donut-chart-fill",
    desc1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, odit consequuntur quod iste, error facilis distinctio, dolor eius aspernatur architecto accusantium at. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, odit consequuntur quod iste, error facilis distinctio, dolor eius aspernatur architecto accusantium at.",
  },
  {
    slug: "service-5",
    title: "Service 5",
    image: "/images/service2.jpg",
    icon: "ri-donut-chart-fill",
    desc1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, odit consequuntur quod iste, error facilis distinctio, dolor eius aspernatur architecto accusantium at. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, odit consequuntur quod iste, error facilis distinctio, dolor eius aspernatur architecto accusantium at.",
  },
  {
    slug: "service-6",
    title: "Service 6",
    image: "/images/service3.jpg",
    icon: "ri-donut-chart-fill",
    desc1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, odit consequuntur quod iste, error facilis distinctio, dolor eius aspernatur architecto accusantium at. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, odit consequuntur quod iste, error facilis distinctio, dolor eius aspernatur architecto accusantium at.",
  },
];
