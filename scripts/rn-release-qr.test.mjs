import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  jsdelivrPrefix,
  githubReleasePrefix,
  playgroundUri,
  bundlePublicUrl,
  planQrFiles
} from './rn-release-qr.mjs'

test('jsdelivrPrefix matches historical taro-react-native-release layout', () => {
  assert.equal(
    jsdelivrPrefix({
      repository: 'jd-opensource/taro-ui',
      refName: 'next',
      workingDirectory: './examples/demo-rn'
    }),
    'https://cdn.jsdelivr.net/gh/jd-opensource/taro-ui@next/examples/demo-rn/'
  )
})

test('githubReleasePrefix uses release download URLs', () => {
  assert.equal(
    githubReleasePrefix({
      repository: 'jd-opensource/taro-ui',
      tag: 'v3.4.2'
    }),
    'https://github.com/jd-opensource/taro-ui/releases/download/v3.4.2/'
  )
})

test('playgroundUri encodes bundle url, name and logo', () => {
  const uri = playgroundUri({
    platform: 'ios',
    bundleUrl:
      'https://cdn.jsdelivr.net/gh/jd-opensource/taro-ui@next/examples/demo-rn/release/ios/main.js',
    appName: 'Taro-UI-Demo',
    logo: 'https://example.com/logo.jpg'
  })
  assert.match(uri, /^taro:\/\/releases\?/)
  assert.match(uri, /platform=ios/)
  assert.match(uri, /url=https%3A%2F%2Fcdn\.jsdelivr\.net/)
  assert.match(uri, /name=Taro-UI-Demo/)
  assert.match(uri, /logo=https%3A%2F%2Fexample\.com%2Flogo\.jpg/)
})

test('planQrFiles on a branch uses jsDelivr bundle paths', () => {
  const [ios, android] = planQrFiles({
    repository: 'jd-opensource/taro-ui',
    refName: 'next',
    refType: 'branch',
    appName: 'Taro-UI-Demo',
    logo: 'https://example.com/logo.jpg'
  })
  assert.equal(
    ios.bundleUrl,
    'https://cdn.jsdelivr.net/gh/jd-opensource/taro-ui@next/examples/demo-rn/release/ios/main.js'
  )
  assert.equal(
    android.bundleUrl,
    'https://cdn.jsdelivr.net/gh/jd-opensource/taro-ui@next/examples/demo-rn/release/android/main.js'
  )
  assert.equal(bundlePublicUrl(jsdelivrPrefix({
    repository: 'jd-opensource/taro-ui',
    refName: 'next'
  }), 'release/ios/main.js'), ios.bundleUrl)
})

test('planQrFiles on a tag uses GitHub Release asset names', () => {
  const [ios] = planQrFiles({
    repository: 'jd-opensource/taro-ui',
    refName: 'v3.4.2',
    refType: 'tag',
    appName: 'Taro-UI-Demo',
    logo: 'https://example.com/logo.jpg'
  })
  assert.equal(
    ios.bundleUrl,
    'https://github.com/jd-opensource/taro-ui/releases/download/v3.4.2/ios-main.js'
  )
})
