import Link from 'next/link';

// New service page copy (written for the redesign, in the voice of the existing service pages).
export default function Body() {
  return (
    <>
      <h3>ERP System</h3>
      <p>
        As a business grows, its information spreads out: accounts in one tool, stock in a spreadsheet, orders in email, people data somewhere else. Teams spend hours reconciling numbers and still disagree on which figure is right.
      </p>
      <p>
        An Enterprise Resource Planning (ERP) system brings all of it together. Finance, inventory, purchasing, manufacturing, sales and HR run on one platform and share one source of truth. At Exult IT Solution, we plan, customise and implement ERP systems that fit the way your business actually works.
      </p>

      <h3>Our Expertise</h3>
      <p>
        Whether you need a custom-built ERP or want to get more out of an established platform, our team handles every step.
      </p>
      <p className="tick-item"><strong>Custom ERP development: </strong>Tailor-made ERP software built around your processes, with only the modules you need and room to add more as you grow.</p>
      <p className="tick-item"><strong>ERP implementation & customisation: </strong>Configuration, custom modules and workflows for leading ERP platforms, adapted to your industry and reporting needs.</p>
      <p className="tick-item"><strong>Integration: </strong>We connect your ERP with your <Link href="/services/crm-development-company/">CRM</Link>, <Link href="/services/ecommerce-web-development/">e-commerce store</Link>, payment gateways, shipping partners and existing applications, so data flows without manual re-entry.</p>
      <p className="tick-item"><strong>Data migration: </strong>Careful transfer of your existing records, with validation at every stage, so nothing is lost when you switch systems.</p>
      <p className="tick-item"><strong>Cloud & mobile access: </strong>Secure, <Link href="/services/cloud-computing-services/">cloud-hosted</Link> ERP that your team can use from the office, the warehouse floor or a mobile device.</p>
      <p className="tick-item"><strong>Training & support: </strong>Hands-on training for your team and ongoing maintenance, upgrades and improvements after go-live.</p>

      <h4>Core ERP modules we deliver</h4>
      <p className="tick-item"><strong>Finance & accounting: </strong>General ledger, invoicing, payables, receivables, budgeting and financial reports.</p>
      <p className="tick-item"><strong>Inventory & warehouse: </strong>Real-time stock levels, multi-location tracking, reorder points and barcode support.</p>
      <p className="tick-item"><strong>Purchasing & supply chain: </strong>Vendor management, purchase orders, approvals and delivery tracking.</p>
      <p className="tick-item"><strong>Manufacturing & production: </strong>Bills of materials, production planning, work orders and quality control.</p>
      <p className="tick-item"><strong>Sales & orders: </strong>Quotations, order processing, pricing rules and customer accounts.</p>
      <p className="tick-item"><strong>HR & payroll: </strong>Employee records, attendance, leave and payroll processing.</p>

      <h4>Why do you need an ERP system?</h4>
      <p>
        When every department works from the same live data, decisions get faster and mistakes get rarer. You know exactly what is in stock, what is owed, what is being produced and what each customer has ordered, without chasing anyone for an update.
      </p>
      <p>
        An ERP system also scales with you. Adding a new location, product line or team becomes a configuration change rather than a new spreadsheet.
      </p>

      <h4>Why choose us?</h4>
      <p>
        If you want an ERP that your team actually enjoys using and that pays for itself, make us a part of your journey.
      </p>
      <p className="tick-item">We deliver cost-effective solutions with a clear implementation plan and timeline</p>
      <p className="tick-item">Better Return on Investment (ROI) through automation and fewer manual errors</p>
      <p className="tick-item">We stay updated with the latest industry standards and platforms</p>
      <p>
        <strong>For us, nothing is better than a happy and satisfied customer.</strong>
      </p>
    </>
  );
}
