declare module "handle-metric" {
  export function parseMetric(
    metric: string
  ): Record<string, Record<string, string>>;

  export function stringifyMetric(
    metricObject: Record<string, Record<string, string>>
  ): string;

  export class Metric {
    data: Record<string, Record<string, string>>;

    constructor();

    toObject(): Record<string, Record<string, string>>;

    toString(): string;

    addValue(category: string, key: string, value: string | number): void;

    editValue(category: string, key: string, value: string | number): void;

    deleteValue(category: string, key: string, isDeleteCat: boolean): void;

    deleteCategory(category: string): void;
  }
}
