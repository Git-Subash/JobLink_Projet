import React from "react";
import { Transition } from "@headlessui/react";

export const SlidebarAnimation = ({ children, showing }) => {
  return (
    <Transition
      show={showing}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full">
      {children}
    </Transition>
  );
};
export const DialogAnimation = ({ children, showing }) => {
  return (
    <Transition
      show={showing}
      enter="ease-out duration-300"
      enterFrom="opacity-0 transform-[scale(95%)]"
      enterTo="opacity-100 transform-[scale(100%)]"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 transform-[scale(100%)]"
      leaveTo="opacity-0 transform-[scale(95%)]">
      {children}
    </Transition>
  );
};

export const AlertAnimation = ({ children, showing }) => {
  return (
    <Transition
      show={showing}
      enter="ease-out duration-300"
      enterFrom="opacity-0 transform-[scale(95%)]"
      enterTo="opacity-100 transform-[scale(100%)]"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 transform-[scale(100%)]"
      leaveTo="opacity-0 transform-[scale(95%)]">
      {children}
    </Transition>
  );
};
