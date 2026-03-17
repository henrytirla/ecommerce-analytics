---
title: Ecommerce KPI Dashboard (Monthly)
---

This dashboard is powered by your dbt **gold** models in Postgres:
- `ecomm.fct_order`
- `ecomm.dim_customer`



```sql filters
select
  min(date_trunc('month', order_date)::date) as min_month,
  max(date_trunc('month', order_date)::date) as max_month
from ecomm.fct_order
```

```sql countries
select distinct
  coalesce(country,'Unknown') as country
from ecomm.dim_customer
order by 1
```

<Dropdown data={countries} name=country value=country>
  <DropdownOption value="%" valueLabel="All Countries" />
</Dropdown>

```sql years
select distinct
  date_part('year', order_date)::int as year
from ecomm.fct_order
order by 1
```

<Dropdown data={years} name=year value=year>
  <DropdownOption value="%" valueLabel="All Years" />
</Dropdown>

---

## Executive Summary

```sql kpis
with base as (
  select
    o.transaction_id,
    o.customer_id,
    o.order_date,
    o.quantity,
    o.total_amount,
    c.country
  from ecomm.fct_order o
  left join ecomm.dim_customer c
    on o.customer_id = c.customer_id
  where coalesce(c.country,'Unknown') like '${inputs.country.value}'
    and date_part('year', o.order_date) :: text like '${inputs.year.value}'
)
select
  sum(total_amount) as revenue,
  count(*) as orders,
  sum(quantity) as units,
  count(distinct customer_id) as unique_customers,
  (sum(total_amount) / nullif(count(*),0)) as aov,
  (sum(quantity)::numeric / nullif(count(*),0)) as items_per_order,
  (sum(total_amount) / nullif(count(distinct customer_id),0)) as revenue_per_customer
from base
```

<Grid cols=3>
  <BigValue data={kpis} value=revenue fmt=usd0 title="Total Revenue" />
  <BigValue data={kpis} value=orders fmt=num0 title="Orders" />
  <BigValue data={kpis} value=aov fmt=usd2 title="AOV" />
  <BigValue data={kpis} value=units fmt=num0 title="Units Sold" />
  <BigValue data={kpis} value=unique_customers fmt=num0 title="Unique Customers" />
  <BigValue data={kpis} value=items_per_order fmt=num2 title="Avg Items / Order" />
  <BigValue data={kpis} value=revenue_per_customer fmt=usd2 title="Revenue / Customer" />
</Grid>

---

## Trends (Monthly)

```sql monthly
with base as (
  select
    date_trunc('month', o.order_date)::date as month,
    o.customer_id,
    o.quantity,
    o.total_amount,
    coalesce(c.country,'Unknown') as country
  from ecomm.fct_order o
  left join ecomm.dim_customer c
    on o.customer_id = c.customer_id
  where coalesce(c.country,'Unknown') like '${inputs.country.value}'
    and date_part('year', o.order_date) :: text like '${inputs.year.value}'
)
select
  month,
  sum(total_amount) as revenue,
  count(*) as orders,
  (sum(total_amount) / nullif(count(*),0)) as aov,
  sum(quantity) as units,
  count(distinct customer_id) as unique_customers
from base
group by 1
order by 1
```

<Grid cols=2>
  <LineChart data={monthly} title="Revenue" x=month y=revenue />
  <LineChart data={monthly} title="Orders" x=month y=orders />
  <LineChart data={monthly} title="AOV" x=month y=aov />
  <LineChart data={monthly} title="Unique Customers" x=month y=unique_customers />
</Grid>

---

## Geography

```sql revenue_by_country
select
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where date_part('year', o.order_date) :: text like '${inputs.year.value}'
group by 1
order by revenue desc
```

<BarChart data={revenue_by_country} title="Revenue by Country" x=country y=revenue />

---

## Customers

```sql top_customers
select
  c.customer_name,
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${inputs.country.value}'
  and date_part('year', o.order_date) :: text like '${inputs.year.value}'
group by 1,2
order by revenue desc
limit 25
```

<DataTable data={top_customers} rows=25 />

```sql new_vs_returning
with first_order as (
  select
    customer_id,
    min(date_trunc('month', order_date)::date) as first_month
  from ecomm.fct_order
  group by 1
), tagged as (
  select
    date_trunc('month', o.order_date)::date as month,
    case when date_trunc('month', o.order_date)::date = f.first_month then 'New' else 'Returning' end as customer_type,
    o.total_amount,
    o.customer_id,
    coalesce(c.country,'Unknown') as country
  from ecomm.fct_order o
  join first_order f using (customer_id)
  left join ecomm.dim_customer c using (customer_id)
  where coalesce(c.country,'Unknown') like '${inputs.country.value}'
    and date_part('year', o.order_date) :: text like '${inputs.year.value}'
)
select
  month,
  customer_type,
  sum(total_amount) as revenue,
  count(*) as orders,
  count(distinct customer_id) as customers
from tagged
group by 1,2
order by 1,2
```

<BarChart data={new_vs_returning} title="New vs Returning (Revenue)" x=month y=revenue series=customer_type />

---

## Products (using product_id)

```sql top_products
select
  o.product_id,
  sum(o.total_amount) as revenue,
  sum(o.quantity) as units,
  (sum(o.total_amount) / nullif(sum(o.quantity),0)) as avg_selling_price
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${inputs.country.value}'
  and date_part('year', o.order_date) :: text like '${inputs.year.value}'
group by 1
order by revenue desc
limit 25
```

<BarChart data={top_products} title="Top Products by Revenue" x=product_id y=revenue />

<DataTable data={top_products} rows=25 />

---

