import React, { useContext, useState, useCallback } from 'react'
import { View, Text, Label } from '@tarojs/components'
import classNames from 'classnames'
import { Field, FormInstance } from 'rc-field-form'
import FieldContext from 'rc-field-form/lib/FieldContext'
import type { Meta, InternalNamePath } from 'rc-field-form/lib/interface'
import { FormContext, NoStyleItemContext } from './context'
import { AtListItem } from '../list/ListItem'
import { undefinedFallback } from './undefined-fallback'

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

  const labelElement = label ? (
    <React.Fragment>
      <Label className={`${classPrefix}-label`} for={htmlFor}>
        {`${label}${help ? ' @' : ''}`}
        {requiredMark}
        {/* TODO: */}
        {/* {help && ' @'} */}
        {/* {help && (
          <Popover content={help} mode='dark' trigger='click'>
            <span
              className={`${classPrefix}-label-help`}
              onClick={e => {
                e.preventDefault()
              }}
            >
              <QuestionCircleOutline />
            </span>
          </Popover>
        )} */}
      </Label>
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
          `${classPrefix}-child-${layout}`,
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
        let childNode: React.ReactNode = null
        if (React.isValidElement(children)) {
          const childProps = Object.assign({}, children.props, control)

          // We should keep user origin event handler
          const triggers = new Set<string>(
            [].concat(trigger, mergedValidateTrigger)
          )

          triggers.forEach(eventName => {
            childProps[eventName] = (...args: any[]) => {
              control[eventName]?.(...args)
              // eslint-disable-next-line
              // @ts-ignore
              children.props[eventName]?.(...args)
            }
          })

          childNode = (
            <MemoInput
              value={control[props.valuePropName || 'value']}
              update={updateRef.current}
            >
              {React.cloneElement(children, childProps)}
            </MemoInput>
          )
        } else {
          childNode = children
        }

        return renderLayout(childNode, fieldId, meta, isRequired)
      }}
    </Field>
  )
}
