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

While working toward my graduate degrees, I spent a few years building a detailed electrical, thermal, and mechanical model of **shape memory alloy (SMA) actuators** — the kind often used in medical devices for precise motion control.

I wrote a custom nonlinear solver from scratch using the equations of state, along with an adaptive time-step routine to handle the tricky dynamics. Basically, it could predict how the actuator would respond in real-world conditions with impressive accuracy.

Later on, at a client’s request, I teamed up with developers at MathWorks to turn the model into a **custom Simulink block**. That made it much easier to compare different design concepts side by side — and helped guide decisions around energy use, durability, and overall system reliability.

I built this model while working as a numerical modeling specialist at [**FPrin LLC**](https://fprin.com/), an engineering consulting group known for applying first-principles physics to complex medical device design. Check out [the whitepaper](https://fprin.com/white-papers/).

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/sma_1.webp" title="Phase Transition Diagram" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
