# Article 文章页样式

---

该组件属于样式组件，提供了类似微信公众号文章页的一些样式，可供用户快速呈现文章内容。

## 使用指南

在 Taro 文件中引入样式

:::demo
```js
import AtArticle from 'taro-ui'
```
:::


## 可用样式类目

:::demo
```CSS
.at-article /* 根类名 */
.at-article__h1 /* 一级标题 */
.at-article__h2 /* 二级标题 */
.at-article__h3 /* 三级标题 */
.at-article__info /* 作者信息 */
.at-article__p /* 段落 */
.at-article__img /* 图片 */
```
:::

## 使用举例

:::demo
```html
<View className='at-article'>
    <View className='at-article__h1'>这是一级标题这是一级标题</View>
    <View className='at-article__info'>
        2017-05-07&nbsp;&nbsp;&nbsp;这是作者
    </View>
    <View className='at-article__content'>
        <View className='at-article__section'>
            <View className='at-article__h2'>这是二级标题</View>
            <View className='at-article__h3'>这是三级标题</View>
            <View className='at-article__p'>这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ</View>
            <View className='at-article__p'>这是文本段落。这是文本段落。</View>
            <Image className='at-article__img' src='https://jdc.jd.com/img/400x400' mode='aspectFit' />
        </View>
    </View>
</View>
```
:::
