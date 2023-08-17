// 第二种方式
import type { Config } from "jest";

const config: Config = {
    /**
     * 指示是否应在运行期间报告每个单独的测试信息。执行后所有错误仍将显示在底部。
     */
    verbose: true,
    /**
     * 默认情况下，Jest运行所有测试，并在完成时将所有错误生成到控制台中。
     * 此处可以使用bail config选项，使Jest在n失败后停止运行测试。
     * 将bail设置为 true 等于将bail设置为 1
     */
    bail: 1,
    /**
     * 模块映射，类似与 tsconfig 的 paths 配置
     */
    moduleNameMapper: {
        "^src/(.*)$": "<rootDir>/src/$1",
    },
    /**
     * 统计覆盖率
     */
    collectCoverage: true,
    /**
     * 覆盖率结果输出的文件夹
     */
    coverageDirectory: "coverage",
};

export default config;
