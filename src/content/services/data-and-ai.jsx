import Link from 'next/link';

// New service page copy (written for the redesign, in the voice of the existing service pages).
export default function Body() {
  return (
    <>
      <h3>Data & AI</h3>
      <p>
        Every business creates data: orders, invoices, website visits, support tickets, sensor readings. Most of it sits unused in separate systems. Data & AI services turn that scattered information into a clear picture of your business, and then put it to work.
      </p>
      <p>
        At Exult IT Solution, we start with the questions you need answered, not with the technology. Which products will sell next quarter? Which customers are likely to leave? Where is time being lost in your operation? We build the data foundation and the intelligent tools that answer them, reliably and every day.
      </p>

      <h3>Our Expertise</h3>
      <p>
        From collecting raw data to shipping AI features your customers use, our team covers the full path.
      </p>
      <p className="tick-item"><strong>Data engineering & pipelines: </strong>We connect your databases, CRM, ERP, e-commerce store and third-party tools, then clean and combine the data automatically so every report starts from the same trusted numbers.</p>
      <p className="tick-item"><strong>Data warehousing: </strong>We design cloud data warehouses on platforms such as AWS, Azure and Google Cloud that keep your history organised, secure and fast to query.</p>
      <p className="tick-item"><strong>Business intelligence & dashboards: </strong>Live dashboards for leadership, sales, finance and operations, so decisions are made on today’s figures instead of last month’s spreadsheet.</p>
      <p className="tick-item"><strong>Machine learning models: </strong>Forecasting, recommendation, classification and anomaly-detection models built in Python and trained on your own data, then deployed where your team already works.</p>
      <p className="tick-item"><strong>Generative AI & assistants: </strong>Chatbots, document search and AI assistants that answer questions from your own knowledge base, draft responses and take routine work off your team’s plate.</p>
      <p className="tick-item"><strong>Process automation: </strong>Intelligent workflows that read documents, route requests and update your systems without manual re-entry.</p>

      <h4>Why do you need to focus on Data & AI?</h4>
      <p>
        Your competitors are already using their data to price smarter, serve customers faster and cut waste. Decisions based on instinct alone get harder to defend every year.
      </p>
      <p>
        The good news: you do not need a large data science department to benefit. A well-built data foundation and a few targeted AI features can deliver results within weeks, and they grow with your business.
      </p>

      <h4>How we work</h4>
      <p className="tick-item"><strong>Discover: </strong>We review your systems, your data and your goals, and agree on the use cases with the clearest return.</p>
      <p className="tick-item"><strong>Build: </strong>We set up the pipelines, models and dashboards in short iterations, so you see working results early.</p>
      <p className="tick-item"><strong>Deploy & support: </strong>We integrate everything with your existing <Link href="/services/crm-development-company/">CRM</Link>, <Link href="/services/erp-system/">ERP</Link> and <Link href="/services/cloud-computing-services/">cloud</Link> setup, then monitor, retrain and improve over time.</p>

      <h4>Why choose us?</h4>
      <p>
        If you want practical AI that solves real business problems, not experiments that never leave the lab, make us a part of your journey.
      </p>
      <p className="tick-item">We put data security and privacy first in every solution</p>
      <p className="tick-item">Solutions built around measurable outcomes and a better Return on Investment (ROI)</p>
      <p className="tick-item">We stay updated with the latest tools, models and industry standards</p>
      <p>
        <strong>For us, nothing is better than a happy and satisfied customer.</strong>
      </p>
    </>
  );
}
