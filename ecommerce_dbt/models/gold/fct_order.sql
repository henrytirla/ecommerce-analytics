{{config(
    materialized='table'
)}}

select
      transaction_id,
      customer_id,
      product_id,
      order_date,
      quantity,
      price,
      quantity * price as total_amount
from {{ ref('sl_ecommerce_sales') }}