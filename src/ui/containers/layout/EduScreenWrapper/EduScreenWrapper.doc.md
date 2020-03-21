# Screen Wrapper

## Purpose

This Component should be wrapped around every Screen to standardise the screens. It should reflect the general design and be abled to show every type of screen.\
_Everything that needs to be added to every screen can be added here._

We do have different types of screens.

1. No Header
2. Fixed Header
3. Sticky Header

The interface for the Component includes:

1. General Props
   - `Background Color : "string" (default = lightest)`
   - `Safe Area : "top" | "bottom" | "both" (default = undefined)`
   - `header: header specific Props (default = undefined)`
2. Header Specific
   - `type: "fixed" | "sticky" | "none" (default = none)`
   - `a`
