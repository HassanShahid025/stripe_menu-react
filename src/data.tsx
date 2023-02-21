import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import React from "react";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";
import { JsxElement } from "typescript";

export interface iLinks {
  page:string;
  links: {label: string, url: string,}[]
}

const sublinks = [
  {
    page: "products",
    links: [
      { label: "payment", url: "/products" },
      { label: "terminal", url: "/products" },
      { label: "connect", url: "/products" },
    ],
  },
  {
    page: "developers",
    links: [
      { label: "plugins", url: "/products" },
      { label: "libraries", url: "/products" },
      { label: "help", url: "/products" },
      { label: "billing", url: "/products" },
    ],
  },
  {
    page: "company",
    links: [
      { label: "about", url: "/products" },
      { label: "customers", url: "/products" },
    ],
  },
];

export default sublinks;
