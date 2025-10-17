# Design Tokens Documentation

This document serves as a reference for extracting exact design tokens from the Figma file. Replace all placeholder values with the actual values from Figma.

## Color Palette

### Primary Brand Colors
- `--color-primary`: #[FIGMA_PRIMARY_COLOR] - Main brand color
- `--color-primary-light`: #[FIGMA_PRIMARY_LIGHT] - Lighter variant of primary
- `--color-primary-dark`: #[FIGMA_PRIMARY_DARK] - Darker variant of primary
- `--color-secondary`: #[FIGMA_SECONDARY_COLOR] - Secondary brand color
- `--color-secondary-light`: #[FIGMA_SECONDARY_LIGHT] - Lighter variant of secondary
- `--color-secondary-dark`: #[FIGMA_SECONDARY_DARK] - Darker variant of secondary

### Text Colors
- `--color-text-primary`: #[FIGMA_TEXT_PRIMARY] - Main text color
- `--color-text-secondary`: #[FIGMA_TEXT_SECONDARY] - Secondary text color
- `--color-text-muted`: #[FIGMA_TEXT_MUTED] - Muted/disabled text
- `--color-text-inverse`: #[FIGMA_TEXT_INVERSE] - Text on dark backgrounds
- `--color-heading`: #[FIGMA_HEADING_COLOR] - Heading text color

### Background Colors
- `--color-background`: #[FIGMA_BACKGROUND] - Main page background
- `--color-background-secondary`: #[FIGMA_BACKGROUND_SECONDARY] - Secondary background
- `--color-background-tertiary`: #[FIGMA_BACKGROUND_TERTIARY] - Tertiary background
- `--color-surface`: #[FIGMA_SURFACE_COLOR] - Card/surface background
- `--color-surface-elevated`: #[FIGMA_SURFACE_ELEVATED] - Elevated surface background

### Interactive Colors
- `--color-link`: #[FIGMA_LINK_COLOR] - Link color
- `--color-link-hover`: #[FIGMA_LINK_HOVER] - Link hover state
- `--color-link-visited`: #[FIGMA_LINK_VISITED] - Visited link color
- `--color-button-primary`: #[FIGMA_BUTTON_PRIMARY] - Primary button background
- `--color-button-primary-hover`: #[FIGMA_BUTTON_PRIMARY_HOVER] - Primary button hover
- `--color-button-secondary`: #[FIGMA_BUTTON_SECONDARY] - Secondary button background
- `--color-button-secondary-hover`: #[FIGMA_BUTTON_SECONDARY_HOVER] - Secondary button hover

### Border and Divider Colors
- `--color-border`: #[FIGMA_BORDER_COLOR] - Default border color
- `--color-border-light`: #[FIGMA_BORDER_LIGHT] - Light border variant
- `--color-border-dark`: #[FIGMA_BORDER_DARK] - Dark border variant
- `--color-divider`: #[FIGMA_DIVIDER_COLOR] - Section divider color

### Status and Feedback Colors
- `--color-success`: #[FIGMA_SUCCESS_COLOR] - Success state color
- `--color-warning`: #[FIGMA_WARNING_COLOR] - Warning state color
- `--color-error`: #[FIGMA_ERROR_COLOR] - Error state color
- `--color-info`: #[FIGMA_INFO_COLOR] - Info state color

### Accent and Highlight Colors
- `--color-accent`: #[FIGMA_ACCENT_COLOR] - Accent color for highlights
- `--color-highlight`: #[FIGMA_HIGHLIGHT_COLOR] - Highlight color
- `--color-overlay`: #[FIGMA_OVERLAY_COLOR] - Overlay/modal background

## Instructions for Extracting Colors from Figma

1. Open the Figma file for the Venipak front page
2. Navigate to the Design System or Styles panel
3. Look for color styles/tokens defined in the file
4. For each color above, find the corresponding color in Figma and note the exact hex value
5. Replace the placeholder values in `css/main.css` with the actual hex values
6. Ensure all color variants (light, dark, hover states) are captured accurately

## Color Usage Guidelines

- Use semantic color names (e.g., `--color-text-primary`) rather than descriptive names (e.g., `--color-blue`)
- Maintain consistency with Figma's color naming conventions
- Document any special color usage rules from the Figma file
- Note any accessibility considerations for color contrast ratios

## Typography Specifications

### Font Families
- `--font-family-primary`: [FIGMA_PRIMARY_FONT] - Main body text font
- `--font-family-secondary`: [FIGMA_SECONDARY_FONT] - Secondary text font (if different)
- `--font-family-heading`: [FIGMA_HEADING_FONT] - Heading font family
- `--font-family-mono`: [FIGMA_MONO_FONT] - Monospace font (if used)

