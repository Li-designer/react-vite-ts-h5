# 使用说明

## 设计稿尺寸

- `375px`

## ahooks

- [ahooks 文档](https://ahooks.js.org/zh-CN/hooks/use-mount)
- 使用示例

  ```jsx
  import { useMount, useBoolean } from "ahooks"
  import { message } from "antd"
  import React from "react"

  const MyComponent = () => {
    useMount(() => {
      message.info("mount")
    })

    return <div>Hello World</div>
  }

  export default () => {
    const [state, { toggle }] = useBoolean(false)

    return (
      <>
        <button type="button" onClick={toggle}>
          {state ? "unmount" : "mount"}
        </button>
        {state && <MyComponent />}
      </>
    )
  }
  ```

## Ant Design Mobile

- [文档](https://mobile.ant.design/zh)
