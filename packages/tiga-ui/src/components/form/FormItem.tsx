import React, { useContext, useState, useCallback } from 'react'
import { View, Text, Label } from '@tarojs/components'
import classNames from 'classnames'
import { Field } from 'rc-field-form'
import FieldContext from 'rc-field-form/lib/FieldContext'
import type { Meta, InternalNamePath } from 'rc-field-form/lib/interface'
import { FormContext, NoStyleItemContext } from './context'
import { AtListItem } from '../list/ListItem'
import AtIcon from '../icon'
import { undefinedFallback } from './undefined-fallback'
import { pxTransform, PLATFORM } from '../../utils'

const classPrefix = `at-form-item`
const NAME_SPLIT = '__SPLIT__'

interface MemoInputProps {
  value: any
  update: number
  children: React.ReactNode
}

const MemoInput = React.memo(
  // eslint-disable-next-line
  ({ children }: MemoInputProps) => children as JSX.Element,
  (prev, next) => prev.value === next.value && prev.update === next.update
)

MemoInput.displayName = 'MemoInput'

export const AtFormItemLayout = (props: any) => {
  const {
    className,
    style,
    extra,
    label,
    name,
    required,
    disabled,
    children,
    htmlFor,
    help,
    tail,
    childElementPosition
  } = props

  const context = useContext(FormContext)
  const hasFeedback =
    props.hasFeedback !== undefined ? props.hasFeedback : context.hasFeedback
  const layout = props.layout || context.layout

  const requiredMark = required && (
    <Text className={`${classPrefix}-required-asterisk`}>*</Text>
  )

  const labelArea = PLATFORM.isRN ? (
    <View className={`${classPrefix}-label`}>{label}</View>
  ) : (
    <Label className={`${classPrefix}-label`} for={htmlFor}>
      {label}
    </Label>
  )

  const labelElement = label ? (
    <React.Fragment>
      <View
        className={`${classPrefix}-label-wrap ${classPrefix}-label-wrap-${layout}`}
      >
        {labelArea}
        {help && (
          <AtIcon
            value='comm_icon_question_circle_line'
            color='#333'
            size='16px'
            customStyle={{
              marginLeft: pxTransform('4'),
              lineHeight: pxTransform('16')
            }}
          ></AtIcon>
        )}
        {requiredMark}
      </View>
      {
        // 垂直布局时跟 title 一行的案例
        layout === 'vertical' && tail && (
          <View className={`${classPrefix}-tail`} onClick={() => {}}>
            {tail}
          </View>
        )
      }
    </React.Fragment>
  ) : null

  const hasMessage = props.errors.length || props.warnings.length

  const description = (
    <React.Fragment>
      {props.description}
      {hasFeedback && hasMessage ? (
        <React.Fragment>
          {props.errors.map((error, index) => (
            <View
              key={`error-${index}`}
              className={`${classPrefix}-feedback-error`}
            >
              {error}
            </View>
          ))}
          {props.warnings.map((warning, index) => (
            <View
              key={`warning-${index}`}
              className={`${classPrefix}-feedback-warning`}
            >
              {warning}
            </View>
          ))}
        </React.Fragment>
      ) : null}
    </React.Fragment>
  )
  return (
    <AtListItem
      title={layout === 'vertical' && labelElement}
      prefix={layout === 'horizontal' && labelElement}
      style={style}
      extra={extra}
      description={description}
      customClass={classNames(
        classPrefix,
        className,
        `${classPrefix}-${layout}`,
        {
          // [`${classPrefix}-hidden`]: hidden,
          [`${classPrefix}-has-error`]: props.errors.length
        }
      )}
      disabled={disabled}
      onClick={props.onClick}
    >
      <View
        className={classNames(
          `${classPrefix}-child`,
          `${classPrefix}-child-position-${childElementPosition}`
        )}
      >
        <View className={classNames(`${classPrefix}-child-inner`)}>
          {children}
        </View>
      </View>
    </AtListItem>
  )
}

AtFormItemLayout.defaultProps = {
  errors: [],
  warnings: []
}

