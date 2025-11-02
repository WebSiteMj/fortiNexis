import React from "react";
import { Accordion, AccordionPanel, AccordionTitle, AccordionContent } from "flowbite-react";

export default function AccordionComponent() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Accordion collapseAll>
        <AccordionPanel>
          <AccordionTitle>What is Flowbite?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-700 dark:text-gray-400 font-medium">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
              dropdowns, modals, navbars, and more.
            </p>
            <p className="text-gray-700 dark:text-gray-400 font-medium">
              Check out this guide to learn how to&nbsp;
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-cyan-600 hover:underline dark:text-cyan-500 font-semibold"
              >
                get started
              </a>
              &nbsp;and start developing websites faster with components on top of Tailwind CSS.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
          <AccordionTitle>Is there a Figma file available?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-700 dark:text-gray-400 font-medium">
              Flowbite is first conceptualized and designed using Figma, so everything in the library has a design equivalent.
            </p>
            <p className="text-gray-700 dark:text-gray-400 font-medium">
              Check out the
              <a
                href="https://flowbite.com/figma/"
                className="text-cyan-600 hover:underline dark:text-cyan-500 font-semibold"
              >
                Figma design system
              </a>
              &nbsp;based on Tailwind CSS utilities and Flowbite components.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
          <AccordionTitle>Differences between Flowbite and Tailwind UI?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-700 dark:text-gray-400 font-medium">
              Flowbite is open-source under MIT, Tailwind UI is paid. Flowbite has smaller standalone components; Tailwind UI offers full page sections.
            </p>
            <p className="mb-2 text-gray-700 dark:text-gray-400 font-medium">
              You can use both Flowbite, Flowbite Pro, and Tailwind UI together.
            </p>
            <p className="mb-2 text-gray-700 dark:text-gray-400 font-medium">Learn more:</p>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 font-medium">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500 font-semibold"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-cyan-600 hover:underline dark:text-cyan-500 font-semibold"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
}
