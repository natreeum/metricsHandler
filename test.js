const metrics = require("./src/index");

const newMetrics = new metrics.metric();
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

newMetrics.editValue("Category 2", "Price", 50000000000000);
console.log(newMetrics.data);

newMetrics.editValue("Category 4", "Price", 100);
console.log(newMetrics.data);

newMetrics.deleteValue("Category 4", "Price");
console.log(newMetrics.data);

newMetrics.editValue("Category 4", "Price", 100);
console.log(newMetrics.data);

newMetrics.deleteValue("Category 4", "Price", true);
console.log(newMetrics.data);

newMetrics.deleteCategory("Category 1");
console.log(newMetrics.data);

console.log("===");
const metricsString = newMetrics.toString();
console.log(metricsString);
