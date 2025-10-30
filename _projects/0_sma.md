---

layout: page
title: Nitinol Phase Transition
description: A Bolus Dose Mechanism
img: assets/img/TN_SMAHinge.png
importance: 1
category: work
related_publications: true
---------------------------

## Delivering Precise Drug Doses

Nickel-Titanium Alloyys

Over the course of several years while I worked towards my graduate degrees, I built a coupled electrical/thermal/mechanical model of shape memory alloy (SMA) actuators capable of predicting their performance in medical devices. 

The dynamics are handled with a nonlinear Newton-Raphson solver that I wrote using the equations of state, along with a custom adaptive-step time integration scheme.

At our clients’ request I worked closely with Mathworks developers for six months to re-implement the model as a custom Simulink block, enabling effective evaluation of a number of alternative designs and implementations, and supporting the down-selection based on high level design criteria like energy consumption and reliability.

I completed this model in my capacity as an numerical modeling specialist at FPrin LLC, a trusted first-principles based engineering consulting firm specializing in development of breakthrough medical device products. A full whitepaper describing the model implementation can be obtained from their resources page.

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/sma_1.webp" title="Phase Transition Diagram" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
