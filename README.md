# E-commerce Analytics (dbt + Evidence Reporting)

End-to-end analytics engineering mini-project:

- **dbt** transforms raw e-commerce data into clean, business-ready models (Postgres)
- **Evidence (Reporting)** reads those models and serves a KPI dashboard

## Live Dashboard Preview
- https://ecommerce-analytics-iota.vercel.app/ecommerce

## Architecture / Data Transformation Pipeline

![E-commerce analytics architecture](./assets/ecommerce-architecture.jpg)

1. **Data Source** → raw dataset
2. **dbt** transforms raw → cleaned → business-ready models in Postgres
   - Example gold models: `dev_schema.fct_order`, `dev_schema.dim_customer`
3. **Reporting (Evidence)** queries those models and renders a KPI dashboard

---

## Prerequisites

- Python + dbt installed (dbt-core + dbt-postgres)
- Node.js + npm installed
- Postgres running locally

---

## Run the dbt project

```bash
cd ecommerce_dbt

# optional
# dbt deps

dbt run
dbt test
```

Tip: the dbt connection is configured in `~/.dbt/profiles.yml` under the `ecommerce_dbt` profile.

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

```bash
cd Reporting
npm run sources
npm run build
```

Static output is generated in `Reporting/build/`.

---

## Notes

- Evidence stores sensitive DB values in `*.options.yaml` which is gitignored.
- If you change dbt model logic, rerun:
  - `dbt run`
  - `npm run sources`
