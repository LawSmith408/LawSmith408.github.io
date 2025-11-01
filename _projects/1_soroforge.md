---
layout: page
title: soft is strong
description: a new design paradigm for pneumatic soft robots
img: assets/img/soroforge/twist_small2.gif
importance: 1
category: move like nature
related_publications: false
---

A soft robotic system is composed of soft, compliant materials. Soft robots manipulate fragile objects and tolerate large disturbances from their environments better than their traditional "rigid robot" counterparts. 

They're also a perfect example of the **shortcomings** of our traditional design practices. Soft structures are governed by non-intuitive mechanics, are challenging to simulate, are fabricated differently than traditional low-DOF mechanical systems, and are ill-represented by traditional component/subassy/assy hierarchies. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/soroforge/CASE_Gallery_Website2.webp" title="example image" style="width:100%" %}
    </div>
</div>

As a result, soft robot design requires the development of multi-domain expertise (e.g. advanced computer-aided design , nonlinear simulation, and advanced fabrication) - expensive! to fill this gap, I spent three years writing SoRoForge - an open-source design tool which uses implicit geometry modeling, automatic execution of nonlinear FEA simulations, and 3D printing to rethink our design practices.

Instead of relying on familiar but ultimately fragile CAD representations for complex 3D designs, I invoke computational network representations of implicit geometry functions to describe robot shapes.

<iframe width="560" height="315"
  src="https://www.youtube.com/embed/re_9QF8w0bk"
  title="YouTube video"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

The core representations of designs in SoRoForge are, in contrast to traditional CAD:
- volumetric and stable as opposed to surface-based and fragile
- accessible to human and artificial design intelligence
- intimately linked spatial discretizations used for simulation

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/soroforge/FlowChartFinal.webp" title="example image" style="width:100%" %}
    </div>
</div>

High-Performance Simulations
The best models strike a balance between two competing, antagonistic goals:
- realism / accuracy
- computational cost

I investigate the use of shell finite elements in simulating pneumatic soft actuators - this method strikes a more favorable balance between the two objectives than traditional volumetric FEA and helps speed up design exploration. Read more about this research.

<iframe width="560" height="315"
  src="https://www.youtube.com/embed/ddnvE8hdn08?si=QPtgs8vO4oyYVf92" 
  title="YouTube video"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>


Fast, accurate simulations enable computational design - the automatic production of mechanical design solutions that satisfy high level constraints. I built a computational design program around these scripted simulations of soft actuators, and asked it to produce strong, flexible soft actuator designs without any manual input.

The results were astounding - after running overnight, the program identified bending soft actuator structures that look very similar to geometries which took years to develop manually! Read more about this research here.

<iframe width="560" height="315" 
src="https://www.youtube.com/embed/pailK-Ou3iw?si=lGZtQwV-bifTOGgR" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
allowfullscreen>
</iframe>