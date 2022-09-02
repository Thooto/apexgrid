import { css } from 'lit';

export default css`/* stylelint-disable max-line-length */
:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  --component-size: 3;
}

:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  contain: content;
  -webkit-border-end: var(var(--igx-header-border-width, var(--header-border-width))) var(var(--igx-header-border-style, var(--header-border-style))) var(var(--igx-header-border-color, var(--header-border-color)));
          border-inline-end: var(var(--igx-header-border-width, var(--header-border-width))) var(var(--igx-header-border-style, var(--header-border-style))) var(var(--igx-header-border-color, var(--header-border-color)));
  font-weight: 600;
  font-size: 0.75rem;
}

:host(:last-of-type) {
  -webkit-border-end: none;
          border-inline-end: none;
}

[part~=content] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 max(var(--is-large, 1) * 1.5rem, var(--is-medium, 1) * 1rem, var(--is-small, 1) * 0.5rem);
  font-weight: 500;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

[part~=sortable] {
  cursor: pointer;
}

[part~=title] {
  display: block;
  position: relative;
  cursor: initial;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  min-width: 3ch;
}

[part~=action] igc-icon {
  --size: 0.9375rem;
  color: var(--igx-sorted-header-icon-color, var(--sorted-header-icon-color));
}`;