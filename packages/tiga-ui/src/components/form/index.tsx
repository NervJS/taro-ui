import React from 'react'
import { View, Form } from '@tarojs/components'
import RcForm from 'rc-field-form'
import { AtFormProps } from '../../../types/form'
import { defaultFormContext, FormContext } from './context'
import classNames from 'classnames'

const classPrefix = 'at-form'

const AtForm: React.FC<AtFormProps> = ({
  name,
  hasFeedback,
  layout,
  requiredMarkStyle,
  children,
  footer,
  className,
  ...formProps
}) => {
  const rootClassName = classNames(classPrefix, className)

  return (
    <RcForm component={Form} className={rootClassName} {...formProps}>
      <FormContext.Provider
        value={{
          name,
          hasFeedback,
          layout,
          requiredMarkStyle
        }}
      >
        {children}
      </FormContext.Provider>
      {footer && <View className={`${classPrefix}-footer`}>{footer}</View>}
    </RcForm>
  )
}

AtForm.defaultProps = defaultFormContext

AtForm.displayName = 'AtForm'

export default AtForm
export { AtFormItem } from './FormItem'
