import { css } from 'lit';

export default css`:host {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  background-color: deeppink;
  contain: content;
}`;
