/**
 * format字符串 比如
 * @param 对象 支持从obj里面取key里面取值赋值
 * @example tableRrn = :objectRrn 替换成tableRrn = object[tableRrn] => tableRrn = '1'
 * 当前就只支持一个对象对占位符进行赋值
 */
String.prototype.format = function(obj) {
    if (!obj) {
        return this;
    }
    let s = this;
    for(var key in obj) {
        let value = obj[key] || "";
        s = s.replace(new RegExp("\\:" + key + "", "g"), "'" + value + "'");
       
    }
	return s;
};

/**
 * format字符串 
 * @key 要替换的值
 * @param obj 单一值，不支持从obj里面取值赋值
 * @example let string = "tableRrn = :objectRrn" 
 *          string.formatValue("objectRrn", 1) => tableRrn = '1'
 */
String.prototype.formatValue = function(key, obj) {
    if (!obj) {
        return this;
    }
    let s = this;
    s = s.replace(new RegExp("\\:" + key + "", "g"), "'" + obj + "'");
	return s;
};

String.prototype.toBoolean = function() {
    return (/^true$/i).test(this); 
};

/**
 * 合并2个数组并去除相同元素
 */
Array.prototype.merge = function(obj, rowkey) {
    if (obj) {
        this.push(...obj);
        if (rowkey) {
            var hash = {};
            let mergeValue = this.reduce((newArr, item, index, arr)  => {
                hash[item[rowkey]] ? '' : hash[item[rowkey]] = true && newArr.push(item);
                return newArr;
            }, []);
            return mergeValue;
        } else {
            let mergeValue = Array.from(new Set(this));
            return mergeValue;
        }
    }
};

