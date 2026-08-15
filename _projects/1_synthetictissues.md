---
layout: page
title: synthetic flesh
description: inverse design of biological tissue mimics
img: assets/img/digitalmaterials/lattice_light2.gif
importance: 2
category: my foundations
related_publications: false
---

In traditional mechanical design, selecting materials to build with is like choosing from a vast menu; designers search for materials that strike a balance between relevant properties (stiffness, toughness, density, conductivity, ect.). Engineering materials are typically uniform and isotropic - reliable, but limited.

In constrast, nature builds materials from the ground up, blending locally nonuniform properties using smooth gradients so that a structure has precisely the required behavior at each location. What if we tried the same? 

Using multi-material inkjet 3D printing, we can control the per-droplet deposition of up to six building materials in a build volume the size of a basketball - unlocking an mind boggling geometry and material property design space. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/digitalmaterials/DMM_Fig2_ABC.PNG" title="example image" style="width:100%" %}
    </div>
</div>

In this work we demonstrate continuous, independent control over multiple mechanical properties in composite materials. For the first time, we experimentally characterize composites additively manufactured from **rigid plastic, soft elastomer, and liquid constituents**, demonstrating materials which span four orders of magnitude in modulus and two orders of magnitude in toughness. 

By forming analytical mappings between relative concentrations of constituents at the microscale and resulting macroscale material properties, we enable inverse material design. My results, published in [Advanced Materials](https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adma.202308491) have immediate applications in the rapid, automated production of bespoke medical models with mechanically plausible material properies. Keep up with the cutting edge of multimaterial deisgn and materials synthesis at the MACLab's [openVCAD](https://matterassembly.org/openvcad) project page.


<div class="row align-items-center">
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/digitalmaterials/ConstraintManifoldThreeSpace.gif" title="constraint manifold" style="width:100%" %}
    </div>
    <div class="col-sm-7 mt-3 mt-md-0">
        Constraint manifold visualized in material property three-space, showing combinations of simultaneously achieveable material properties. Black points show results from experimental measurements. Purple and green points show that arbitrary, continuous trajectories across this manifold can be drawn, allowing designers to specify **locally nonuniform, smoothly graded, indepentently controllable** material properties.
    </div>
</div>
