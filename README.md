# AutoTax Atlas

面向拉美市场的汽车进口税率计算器。

当前公开版本包括：

- 巴西 2026—2028 税制情景并排对比
- 巴西全部州级 ICMS 选择
- BEV、PHEV、HEV、REEV 与 ICE 参数
- CBU、KD 与 CKD 规划测算
- 墨西哥和阿根廷代表性税负初筛
- 法规依据、规则状态和假设值说明
- 可安装的 PWA 网页应用
- 独立 Android TWA 工程与自动构建的测试 APK

## Android 测试版

Android 工程位于 `android-twa/`，使用中性包名
`app.autotaxatlas.calculator`。GitHub Actions 会在工程变更后自动构建调试
APK；正式发布仍需要中性域名、正式签名密钥和 Digital Asset Links 验证。

本工具用于方案初筛，不构成税务或法律意见。正式申报前应由当地专业机构结合税号、认证文件、原产地、进口主体和申报日期复核。
