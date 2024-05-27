# Metrics Handler

This package is for handling metric data like below

```
# Category 1
TotalSupply 1000
Price 20
Holders 3000

# Category 2
TotalSupply 10000
Price 2
Holders 150

# Category 3
TotalSupply 5000
Price 1000
Holders 300
```

# Usage

Support CJS, ESM

`const metrics = require('metrics-handler')`

`import metrics from 'metrics-handler'`

## Parse Metrics

```js
const metricsObj = metrics.parseMetric(metricsStr);

/*
{
  'Category 1': { TotalSupply: '1000', Price: '20', Holders: '3000' },
  'Category 2': { TotalSupply: '10000', Price: '2', Holders: '150' },
  'Category 3': { TotalSupply: '5000', Price: '1000', Holders: '300' }
}
*/
```

## Stringify Metrics

```js
const metricsStr = metrics.stringify(metricsObj);
/*
# Category 1
TotalSupply 1000
Price 20
Holders 3000

# Category 2
TotalSupply 10000
Price 2
Holders 150

# Category 3
TotalSupply 5000
Price 1000
Holders 300
===
# Category 1
TotalSupply 1000
Price 20
Holders 3000

# Category 2
TotalSupply 10000
Price 2
Holders 150

# Category 3
TotalSupply 5000
Price 1000
Holders 300
*/
```

## Create Metric Instance

```js
const newMetrics = new metrics.metric();
```

## Add Data

` Params : (category, key, value)`

```js
newMetrics.addValue("Category 1", "TotalSupply", 1000);
newMetrics.addValue("Category 1", "Price", 20);
newMetrics.addValue("Category 1", "Holders", 3000);

newMetrics.addValue("Category 2", "TotalSupply", 10000);
newMetrics.addValue("Category 2", "Price", 2);
newMetrics.addValue("Category 2", "Holders", 150);

newMetrics.addValue("Category 3", "TotalSupply", 5000);
newMetrics.addValue("Category 3", "Price", 1000);
newMetrics.addValue("Category 3", "Holders", 300);

console.log(newMetrics.data);
/*
{
  'Category 1': { TotalSupply: 1000, Price: 20, Holders: 3000 },
  'Category 2': { TotalSupply: 10000, Price: 2, Holders: 150 },
  'Category 3': { TotalSupply: 5000, Price: 1000, Holders: 300 }
}
*/
```

## Edit Data

` Params : (category, key, value)`

If category doesn't exists, it will be created

```js
newMetrics.editValue("Category 2", "Price", 50000000000000);
console.log(newMetrics.data);
/*
{
  'Category 1': { TotalSupply: 1000, Price: 20, Holders: 3000 },
  'Category 2': { TotalSupply: 10000, Price: 50000000000000, Holders: 150 },
  'Category 3': { TotalSupply: 5000, Price: 1000, Holders: 300 }
}
*/

newMetrics.editValue("Category 4", "Price", 100);
console.log(newMetrics.data);
/*
{
  'Category 1': { TotalSupply: 1000, Price: 20, Holders: 3000 },
  'Category 2': { TotalSupply: 10000, Price: 50000000000000, Holders: 150 },
  'Category 3': { TotalSupply: 5000, Price: 1000, Holders: 300 },
  'Category 4': { Price: 100 }
}
*/
```

## Delete Data

` Params : (category, key, isDeleteCat)`

> When [isDeleteCat] is truthy, if the category is empty after being delete the data, delete the category too.

```js
newMetrics.deleteValue("Category 4", "Price");
console.log(newMetrics.data);
/*
{
  'Category 1': { TotalSupply: 1000, Price: 20, Holders: 3000 },
  'Category 2': { TotalSupply: 10000, Price: 50000000000000, Holders: 150 },
  'Category 3': { TotalSupply: 5000, Price: 1000, Holders: 300 },
  'Category 4': {}
}
*/
newMetrics.deleteValue("Category 4", "Price", true);
console.log(newMetrics.data);
/*
{
  'Category 1': { TotalSupply: 1000, Price: 20, Holders: 3000 },
  'Category 2': { TotalSupply: 10000, Price: 50000000000000, Holders: 150 },
  'Category 3': { TotalSupply: 5000, Price: 1000, Holders: 300 }
}
*/
```

## Delete Category

` Params : (category)`

```js
newMetrics.deleteCategory("Category 1");
console.log(newMetrics.data);
/*
{
  'Category 2': { TotalSupply: 10000, Price: 50000000000000, Holders: 150 },
  'Category 3': { TotalSupply: 5000, Price: 1000, Holders: 300 }
}
*/
```

## stringify Metric

```js
const metricsString = newMetrics.toString();
console.log(metricsString);
/*
# Category 2
TotalSupply 10000
Price 50000000000000
Holders 150

# Category 3
TotalSupply 5000
Price 1000
Holders 300
*/
```
