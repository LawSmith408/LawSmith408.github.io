---
layout: page
title: energy from motion
description: compliant electrostatic generators for ocean wave energy
img: assets/img/hasel/thumbnail_energy.gif
importance: 1
category: move like nature
related_publications: false
---

Waves arriving at the world's coastlines deposit mechanical energy at spatial densities reaching **75 kW/m²** - roughly twenty times what the sun delivers to the same footprint. That energy runs around the clock, is largely indifferent to daily weather, and can be forecast accurately three days ahead. Forty percent of the world's population lives near a coast, and the richest wave resources sit off the western coasts of the Americas and Europe, close to the people who need the power.

Installed wave energy capacity is still less than **0.1%** of wind, solar, or hydroelectric output.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hasel/wave_harvesters.png" title="compliant generators tethered to the sea floor, driven by the rise and fall of passing waves" style="width:100%" %}
    </div>
</div>
<div class="caption">
    Wave motion drives buoyant floats tethered to the sea floor. The resulting extension of a compliant generator is converted to electrical energy and delivered to the grid.
</div>

The gap isn't a lack of energy - it's that the coastal environment punishes conventional machinery. Storm loading can reach a hundred times the average. Electromagnetic generators, the workhorses of wind and hydro, want to spin above 500 Hz, while ocean waves oscillate below 0.5 Hz; bridging that gap takes gearboxes and transmissions that are expensive to maintain in salt water. And waves are stubbornly irregular in amplitude, phase, and direction, so a device tuned for one sea state is mismatched to the next.

## a compliant approach

Supported by an [Alexander von Humboldt Research Fellowship](https://is.mpg.de/en/news/humboldt-fellow-from-the-us-conducts-research-in-robotics-to-one-day-harvest-energy-from-ocean-waves), I spend two years at the [Max Planck Institute for Intelligent Systems](https://is.mpg.de/en) asking what a generator should look like if it were designed for waves from the start, rather than adapted from machinery built for something else.

The answer I'm pursuing comes from the organisms that already thrive there. Kelp and seaweed survive enormous hydrodynamic loads not by resisting them but by yielding - going with the flow, shedding stress through compliance. Soft electrostatic transducers can work the same way: instead of spinning a rotor, they convert shape change directly into electrical charge. They are power-dense, tolerate harsh environments, and operate across a wide band of input frequencies, which is exactly the mismatch that defeats electromagnetic designs.

The work runs along three lines:

- **material fundamentals** - characterizing how thin dielectric films fail under sustained electrical and mechanical stress, using a custom fixture that puts up to 10 kV across layers as thin as 10 µm. Dielectric breakdown at this scale is defect-driven and statistical, and it sets the ceiling on everything above it.
- **computational design** - building coupled electrostatic and continuum-mechanics models so the design space can be explored numerically rather than through costly build-test cycles. Models here are design tools, not ends in themselves.
- **experimental validation** - fabricating prototypes, characterizing them on custom test fixtures, and ultimately testing under real hydrodynamic loading in a wave chamber.

## recent progress

Our work in [Advanced Science](https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.76834) established how to maximize the energy output of soft electrohydraulic (HASEL) generators - a close cousin of the devices at the center of this project, and a proving ground for the modeling approach.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="lazy" path="assets/img/publication_preview/TN_HasGen.png" title="generator operating cycle on the voltage-charge plane" style="width:100%" %}
    </div>
</div>
<div class="caption">
    A generator's operating cycle traces a contour on the voltage-charge plane. The enclosed area is the energy harvested per cycle, bounded by the minimum and maximum capacitance the device can reach.
</div>

A quasi-static analytical model explains the mechanisms governing generator behavior and maps their operational limits on work-conjugate planes, producing a design roadmap rather than a single optimized device. The model surfaced a result that runs against intuition: **a compressive force produces greater capacitance change, and more electrical energy, than the same force applied in tension.** Designing to that insight, the optimized generator reached a specific energy of **15 J/kg**, specific power of **43 W/kg**, and conversion efficiency of **40%** - new benchmarks in every metric measured.

## why it matters

Solar and wind have had decades of research funding and matured into robust sectors. Wave energy is still early on its curve, which is precisely why the returns on getting it right are large. Zero-emission grid models consistently show that a diverse portfolio of renewables, matched to regional conditions, beats a narrow one - and for coastal regions, waves are the resource sitting unused just offshore.
