# Ecommerce Analytics (dbt + Evidence Reporting)

This repository contains an end-to-end **analytics engineering + BI reporting** mini-project:

- **`ecommerce_dbt/`** — dbt project that builds the analytics models in Postgres
- **`Reporting/`** — Evidence (Evidence.dev) project that renders a KPI dashboard on top of the dbt models

## Architecture (how it fits together)

1. **dbt** builds tables in Postgres (your dev target)
   - Example gold models: `dev_schema.fct_order`, `dev_schema.dim_customer`
2. **Evidence** queries those models and renders a dashboard
   - Local dev server: `http://localhost:3000`
   - Dashboard page: `http://localhost:3000/ecommerce`

> Evidence doesn’t connect to dbt directly — it connects to the *same Postgres database* that dbt builds into.

---

## Prerequisites

- Python + dbt installed (dbt-core + dbt-postgres)
- Node.js + npm installed
- Postgres running locally

---

## Run the dbt project

```bash
cd ecommerce_dbt

# (optional) install packages if you use them
# dbt deps

dbt run
dbt test
```

This materializes your models into Postgres (schema: `dev_schema`).

---

## Run the dashboard (Evidence)

```bash
cd Reporting
npm install

# pulls data from Postgres and generates Evidence query outputs
npm run sources

# start dev server
npm run dev
```

Open:
- Home: http://localhost:3000/ (redirects to the dashboard)
- Dashboard: http://localhost:3000/ecommerce

---

## Build a static portfolio version

If you want a shareable snapshot build:

```bash
cd Reporting
npm run sources
npm run build
```

Static output is generated in `Reporting/build/`.

---

## Notes

- **Credentials:** Evidence stores sensitive DB values in `*.options.yaml` which is gitignored.
- If you change dbt model logic, rerun:
  - `dbt run`
  - `npm run sources`

