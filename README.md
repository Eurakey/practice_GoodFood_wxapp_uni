# 自强 Studio uni-app 模板

各分支对应模板：

- `master` - Vue3 + Vite
- `ts` - TypeScript + Vue3 + Vite

## 如何使用本模板

1. 使用 [degit](https://github.com/Rich-Harris/degit) 拉取代码，比如 `degit ZiqiangStudion/zq_uniapp_template#ts my-uniapp-project`
2. 将 [package.json](./package.json) 和 [manifest.json](./src/manifest.json) 中的 `name` 改成响亮的项目名
3. 将 [manifest.json](./src/manifest.json) 中的 `mp-weixin.appid` 改成小程序的 appid
4. 执行 `npm install` 或 `pnpm install` 安装依赖
5. 执行 `npm run dev` 或 `pnpm dev` 在本地运行项目

用微信开发者工具打开 `dist/dev/mp-weixin`，如果可以看到 Hello，则代表项目成功搭建🎉

## 常用命令

- `dev` 打包项目至 `dist/dev/mp-weixin`
- `build` 打包项目至 `dist/build/mp-weixin`
- `lint` 检查代码是否符合规范
- `lint --fix` 检查代码是否符合规范，并自动修复


*对本模板有任何问题或者建议可以通过 issue、email、钉钉、QQ 联系我*
