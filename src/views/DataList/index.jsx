import React, { useActionState } from 'react'
export default function Index() {
  const [state, sub, isLoading] = useActionState(async (pre, formData) => {
    /**
     * @pre 上一次的state
     * @formData 表单数据 可以用过 formData.get('name') 获取表单中的name
    */
    console.log(pre, formData.get('name'));
    try {
      const res = await fetch("/zhi/news/latest")
      const data = await res.json()
      return data  //返回的结果会给到state
    } catch (error) {
      return error //返回的结果会给到state
    }
  }, null)
  
  /**
   * @state 初始值是useActionState()的第二个参数
   * @sub 触发action的函数 是useActionState()的第一个参数
   * @isLoading 是否正在提交 正在提交为true 提交完成/失败为false
  */
  return (
    <div>
      <form action={sub}>
        <input type="text" name='name' />
        <button type="submit" disabled={isLoading}>{isLoading ? "提交中..." : "提交"}</button>
      </form>
    </div>
  )
}
