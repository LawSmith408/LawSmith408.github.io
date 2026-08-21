---
layout: page
title: energy from motion
description: compliant electrostatic generators for ocean wave energy
img: assets/img/hasel/thumbnail_energy.gif
importance: 1
category: move like nature
related_publications: false
---

Waves arriving at the world's coastlines deposit mechanical energy at spatial densities reaching **75 kW/m²** - roughly twenty times what the sun delivers to the same footprint. That energy runs around the clock, is largely indifferent to daily weather, and can be forecast accurately three days ahead. Forty percent of the world's population lives near a coast, with the richest wave resources sitting off the western coasts of the Americas and Europe.

Installed wave energy capacity is still less than **0.1%** of wind, solar, or hydroelectric output.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hasel/wave_harvesters.png" title="compliant generators tethered to the sea floor, driven by the rise and fall of passing waves" style="width:100%" %}
    </div>
</div>
<div class="caption">
    Wave motion drives buoyant floats tethered to the sea floor. The resulting extension of a compliant generator is converted to electrical energy and delivered to the grid.
</div>

Several fundamental hurdles prevent straightforward implementaiton of electromechanical wave energy harvesing: above all, the coastal environment punishes conventional machinery. Storm loading can reach a hundred times the average. Electromagnetic generators, the workhorses of wind and hydro, require continuous rapid rotation, whereas waves oscillate intermittently and below 1Hz. This requires transmissions that are expensive to maintain in salt water.

## a compliant approach

Supported by an [Alexander von Humboldt Research Fellowship](https://is.mpg.de/en/news/humboldt-fellow-from-the-us-conducts-research-in-robotics-to-one-day-harvest-energy-from-ocean-waves), I am spending two years at the [Max Planck Institute for Intelligent Systems](https://is.mpg.de/en) asking what a generator should look like if it were designed for waves from the start, rather than adapted from machinery built for something else.

 Soft electrostatic transducers can convert shape change directly into electrical energy. They are power-dense, tolerate harsh environments, and operate across a wide band of input frequencies, an outstanding challege for electromagnetic designs.

The work runs along three lines:

- **material fundamentals** - characterizing how thin dielectric films fail under sustained electrical and mechanical stress, using a custom fixture that applies high fields across small dielectric gaps 
- **computational design** - building coupled electrostatic and continuum-mechanics models so the design space can be explored numerically rather than through costly build-test cycles
- **experimental validation** - fabricating prototypes, characterizing them on custom test fixtures, and ultimately testing under real hydrodynamic loading in a wave chamber

## recent progress

Our work in [Advanced Science](https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.76834) established how to maximize the energy output of soft electrohydraulic (HASEL) generators - a canonical example of electrostatic transducer which forms the basis for the remainder of my research.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="lazy" path="assets/img/hasel/F1_3.png" title="generator operating cycle on the voltage-charge plane" style="width:100%" %}
    </div>
</div>
<div class="caption">
    A generator's operating cycle traces a contour on the voltage-charge plane. The enclosed area is the energy harvested per cycle, bounded by the minimum and maximum capacitance the device can reach.
</div>

A quasi-static analytical model explains the mechanisms governing generator behavior and maps their operational limits on work-conjugate planes, producing a design roadmap rather than a single optimized device.  Our optimized design reached a specific energy of **15 J/kg**, specific power of **43 W/kg**, and conversion efficiency of **40%** - new benchmarks in all three metrics.

## why it matters

Solar and wind have had decades of research funding and matured into robust sectors. Wave energy harvesting is an underdeveloped technology; research investments here will be especially fruitful. Models show that a diverse portfolio of renewable energy technologies is required for the future grid - wave energy awaits!s

---

**Competencies:** coupled electrostatic-continuum simulation · nonlinear FEA (Abaqus) · high-voltage test fixture design · dielectric characterization

*See [competences]({{ '/cv/' | relative_url }}#competences) and [work history]({{ '/cv/' | relative_url }}#work-history) on my CV.*
