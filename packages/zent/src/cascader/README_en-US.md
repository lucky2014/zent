---
title: Cascader
path: component/cascader
group: Data Entry
---

## Cascader 级联选择

Cascader is used for cascade operation, e.g. cascade location selection.

### API

| Props | Description | Type | Default | Alternatives |
|------|------|------|--------|--------|
| value | The selected value | array | [] | '' |
| options | Optional data source | array | [] | '' |
| title | title of tab | array | ['省份', '城市', '县区'] | '' |
| onChange | The callback when data changes | func | noop | '' |
| loadMore | Function to load data dynamicly, must return Promise | func | - | '' |
| changeOnSelect | Wether trigger change once sth. is seleted | boolean | false | '' |
| placeholder | The placeholder text of input box | string | '请选择' | '' |
| prefix | custom prefix | string | 'zent' | '' |
| className | custom classname | string | '' | '' |
| popClassName | custom classname of popover | string | ''zent-cascader__popup'' | '' |

-   The source data can be fully passed with `options` or dynamic loaded.
-   The `root` parameter is data object of current clicked element, and `stage` parameter is the level number when load data throught `loadMore`.
-   The `isLeaf` paramter is used for `loadMore`. It controls wether click on the node triggers a request.