### Font Sizes
- `--font-size-xs`: [FIGMA_XS_SIZE] - Extra small text
- `--font-size-sm`: [FIGMA_SM_SIZE] - Small text
- `--font-size-base`: [FIGMA_BASE_SIZE] - Base body text size
- `--font-size-lg`: [FIGMA_LG_SIZE] - Large text
- `--font-size-xl`: [FIGMA_XL_SIZE] - Extra large text
- `--font-size-2xl`: [FIGMA_2XL_SIZE] - 2x large text
- `--font-size-3xl`: [FIGMA_3XL_SIZE] - 3x large text

### Heading Sizes
- `--font-size-h1`: [FIGMA_H1_SIZE] - Main page heading
- `--font-size-h2`: [FIGMA_H2_SIZE] - Section headings
- `--font-size-h3`: [FIGMA_H3_SIZE] - Subsection headings
- `--font-size-h4`: [FIGMA_H4_SIZE] - Minor headings
- `--font-size-h5`: [FIGMA_H5_SIZE] - Small headings
- `--font-size-h6`: [FIGMA_H6_SIZE] - Smallest headings

### Font Weights
- `--font-weight-thin`: [FIGMA_THIN_WEIGHT] - 100
- `--font-weight-light`: [FIGMA_LIGHT_WEIGHT] - 300
- `--font-weight-regular`: [FIGMA_REGULAR_WEIGHT] - 400
- `--font-weight-medium`: [FIGMA_MEDIUM_WEIGHT] - 500
- `--font-weight-semibold`: [FIGMA_SEMIBOLD_WEIGHT] - 600
- `--font-weight-bold`: [FIGMA_BOLD_WEIGHT] - 700
- `--font-weight-extrabold`: [FIGMA_EXTRABOLD_WEIGHT] - 800
- `--font-weight-black`: [FIGMA_BLACK_WEIGHT] - 900

### Line Heights
- `--line-height-none`: [FIGMA_LINE_HEIGHT_NONE] - 1
- `--line-height-tight`: [FIGMA_LINE_HEIGHT_TIGHT] - 1.25
- `--line-height-snug`: [FIGMA_LINE_HEIGHT_SNUG] - 1.375
- `--line-height-normal`: [FIGMA_LINE_HEIGHT_NORMAL] - 1.5
- `--line-height-relaxed`: [FIGMA_LINE_HEIGHT_RELAXED] - 1.625
- `--line-height-loose`: [FIGMA_LINE_HEIGHT_LOOSE] - 2

### Letter Spacing
- `--letter-spacing-tighter`: [FIGMA_LETTER_SPACING_TIGHTER]
- `--letter-spacing-tight`: [FIGMA_LETTER_SPACING_TIGHT]
- `--letter-spacing-normal`: [FIGMA_LETTER_SPACING_NORMAL]
- `--letter-spacing-wide`: [FIGMA_LETTER_SPACING_WIDE]
- `--letter-spacing-wider`: [FIGMA_LETTER_SPACING_WIDER]
- `--letter-spacing-widest`: [FIGMA_LETTER_SPACING_WIDEST]

## Instructions for Extracting Typography from Figma

1. Open the Figma file and navigate to the text styles panel
2. Identify all text styles used in the design
3. For each text style, note:
   - Font family name
   - Font weight (100, 300, 400, 500, 600, 700, 800, 900)
   - Font size (in px or rem)
   - Line height (as a ratio or px value)
   - Letter spacing (in px or em)
4. Check if fonts are available on Google Fonts or need to be purchased/downloaded
5. Update the font loading links in `index.html` with the correct font URLs
6. Replace all placeholder values in `css/main.css` with actual values

## Typography Usage Guidelines

- Use semantic font size variables (e.g., `--font-size-h1`) rather than arbitrary sizes
- Maintain consistent line heights for readability
- Ensure font loading performance with proper preloading
- Test font rendering across different browsers and devices
- Verify font licensing for web use

## Spacing and Layout Specifications

### Base Spacing Scale
- `--spacing-0`: 0 - No spacing
- `--spacing-px`: 1px - 1 pixel
- `--spacing-0-5`: [FIGMA_SPACING_0_5] - 0.125rem / 2px
- `--spacing-1`: [FIGMA_SPACING_1] - 0.25rem / 4px
- `--spacing-1-5`: [FIGMA_SPACING_1_5] - 0.375rem / 6px
- `--spacing-2`: [FIGMA_SPACING_2] - 0.5rem / 8px
- `--spacing-3`: [FIGMA_SPACING_3] - 0.75rem / 12px
- `--spacing-4`: [FIGMA_SPACING_4] - 1rem / 16px
- `--spacing-5`: [FIGMA_SPACING_5] - 1.25rem / 20px
- `--spacing-6`: [FIGMA_SPACING_6] - 1.5rem / 24px
- `--spacing-8`: [FIGMA_SPACING_8] - 2rem / 32px
- `--spacing-10`: [FIGMA_SPACING_10] - 2.5rem / 40px
- `--spacing-12`: [FIGMA_SPACING_12] - 3rem / 48px
- `--spacing-16`: [FIGMA_SPACING_16] - 4rem / 64px
- `--spacing-20`: [FIGMA_SPACING_20] - 5rem / 80px
- `--spacing-24`: [FIGMA_SPACING_24] - 6rem / 96px
- `--spacing-32`: [FIGMA_SPACING_32] - 8rem / 128px

