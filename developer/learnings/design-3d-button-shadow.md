# Learning: 3D Buttons — Soft Glow, Not Hard Edge

**Prompt:** Design pass (3D effects, 2026-06-15)

---

## What broke

The first implementation of the `btn-3d-primary` CSS utility used a hard solid
bottom shadow to simulate a 3D "pressed" underside:

```css
box-shadow: 0 4px 0 0 #0078aa, 0 6px 16px rgba(0, 158, 227, 0.35);
```

The `0 4px 0 0 #0078aa` produces a solid colored block 4px below the button with
zero blur. The user described the result as: **"Button is 3D but not looking so good.
It looks like a brick."**

## Why it looks wrong

A hard-edge bottom shadow without blur looks like the button has been extruded into a
rectangular block — identical to a physical rubber stamp or a Lego brick. It has no
sense of light, surface, or depth. It's also inconsistent with the rest of the page's
shadows, which all use soft blur.

## The fix: three-layer glow approach

Replace the hard edge with three layered shadow values:

```css
box-shadow:
  inset 0 1px 0 rgba(255, 255, 255, 0.2),   /* top highlight — convex surface feel */
  0 4px 14px rgba(0, 158, 227, 0.45),         /* ambient glow — color halo around button */
  0 2px 4px rgba(0, 0, 0, 0.1);              /* subtle drop shadow — grounding */
```

**What each layer does:**
- `inset 0 1px 0` — a 1px white line at the top of the button. Simulates light hitting
  a convex surface. This is what makes it feel 3D, not the shadow below.
- Ambient glow — a large soft halo in the button's brand color. Creates the sense that
  the button is "lit" and elevated above the page.
- Drop shadow — a tiny tight shadow that grounds the button on the page surface.

On hover, increase both the glow spread and lift via `translateY(-2px)`. On active
(click), reduce glow and use `translateY(1px)` to simulate pressing down.

## General rule

A 3D effect on a card/button does not need a hard colored underside. On a website,
"3D" means: surface highlight (inset) + glow (ambient) + grounding shadow. The
hard-edge trick works in print (where you see true depth) but reads as "brick" on
backlit screens.

## Dark mode note

Dark mode needs stronger glow since ambient light is already low:

```css
.dark .btn-3d-primary {
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 4px 16px rgba(56, 189, 248, 0.4),
    0 2px 4px rgba(0, 0, 0, 0.25);
}
```

Use `rgba(56, 189, 248, ...)` (brand sky blue, `#38BDF8`) as the glow color in dark
mode — it maps to `brand-amber-dark` token.
