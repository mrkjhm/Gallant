"use client";

import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "../constant/NavLinks";
import ArrowButton from "../Ui/ArrowButton";
import Container from "../Ui/Container";

const Footer = () => {
  return (
    <section>
      <div className="py-15 bg-[#1d1f22] text-[#9ca0a7]">
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <Image
              src="/GKlogo.png"
              alt="GK Logo"
              width={150}
              height={75}
              className="w-2/3 h-auto"
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              nobis, minus amet sapiente sed eaque, exercitationem.
            </p>
            <div className="flex flex-col">
              <p className="font-semibold">Socials</p>
              <div className="flex gap-1 text-xl">
                <i className="ri-global-line"></i>
                <i className="ri-linkedin-box-fill"></i>
                <i className="ri-facebook-circle-fill"></i>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:ml-20 ml-0">
            <h3 className="font-semibold uppercase md:mb-6 mb-2 text-[#e3bd6a]">Menu</h3>
            <div className="flex flex-col md:gap-3 gap-1 w-fit">
              {NavLinks.map((item, index) => (
                <Link key={index} href={item.href} className="hover:underline">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold uppercase md:mb-6 mb-2 text-[#cfa853]">Contact Us</h3>
            <div className="space-y-3">
              <div className="space-y-1">
                <h4 className="font-bold">Address</h4>
                <p>
                  12th Floor, The Trade & Financial Tower Unit 1206, 32nd Street
                  & 7th Avenue Bonifacio Global City, Taguig 1634.
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold">Landline</h4>
                <p>(+63) 7902 0900</p>
              </div>
              <Link href="/contact-us">
                <ArrowButton
                  label="Get in touch"
                  direction="up-right"
                  className="ri-arrow-right-up-long-line"
                />
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <p className="text-center md:text-base text-sm py-3">
        Copyright © 2025 by Gallant Knight Manufacturing Corp.
      </p>
    </section>
  );
};

export default Footer;
