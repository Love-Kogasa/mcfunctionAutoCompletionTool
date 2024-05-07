# Mcfunction 自动补全工具
copyright (c) 2024 FreeDayO
###### Using MIT Open Source Protocol
***
# 介绍
本工具提供了对mcfunction内命令的自动补全功能<br>
解决了很多新人总是记不住命令拼写的问题<br>
以及想偷懒的诉求( 比如function就可以简写为fun )<br>
可视化UI方便新人使用<br>
**只支持基岩版mc命令 | help不包括**
***
# API
cmdDo.js 提供了一个函数和一个数组
### startup 函数
```js
function startup( mcfunction ){...}
```
mcfunction指向要自动补充mcfunction文本<br>
返回值返回由cmds和num组成的对象<br>
分别为修复后的mcfunction和检查的行数
### cmdList 数组
本数组记录了所能修复的mc命令<br>
欢迎修改补充
***
# 更多
|  参与开发   | 部分  |
|  ----  | ----  |
| Love-Kogasa  | Js部分 |
| XiaozhiSans  | style和ui布局 |
| butian  | 提供帮助 |
| teaSummer | 扩充指令列表 |
| ~~freeLucker~~  | ~~摸鱼~~ |
***
我们很欢迎您将本作品放到您自己的工具站上<br>
但是请务必添加 `copyright (c) 2024 FreeDayO` 这样的字样<br>
加入我们？ QQ: 822693016( 聊天群 ) ~~1145141919233( 恶臭群 )~~
***
# 感谢您的阅读