export const AtFormItem: React.FC<any> = props => {
  const {
    className,
    style,
    label,
    extra,
    help,
    tail,
    description,
    name,
    required,
    noStyle,
    disabled,
    hasFeedback,
    fieldId,
    rules,
    hidden,
    layout,
    childElementPosition,
    clickable,
    arrow,
    children,
    messageVariables,
    trigger = 'onChange',
    validateTrigger = trigger,
    onClick,
    shouldUpdate,
    dependencies,
    ...fieldProps
  } = props

  const { validateTrigger: contextValidateTrigger } = useContext(FieldContext)

  // trigger 监听表单事件
  // Field 里面劫持了 trigger 事件，加了 triggerMetaEvent 和 updateValue 操作
  const mergedValidateTrigger = undefinedFallback(
    validateTrigger,
    contextValidateTrigger,
    trigger
  )

  const updateRef = React.useRef(0)
  updateRef.current += 1

  // 记录 meta，trigger 触发的时候将会触发 onSubMetaChange
  const [subMetas, setSubMetas] = useState<Record<string, Meta>>({})
  const onSubMetaChange = useCallback(
    (subMeta: Meta & { destroy?: boolean }, namePath: InternalNamePath) => {
      setSubMetas(prevSubMetas => {
        const nextSubMetas = { ...prevSubMetas }
        const nameKey = namePath.join(NAME_SPLIT)
        if (subMeta.destroy) {
          delete nextSubMetas[nameKey]
        } else {
          nextSubMetas[nameKey] = subMeta
        }
        return nextSubMetas
      })
    },
    [setSubMetas]
  )

  const isRequired =
    required !== undefined
      ? required
      : rules &&
        rules.some(
          rule => !!(rule && typeof rule === 'object' && rule.required)
        )

  let Variables: Record<string, string> = {}
  if (typeof label === 'string') {
    Variables.label = label
  }
  if (messageVariables) {
    Variables = { ...Variables, ...messageVariables }
  }

  const notifyParentMetaChange = useContext(NoStyleItemContext)
  const onMetaChange = (meta: Meta & { destroy?: boolean }) => {
    if (noStyle && notifyParentMetaChange) {
      const namePath = meta.name
      notifyParentMetaChange(meta, namePath)
    }
  }

  function renderLayout(
    baseChildren: React.ReactNode,
    fieldId?: string,
    meta?: Meta,
    isRequired?: boolean
  ) {
    if (noStyle && !hidden) {
      return baseChildren
    }
    const curErrors = meta?.errors ?? []
    const errors = Object.keys(subMetas).reduce(
      (subErrors: string[], key: string) => {
        const errors = subMetas[key]?.errors ?? []
        if (errors.length) {
          subErrors = [...subErrors, ...errors]
        }
        return subErrors
      },
      curErrors
    )
    const curWarnings = meta?.warnings ?? []
    const warnings = Object.keys(subMetas).reduce(
      (subWarnings: string[], key: string) => {
        const warnings = subMetas[key]?.warnings ?? []
        if (warnings.length) {
          subWarnings = [...subWarnings, ...warnings]
        }
        return subWarnings
      },
      curWarnings
    )

    return (
      <AtFormItemLayout
        className={className}
        style={style}
        label={label}
        extra={extra}
        help={help}
        tail={tail}
        description={description}
        required={isRequired}
        disabled={disabled}
        hasFeedback={hasFeedback}
        htmlFor={fieldId}
        errors={errors}
        warnings={warnings}
        onClick={onClick}
        hidden={hidden}
        layout={layout}
        childElementPosition={childElementPosition}
        clickable={clickable}
        arrow={arrow}
      >
        <NoStyleItemContext.Provider value={onSubMetaChange}>
          {baseChildren}
        </NoStyleItemContext.Provider>
      </AtFormItemLayout>
    )
  }

  return (
    <Field
      {...fieldProps}
      name={name}
      shouldUpdate={shouldUpdate}
      dependencies={dependencies}
      rules={rules}
      trigger={trigger}
      validateTrigger={mergedValidateTrigger}
      onMetaChange={onMetaChange}
      messageVariables={Variables}
    >
      {(control, meta) => {
        // TODO: 遍历数组找到表单组件，现在先简单粗暴处理下
        // RN children 是数组，React 是对象，统一处理成数组
        const newChildren = React.Children.toArray(children)[0]
        // console.log(newChildren.props)
        let childNode: React.ReactNode = null
        if (React.isValidElement(newChildren)) {
          const childProps = Object.assign(
            { disabled },
            newChildren.props,
            control
          )

          // We should keep user origin event handler
          const triggers = new Set<string>(
            [].concat(trigger, mergedValidateTrigger)
          )

          triggers.forEach(eventName => {
            childProps[eventName] = (...args: any[]) => {
              control[eventName]?.(...args)
              // @ts-ignore
              newChildren.props[eventName]?.(...args)
            }
          })

          childNode = (
            <MemoInput
              value={control[props.valuePropName || 'value']}
              update={updateRef.current}
            >
              {React.cloneElement(newChildren, childProps)}
            </MemoInput>
          )
        } else {
          childNode = newChildren
        }

        return renderLayout(childNode, fieldId, meta, isRequired)
      }}
    </Field>
  )
}
