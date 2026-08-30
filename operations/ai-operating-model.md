# CASA 1569 — AI-Native Operating Model

## Objective

Build CASA 1569 so one founder can operate the business with specialised AI agents and external fulfilment/production partners.

The agents assist the founder. They do not become unbounded autonomous decision-makers.

## Agent roles

### 1. CEO Briefing Agent
Produces:
- daily sales/status summary;
- cash position;
- inventory risks;
- supplier actions;
- customer issues;
- top decisions required.

### 2. Sourcing Agent
Maintains:
- supplier pipeline;
- samples;
- landed costs;
- MOQs;
- lead times;
- certifications;
- lot availability;
- correspondence drafts.

### 3. Brand Steward
Checks everything against:
- brand guide;
- tone;
- historical integrity;
- visual consistency.

### 4. Chronicler / Content Agent
Produces:
- journal drafts;
- origin stories;
- social content;
- email;
- SEO;
- producer features.

### 5. Growth Agent
Tracks:
- traffic;
- conversion;
- CAC;
- AOV;
- repeat rate;
- email acquisition;
- campaign tests.

### 6. Customer Steward
Handles routine:
- order status;
- brewing help;
- product selection;
- refunds within authorised rules;
- subscription support later.

Escalates exceptions.

### 7. Finance & Operations Agent
Maintains:
- reconciliation;
- inventory forecast;
- purchase recommendations;
- margin reporting;
- cash runway;
- co-packer/3PL issues.

## Founder approval gates

Founder retains approval for:
- contracts;
- payments;
- POs;
- new suppliers;
- product selection;
- new SKU launch;
- material price changes;
- legal/compliance claims;
- health claims;
- public crisis response;
- major refunds;
- final packaging;
- trademark decisions.

## Repository behaviour

Every agent should write durable company knowledge into this repo rather than leaving it only in chat history.

Where appropriate:
- research → `/research`
- decision → `/decisions`
- supplier update → `/sourcing`
- brand change → `/brand`
- workflow → `/operations`
