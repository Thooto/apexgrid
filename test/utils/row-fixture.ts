import type { Keys } from '../../src/internal/types';
import type GridRow from '../../src/components/row';
import CellTestFixture from './cell-fixture.js';

interface CellCollection<T extends object> {
  first: CellTestFixture<T>;
  last: CellTestFixture<T>;
  get: (id: Keys<T> | number) => CellTestFixture<T>;
}

export default class RowTestFixture<T extends object> {
  constructor(public element: GridRow<T>) {}

  protected get(id: Keys<T> | number) {
    return new CellTestFixture(
      typeof id === 'number'
        ? this.element.cells.at(id)!
        : this.element.cells.find(({ column }) => column.key === id)!,
    );
  }

  public get cells(): CellCollection<T> {
    return {
      first: this.get(0),
      last: this.get(-1),
      get: (id: Keys<T> | number) => this.get(id),
    };
  }

  public get data() {
    return this.element.data;
  }
}