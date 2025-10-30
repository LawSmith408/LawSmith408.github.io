---
layout: page
title: Bolus Dose
description: with background image
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

I led a blank-slate design effort for a novel mechanism which delivers a small but precise bolus dose of liquid drug to a patient from a wearable delivery device. The design process was very thorough - our team posed over a dozen prototypes and downselected to three for prototyping using Pugh matrix methodology.

I executed the detail design process on one of the concepts that I originated, sourcing custom parts from three suppliers and commodity components online.

My design features a spring-loaded piston with a custom overmolded seal, nested inside a rotary cam mechanism.

A micromachined rack and gear converts input translational motion into rotation of the mechanism, which loads and delivers the dose when actuation force is applied to the input rack. I designed custom sliding face seals that wipe across the underside of the rotating mechanism, controlling the hydraulic connectivity between the pump piston and draw/dispense lines with high precision.

This design was highly constrained in multiple dimensions: overall size, cost, force to actuate, ease of assembly, and above all, patient safety. I performed comprehensive static force balance analysis to correctly tolerance interference fits, drive sliding contact dimensions, and size the antagonistic springs which support dose and seal functions.

When components arrived, I assembled and tested 10 replicates of the design and delivered them to the client. Their rigorous internal testing demonstrated that my design reduced dose variability from 6.6% to 1.0%, and it was granted [US Pat. 11007317](https://patents.google.com/patent/US7517335B2/en?oq=US7517335B2).


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bolus_1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
