# Article 文章样式

---

该组件属于样式组件，提供了类似微信公众号文章页的一些样式，可供用户快速呈现文章内容。

## 使用指南

在页面样式文件中引入（版本v2.0.0+ 无需单独引入，除非需要按需加载）

> 由于 `app.js` 添加的样式文件 在小程序上只能影响 `page` 样式,不能影响 `component` 的样式，所以在 `component` 的时候你可能需要再次引入

:::demo
```scss
// page.scss
@import "~taro-ui/dist/components/article/index.scss";
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
  <View className='at-article__h1'>
    这是一级标题这是一级标题
  </View>
  <View className='at-article__info'>
    2017-05-07&nbsp;&nbsp;&nbsp;这是作者
  </View>
  <View className='at-article__content'>
    <View className='at-article__section'>
      <View className='at-article__h2'>这是二级标题</View>
      <View className='at-article__h3'>这是三级标题</View>
      <View className='at-article__p'>
        这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </View>
      <View className='at-article__p'>
        这是文本段落。这是文本段落。
      </View>
      <Image 
        className='at-article__img' 
        src='https://jdc.jd.com/img/400x400' 
        mode='widthFix' />
    </View>
  </View>
</View>
```
:::
