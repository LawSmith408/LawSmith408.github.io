---
layout: page
permalink: /publications/
title: publications
description: 
years: [2026,2024,2023,2022,2021,2020]
nav: true
nav_order: 3
---
<!-- _pages/publications.md -->
<!-- {# <h2 class="year">{{y}}</h2> #} -->
<div class="publications">

{%- for y in page.years %}
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>

