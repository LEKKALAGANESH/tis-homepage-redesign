# Testing & Verification Strategy

## 1. Testing objective

Verification must cover both engineering correctness and visual/interaction quality.

## 2. Build verification

Required before submission:

- [ ] Install succeeds.
- [ ] Development server starts.
- [ ] Production build succeeds.
- [ ] No known build errors.
- [ ] No forgotten debug logging.
- [ ] No unused dependencies identified during review.

## 3. Functional test matrix

| Area | Test |
|---|---|
| Navigation | All intended navigation controls work |
| Mobile navigation | Open/close behavior works |
| CTA | Primary CTA is actionable |
| Theme | If implemented, switching works |
| Cursor | If implemented, desktop pointer interaction works |
| Scroll reveal | If implemented, sections reveal correctly |
| Scroll progress | If implemented, progress tracks document depth |
| Footer | Links and interactions work |

## 4. Responsive matrix

| Viewport | Verify |
|---:|---|
| 375px | Layout, navigation, typography, CTA, overflow |
| 768px | Grid, navigation, spacing, imagery |
| 1280px+ | Full composition, whitespace, hierarchy |

Additional widths should be tested when practical to catch breakpoint gaps.

## 5. Accessibility tests

- [ ] Page has meaningful landmarks.
- [ ] Headings follow a logical hierarchy.
- [ ] Keyboard can reach interactive controls.
- [ ] Focus state remains visible.
- [ ] Interactive controls have accessible names.
- [ ] Decorative images do not create noisy announcements.
- [ ] Color is not the only state indicator.
- [ ] Reduced-motion behavior is acceptable.

## 6. Motion tests

- [ ] Animation does not block content.
- [ ] Entrance duration remains reasonable.
- [ ] Scroll does not feel delayed.
- [ ] Pointer effects do not affect touch layouts.
- [ ] Reduced motion disables non-essential movement.

## 7. Visual regression review

For each target viewport:
1. capture the current page;
2. compare against the intended design/reference;
3. inspect spacing;
4. inspect typography;
5. inspect image sizing;
6. inspect alignment;
7. inspect interaction states.

## 8. Defect severity

### Critical
Build failure, unusable navigation, major accessibility blocker, or broken primary interaction.

### High
Major responsive break, broken standout feature, severe visual defect.

### Medium
Noticeable spacing, typography, interaction, or consistency issue.

### Low
Minor polish issue that does not materially affect usability.

## 9. Definition of done

A feature is done when:
- implementation exists;
- expected behavior works;
- target viewports are verified;
- accessibility impact is reviewed;
- no known critical/high regression remains.
