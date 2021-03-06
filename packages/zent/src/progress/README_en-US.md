---
title: Progress
path: component/progress
group: Data Display
---

## Progress

Progress represents the current progress and status of the operation.

### Guides

-  Progress is suitable for long-time operations, which shows the current progess and status of the current operation.
-  Progres can display the percentage of the operation progress.

### API

| Property     |  Description  | Type     | Default  | Alternative |
| -------- | ----------------- | ------- | -------| ----------------|
| type | Style of progess | string | `'line'` | `'circle'` |
| percent | percentage of progress | number | `0` | |
| status | status of progress | string|  | `'success'`,`'exception'` |
| showInfo | Whether to show status information | boolean | `true`  | `false` |
| format | The format function of text | func | built-in function | |
| strokeWidth | The width of progess bar, unit: px | number | `10` | |
| width | The radius of the cicrle progress bar or the total length of the strip progess bar | number | `132(type=circle), 580(type=line)` |  | 
| className | The custom classname | string |  | |
| prefix | The custom prefix | string | `'zent'` |  |


