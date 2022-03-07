import classNames from 'classnames'
import React, {
  useCallback,
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef
} from 'react'
import { View } from '@tarojs/components'
import Modal from 'react-native-modal'
import RootSiblings, { RootSiblingParent } from 'react-native-root-siblings'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtToastProps, ToastRef, ToastRefObj } from '../../../types/toast'

const DURATION_MAP = {
  short: 2000,
  long: 3500
}
const LEGAL_DURATION = ['auto', 'short', 'long']
const AtToast: React.FunctionComponent<AtToastProps> = props => {
  const { isOpened, text, children, maskHide, onClick, onClose, customStyle } =
    props
  let { duration = 'auto' } = props
  duration = LEGAL_DURATION.indexOf(duration) > -1 ? duration : 'auto'

  const rootClassName = 'at-toast'

  const [_isOpened, setOpened] = useState<boolean>(isOpened)
  const [_timer, setTimer] = useState<NodeJS.Timeout | null>(null)
  const [durationTimer, setDuration] = useState<number>(0)

  let toastContent: React.ReactNode | string | undefined = text
  if (text) {
    toastContent = text
  } else {
    toastContent = children
  }
  // ========================= Events =========================
  const clearTimmer = useCallback((): void => {
    if (_timer) {
      clearTimeout(_timer)
      setTimer(null)
    }
  }, [_timer])
  const close = useCallback((): void => {
    if (_isOpened) {
      setOpened(false)
      clearTimmer()
    }
  }, [_isOpened, clearTimmer])
  const makeTimer = useCallback(
    (durationTimer: number): void => {
      const tempTimer = setTimeout(() => {
        close()
      }, +durationTimer)
      setTimer(tempTimer)
    },
    [close]
  )
  const handleClick = useCallback(
    (event: CommonEvent): void => {
      if (onClick) {
        return onClick(event)
      }
      close()
    },
    [close, onClick]
  )
  const handleClose = useCallback(
    (event?: CommonEvent): void => {
      if (typeof onClose === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        onClose(event!)
      }
    },
    [onClose]
  )
  // ========================= Effect =========================
  // 同步外界isOpened状态
  useEffect(() => {
    setOpened(isOpened)
  }, [isOpened])
  // 字符串duration转换准确时间
  useEffect(() => {
    if (duration === 'auto') {
      text && text.length > 8 ? setDuration(3500) : setDuration(2000)
      return
    }
    setDuration(DURATION_MAP[duration])
  }, [duration, text])
  useEffect(() => {
    if (!_isOpened) {
      close()
      handleClose()
    } else {
      clearTimmer()
      makeTimer(durationTimer || 0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_isOpened, durationTimer])

  // ========================= Render =========================
  return _isOpened ? (
    <Modal
      animationIn='fadeIn'
      animationOut='fadeOut'
      isVisible={_isOpened}
      hasBackdrop={false}
      style={{
        margin: 0
      }}
    >
      <View
        className={classNames(rootClassName)}
        style={customStyle}
        onClick={handleClick}
      >
        {maskHide && <View className='at-toast__overlay' />}
        <View className='at-toast-body'>
          {toastContent && (
            <View className='at-toast-body-content__info'>{toastContent}</View>
          )}
        </View>
      </View>
    </Modal>
  ) : null
}
type rootsiblingsRef = {
  update(element: React.ReactNode, callback?: () => void): void
  destroy(callback?: () => void): void
}

// ====================== toshowToastInModal ======================
const AtToastPlus = forwardRef((props: AtToastProps, ref) => {
  const [_timer, setTimer] = useState<NodeJS.Timeout | null>(null)
  const rootsiblings = useRef<rootsiblingsRef | null>(null)
  // let rootsiblings
  const hide = useCallback(() => {
    if (_timer) {
      clearTimeout(_timer)
      setTimer(null)
    }
    if (rootsiblings) {
      rootsiblings.current?.destroy()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      rootsiblings.current = null
    }
  }, [_timer, rootsiblings])
  const show = useCallback(
    toastOpts => {
      // const text = toastOpts.text
      // if (typeof text !== 'string' || text?.length === 0) {
      //   return
      // }

      toastOpts = Object.assign({}, props, toastOpts, {
        isOpened: true
      })

      rootsiblings.current = new RootSiblings(<AtToast {...toastOpts} />)
    },
    [props]
  )
  useImperativeHandle(
    ref,
    useCallback(
      () => ({
        show,
        hide
      }),
      [hide, show]
    ),
    [hide, show]
  )
  return <AtToast {...props} />
})
AtToastPlus.displayName = 'toastInModal'

let refs: ToastRefObj[] = []

function addNewRef(newRef: ToastRef) {
  refs.push({
    current: newRef
  })
}

function removeOldRef(oldRef: ToastRef | null) {
  refs = refs.filter(r => r.current !== oldRef)
}

export function Toast(props: AtToastProps): any {
  const toastRef = useRef<ToastRef | null>(null)
  const setRef = useCallback((ref: ToastRef | null) => {
    if (ref) {
      toastRef.current = ref
      addNewRef(ref)
    } else {
      removeOldRef(toastRef.current)
    }
  }, [])

  return (
    <RootSiblingParent>
      <AtToastPlus ref={setRef} {...props} />
    </RootSiblingParent>
  )
}
function getRef() {
  const reversePriority = [...refs].reverse()
  const activeRef = reversePriority.find(ref => ref?.current !== null)
  if (!activeRef) {
    return null
  }
  return activeRef.current
}

Toast.show = (params: AtToastProps) => {
  getRef()?.show(params)
}

Toast.hide = () => {
  getRef()?.hide()
}
AtToast.defaultProps = {
  duration: 'auto',
  isOpened: false
}

// export default AtToastPlus
export default Toast
