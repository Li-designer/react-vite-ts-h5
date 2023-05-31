import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import AutoImport from "unplugin-auto-import/vite";
import path, { resolve } from "path"
import { PluginOption, UserConfigExport, ConfigEnv, loadEnv } from 'vite';

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd();
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, root, "");
  return {
    base: command !== "serve" ? "/dist" : "/",
    root,
    plugins: [
      react(),
      AutoImport({
        // targets to transform
        include: [/\.[tj]sx?$/, /\.ts$/, /\.md$/],

        // global imports to register
        imports: [
          // 插件预设支持导入的api
          "react",
          "react-router",
          "react-router-dom"
          // 自定义导入的api
        ],

        // Generate corresponding .eslintrc-auto-import.json file.
        // eslint-disable-next-line max-len
        // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
        eslintrc: {
          enabled: false, // Default `false`
          // Default `./.eslintrc-auto-import.json`
          filepath: "./.eslintrc-auto-import.json",
          // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
          globalsPropValue: true
        },

        // Filepath to generate corresponding .d.ts file.
        // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
        // Set `false` to disable.
        dts: "./auto-imports.d.ts",
        resolvers: []
      })
    ],
    css: {
      modules: {
        localsConvention: "dashesOnly",
      },
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
        },
      },
    },
    server: {
      hmr: {
        overlay: false
      },
      port: 9527,
      host: "0.0.0.0",
      https: false,
      open: true,
      proxy: {
        "/api": {
          // 当遇到 /api 路径时，将其转换成 target 的值
          target: "http://127.0.0.1:7001/",
          // target: 'http://lidajing.top:7001/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""), // 将 /api 重写为空
        },
        //  图片无法显示第二种解决方式
        // '/public': {
        // target: 'http://127.0.0.1:7001/', changeOrigin: true,
        // }
      },
    },
    build: {
      // 打包文件名
      outDir: "dist",
      sourcemap: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 4000,
      minify: "terser",
      terserOptions: {
        compress: false,
        mangle: false
      },
      rollupOptions: {
        input: {
          index: pathResolve("index.html")
        },
        // 静态资源分类打包
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // src 路径
        utils: path.resolve(__dirname, "src/utils"), // src 路径
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".less"],
    },
  }
}
