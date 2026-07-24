 # Design · 个人网站设计说明

 ## 页面结构

 单页滚动布局（Single-page scroll），从上到下依次为：

 ```
 ┌─────────────────────────┐
 │        Hero             │  ← 全宽背景 + 一句话定位
 ├─────────────────────────┤
 │        About            │  ← 个人简介（大学生模板）
 ├─────────────────────────┤
 │        Skills           │  ← 技能标签（网格排列）
 ├─────────────────────────┤
 │       Projects          │  ← 项目卡片（2-3 张）
 ├─────────────────────────┤
 │       Contact           │  ← 邮箱 / GitHub 链接
 ├─────────────────────────┤
 │       Footer            │  ← 版权 + 模拟用途声明
 └─────────────────────────┘
 ```

 顶部固定导航栏，点击各词条平滑滚动到对应区块。

 ## 配色方案

 简洁简约风，最多 2 个主色：

 | 角色 | 色值 | 用途 |
 |------|------|------|
 | 主色 | `#F5F5F5` | 区块交替背景、卡片底色，营造灰白基调 |
 | 文字色 | `#2D3436` | 标题、正文、导航文字（深灰保证可读） |
 | 辅色 | `#636E72` | 链接、强调、按钮、技能标签边框（中性灰） |
 | 背景 | `#FFFFFF` | 页面底色 |
 | 点缀色 | `#FFF8E1` | 浅淡黄渲染，用于 Hero 背景或局部点缀，增添灵动感 |
 | 分割线 | `#E0E0E0` | 分隔线 |

 不使用炫彩渐变、霓虹色或大面积高饱和度颜色。整体呈现灰白系简约感，文字保持深灰以保障可读性。点缀淡黄色仅用于 Hero 区背景或局部暖色渲染，不喧宾夺主。

 ## 字体

 | 层级 | 字体 | 大小 |
 |------|------|------|
 | Hero 标题 | sans-serif, 粗体 | 2.5rem |
 | 区块标题 | sans-serif, 粗体 | 1.8rem |
 | 正文 | sans-serif, 常规 | 1rem |
 | 小字 / Footer | sans-serif, 常规 | 0.85rem |

 使用系统字体栈：`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`，不引入外部字体库。

 ## 文件映射

 ```
 personal-site/
 ├── index.html          ← 主页面（五个区块 + Footer）
 ├── assets/
 │   ├── style.css       ← 全部样式
 │   └── images/         ← 图片资源
 ├── docs/
 │   ├── prd.md          ← 产品需求文档
 │   ├── design.md       ← 设计说明（本文件）
 │   └── checklist.md    ← 验收清单
 ├── report/
 │   └── final-report.md ← 最终报告
 ├── screenshots/        ← 证据截图
 ├── README.md           ← 项目说明 + GitHub Pages 链接
 └── .gitignore
 ```

 ## 响应式原则

 - 移动端优先：内容在小屏设备上先排列，再通过 media query 适配桌面。
 - 桌面端：最大内容宽度 `max-width: 960px; margin: auto;`。
 - 导航栏在手机端折叠为汉堡菜单（可选，视复杂度而定）。
 - 所有区块保留足够留白，文字不溢出容器。

 ## 隐私与合规

 - 页面底部固定显示：`© 2026 刘思洋 · 课程项目示例，内容均为模拟用途`
 - 不收集任何访客信息，不使用 Cookie 或跟踪脚本。
 - 项目卡片内标注"课程项目，数据为模拟样例"。
 - 不出现真实身份证号、手机号、住址、密码或 API Key。
 ## 新增页面
 
 ### 项目详情页（3 个）
 
 - `project-credit-risk.html` — 信贷风险评估辅助工具详情
 - `project-quant-trading.html` — 量化交易策略回测平台详情
 - `project-blockchain.html` — 区块链存证原型详情
 
 每个详情页结构：顶部导航栏 → P5 边角装饰 → 独立背景图(透明度0.08) → 内容卡片(白色半透) → 返回链接 → Footer + 事件检测器
 
 ### 图库集页面
 
 - `gallery.html` — 解锁后可从首页访问
 - 展示图片分类占位网格（二次元、现实摄影、随手拍、更多）
 
 ## 彩蛋机制流程
 
 ```
 contact.html  ←→  index.html   (循环 3 次)
       ↓ (localStorage 计数 ≥ 3)
   解锁 gallery.html
       ↓
   index.html 新增"图库"瓷砖
   所有页面右下角显示解锁标识
 ```
 
 事件检测器 `assets/detector.js` 在所有页面中加载，使用 localStorage 跨页追踪状态。
 
 ## 文件映射（更新）
 
 ```
 personal-site/
 ├── index.html                   ← 首页（含 OPEN LOGO + 导航瓷砖）
 ├── introduction.html            ← introduction 页面（彩蛋触发入口）
 ├── about.html                   ← 关于
 ├── skills.html                  ← 技能
 ├── projects.html                ← 项目列表（含卡片跳转）
 ├── project-credit-risk.html     ← 项目详情 1
 ├── project-quant-trading.html   ← 项目详情 2
 ├── project-blockchain.html      ← 项目详情 3
 ├── contact.html                 ← 联系
 ├── gallery.html                 ← 图库集（彩蛋解锁后可见）
 ├── assets/
 │   ├── style.css
 │   ├── detector.js              ← 事件检测器（彩蛋追踪）
 │   └── images/                  ← 背景图 + 项目图
 ├── docs/
 │   ├── prd.md / design.md / checklist.md
 ├── report/
 ├── screenshots/
 └── README.md
 ```
