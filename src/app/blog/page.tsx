"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "@/src/components/sections/Footer";
import Container from "@/src/components/Ui/Container";
import { getPosts } from "@/src/lib/queries";
import { urlFor } from "@/src/lib/sanityImage";

const Page = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <section>
      <div className="flex flex-col items-center justify-center py-10 text-white bg-[url('/images/serviceimg1.png')] bg-cover bg-center">
        <Container className="text-center">
          <h1 className="text-5xl font-bold text-[#FF0100] mb-5">Blogs</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Container>
      </div>

      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div key={p._id}>
              <h2 className="text-xl font-semibold mb-3">{p.title}</h2>

              {p.image && (
                <Image
                  src={urlFor(p.image).width(400).url()}
                  width={400}
                  height={250}
                  alt={p.title}
                />
              )}
            </div>
          ))}
        </div>
      </Container>

      <Footer />
    </section>
  );
};

export default Page;