### Container Widths
- `--container-xs`: [FIGMA_CONTAINER_XS] - ~475px
- `--container-sm`: [FIGMA_CONTAINER_SM] - ~640px
- `--container-md`: [FIGMA_CONTAINER_MD] - ~768px
- `--container-lg`: [FIGMA_CONTAINER_LG] - ~1024px
- `--container-xl`: [FIGMA_CONTAINER_XL] - ~1280px
- `--container-2xl`: [FIGMA_CONTAINER_2XL] - ~1536px
- `--container-max`: [FIGMA_CONTAINER_MAX] - Maximum content width

### Border Radius
- `--border-radius-none`: 0 - No radius
- `--border-radius-sm`: [FIGMA_BORDER_RADIUS_SM] - 0.125rem / 2px
- `--border-radius-base`: [FIGMA_BORDER_RADIUS_BASE] - 0.25rem / 4px
- `--border-radius-md`: [FIGMA_BORDER_RADIUS_MD] - 0.375rem / 6px
- `--border-radius-lg`: [FIGMA_BORDER_RADIUS_LG] - 0.5rem / 8px
- `--border-radius-xl`: [FIGMA_BORDER_RADIUS_XL] - 0.75rem / 12px
- `--border-radius-2xl`: [FIGMA_BORDER_RADIUS_2XL] - 1rem / 16px
- `--border-radius-3xl`: [FIGMA_BORDER_RADIUS_3XL] - 1.5rem / 24px
- `--border-radius-full`: 9999px - Fully rounded

### Shadows
- `--shadow-xs`: [FIGMA_SHADOW_XS] - Extra small shadow
- `--shadow-sm`: [FIGMA_SHADOW_SM] - Small shadow
- `--shadow-base`: [FIGMA_SHADOW_BASE] - Base shadow
- `--shadow-md`: [FIGMA_SHADOW_MD] - Medium shadow
- `--shadow-lg`: [FIGMA_SHADOW_LG] - Large shadow
- `--shadow-xl`: [FIGMA_SHADOW_XL] - Extra large shadow
- `--shadow-2xl`: [FIGMA_SHADOW_2XL] - 2x large shadow
- `--shadow-inner`: [FIGMA_SHADOW_INNER] - Inner shadow
- `--shadow-none`: none - No shadow

### Breakpoints
- `--breakpoint-xs`: [FIGMA_BREAKPOINT_XS] - ~475px
- `--breakpoint-sm`: [FIGMA_BREAKPOINT_SM] - ~640px
- `--breakpoint-md`: [FIGMA_BREAKPOINT_MD] - ~768px
- `--breakpoint-lg`: [FIGMA_BREAKPOINT_LG] - ~1024px
- `--breakpoint-xl`: [FIGMA_BREAKPOINT_XL] - ~1280px
- `--breakpoint-2xl`: [FIGMA_BREAKPOINT_2XL] - ~1536px

### Z-Index Scale
- `--z-index-dropdown`: [FIGMA_Z_DROPDOWN] - 1000
- `--z-index-sticky`: [FIGMA_Z_STICKY] - 1020
- `--z-index-fixed`: [FIGMA_Z_FIXED] - 1030
- `--z-index-modal-backdrop`: [FIGMA_Z_MODAL_BACKDROP] - 1040
- `--z-index-modal`: [FIGMA_Z_MODAL] - 1050
- `--z-index-popover`: [FIGMA_Z_POPOVER] - 1060
- `--z-index-tooltip`: [FIGMA_Z_TOOLTIP] - 1070

## Instructions for Extracting Spacing from Figma

1. Open the Figma file and examine the spacing between elements
2. Look for consistent spacing patterns used throughout the design
3. Check if Figma has defined spacing tokens or a spacing system
4. Measure the gaps between components, sections, and elements
5. Note any padding values used within components
6. Document container widths and maximum content widths
7. Extract border radius values from buttons, cards, and other elements
8. Copy shadow effects exactly as defined in Figma
9. Note the responsive breakpoints used in the design
10. Replace all placeholder values in `css/main.css` with actual measurements

## Spacing Usage Guidelines

- Use consistent spacing scale throughout the design
- Prefer semantic spacing names (e.g., `--spacing-md`) for common use cases
- Use specific spacing values (e.g., `--spacing-4`) when exact control is needed
- Maintain vertical rhythm with consistent spacing between elements
- Use utility classes for quick spacing adjustments
- Ensure spacing scales appropriately across different screen sizes