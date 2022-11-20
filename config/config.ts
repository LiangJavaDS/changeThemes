import { defineConfig } from 'umi';
import path from 'path';

/** umi第二种配置文件，根目录下的.umirc.ts具有更高的优先级，所以.umirc.ts已被删除 */
export default defineConfig({
    lessLoader: {
        modifyVars: {
            hack: `true; @import '${path.resolve(__dirname, '../src/layouts/variable.less')}';`
        }
    }
});