import React from "react";
import { Accordion, AccordionPanel, AccordionTitle, AccordionContent } from "flowbite-react";
import { accordionTheme } from "./accordionTheme";

export default function AccordionComponent() {
  return (
    <div className="max-w-4xl mx-auto p-6">
     <Accordion collapseAll theme={accordionTheme}>

        {/* Why FortiNExis */}
        <AccordionPanel>
          <AccordionTitle>Why Smart, Secure, Multi-Sector Digital Innovation</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-700 dark:text-gray-400 font-medium">
              We are a new digital innovation company using <strong>AI, Azure Cloud, and blockchain</strong> to transform healthcare, real estate, community services, fintech, and private crypto trading in Luxembourg.
            </p>
          </AccordionContent>
        </AccordionPanel>

        {/* Problem */}
        <AccordionPanel>
          <AccordionTitle>Problem</AccordionTitle>
          <AccordionContent>
            <ul className="list-disc pl-5 mb-2 text-gray-700 dark:text-gray-400 font-medium space-y-1">
              <li>Fragmented healthcare scheduling and payments.</li>
              <li>Inefficient real estate transactions and notary coordination.</li>
              <li>Disconnected community services.</li>
              <li>Limited secure platforms for private crypto trading.</li>
            </ul>
          </AccordionContent>
        </AccordionPanel>

        {/* Solution */}
        <AccordionPanel>
          <AccordionTitle>Solution</AccordionTitle>
          <AccordionContent>
            <ul className="list-disc pl-5 mb-2 text-gray-700 dark:text-gray-400 font-medium space-y-1">
              <li>Healthcare: AI-driven appointment scheduling and verified doctor reviews with blockchain-secured payments.</li>
              <li>Real Estate: AI-assisted property search, blockchain-secured transactions, and automated notary scheduling.</li>
              <li>Community & FinTech: Unified platforms for engagement, local services, microfinance, and secure payments.</li>
              <li>Private Crypto Exchange: Secure, AI-supported trading of Bitcoin and other cryptocurrencies.</li>
            </ul>
          </AccordionContent>
        </AccordionPanel>

        {/* Technology & Impact */}
        <AccordionPanel>
          <AccordionTitle>Technology Advantage & Impact</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-700 dark:text-gray-400 font-medium">
              <strong>Technology Advantage:</strong> AI intelligence, Azure Cloud scalability, and blockchain security create a trusted, efficient, and decentralized ecosystem.
            </p>
            <p className="mb-2 text-gray-700 dark:text-gray-400 font-medium">
              <strong>Impact:</strong> We address inefficiencies, improve transparency, and unlock new opportunities, positioning Luxembourg as a hub for smart, multi-sector digital innovation.
            </p>
          </AccordionContent>
        </AccordionPanel>

      </Accordion>
    </div>
  );
}
