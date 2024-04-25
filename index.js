module.exports = {
  parseMetric: (metric) => {
    const string = metric;
    const lines = string.split("# ").filter((e) => e.length != 0);
    const result = {};
    for (let l of lines) {
      const splitedLine = l.split("\n").filter((e) => e.length != 0);
      const category = splitedLine.shift();
      result[category] = {};
      for (let s of splitedLine) {
        const [key, value] = s.split(" ");
        result[category][key] = value;
      }
    }

    return result;
  },

  stringifyMetric: (metricObject) => {
    let tmpArr = [];
    const entries = Object.entries(metricObject);

    for (let [cat, vals] of entries) {
      const tmpStr = [];
      const values = Object.entries(vals);
      tmpStr.push(`# ${cat}`);
      for (let value of values) {
        tmpStr.push(`${value[0]} ${value[1]}`);
      }
      tmpArr.push(tmpStr.join("\n"));
    }
    return tmpArr.join("\n\n");
  },

  metric: class {
    /**
     * {
     *    cat1: [{key: string, value: string | number }]
     * }
     */
    data = {};
    /**
     *
     * @param {string} [string] Metric String
     * @returns Object
     */
    toObject = () => {
      const string = this.toString();
      const lines = string.split("# ").filter((e) => e.length != 0);
      const result = {};
      for (let l of lines) {
        const splitedLine = l.split("\n").filter((e) => e.length != 0);
        const category = splitedLine.shift();
        result[category] = {};
        for (let s of splitedLine) {
          const [key, value] = s.split(" ");
          result[category][key] = value;
        }
      }

      return result;
    };

    toString = () => {
      const metricObject = this.data;
      let tmpArr = [];
      const entries = Object.entries(metricObject);

      for (let [cat, vals] of entries) {
        const tmpStr = [];
        const values = Object.entries(vals);
        tmpStr.push(`# ${cat}`);
        for (let value of values) {
          tmpStr.push(`${value[0]} ${value[1]}`);
        }
        tmpArr.push(tmpStr.join("\n"));
      }
      return tmpArr.join("\n\n");
    };

    addValue = (category, key, value) => {
      if (!this.data[category]) {
        this.data[category] = {};
      }
      this.data[category][key] = value;
    };

    editValue = (category, key, value) => {
      this.addValue(category, key, value);
    };

    deleteValue = (category, key) => {
      delete this.data[category][key];
    };
  },
};
