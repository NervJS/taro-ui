#!/usr/bin/env node
/**
 * Generate Taro Playground QR codes for RN demo bundles.
 * Matches the URL scheme used by zhiqingchen/taro-react-native-release.
 */
import { mkdirSync } from 'node:fs'
import { dirname, posix, join, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

export function jsdelivrPrefix({
  cdnHost = 'https://cdn.jsdelivr.net',
  cdnPath = '/gh',
  repository,
  refName,
  workingDirectory = 'examples/demo-rn'
}) {
  const repoPath = `${cdnPath}/${repository}@${refName}`
  const workdir = workingDirectory.replace(/^\.\//, '').replace(/\/$/, '')
  return `${cdnHost}${posix.join(repoPath, workdir)}/`
}

export function githubReleasePrefix({ repository, tag }) {
  return `https://github.com/${repository}/releases/download/${tag}/`
}

export function playgroundUri({ platform, bundleUrl, appName, logo }) {
  return `taro://releases?platform=${platform}&url=${encodeURIComponent(
    bundleUrl
  )}&name=${encodeURIComponent(appName)}&logo=${encodeURIComponent(logo)}`
}

export function bundlePublicUrl(prefix, bundlePath) {
  return `${prefix}${bundlePath.replace(/^\.\//, '')}`
}

export function writeQrPng(text, dest) {
  mkdirSync(dirname(dest), { recursive: true })
  const result = spawnSync(
    'npx',
    ['--yes', 'qrcode@1.5.4', '-o', dest, '-t', 'png', text],
    { stdio: 'inherit' }
  )
  if (result.status !== 0) {
    throw new Error(`qrcode generation failed for ${dest}`)
  }
}

function parseArgs(argv) {
  const args = {}
  for (let i = 0; i < argv.length; i++) {
    const key = argv[i]
    if (!key.startsWith('--')) continue
    args[key.slice(2)] = argv[i + 1]
    i++
  }
  return args
}

export function planQrFiles({
  repository,
  refName,
  refType,
  workingDirectory = 'examples/demo-rn',
  appName = 'Taro-UI-Demo',
  logo = '',
  cdnHost,
  cdnPath
}) {
  const prefix =
    refType === 'tag'
      ? githubReleasePrefix({ repository, tag: refName })
      : jsdelivrPrefix({
          cdnHost,
          cdnPath,
          repository,
          refName,
          workingDirectory
        })

  const bundles = [
    {
      platform: 'ios',
      bundlePath:
        refType === 'tag' ? 'ios-main.js' : 'release/ios/main.js',
      qrPath: 'release/qrcode/ios.png'
    },
    {
      platform: 'android',
      bundlePath:
        refType === 'tag' ? 'android-main.js' : 'release/android/main.js',
      qrPath: 'release/qrcode/android.png'
    }
  ]

  return bundles.map(bundle => {
    const bundleUrl = bundlePublicUrl(prefix, bundle.bundlePath)
    const qrText = playgroundUri({
      platform: bundle.platform,
      bundleUrl,
      appName,
      logo
    })
    return { ...bundle, bundleUrl, qrText }
  })
}

function main() {
  const args = parseArgs(process.argv.slice(2))
  const workingDirectory = args.workingdirectory || 'examples/demo-rn'
  const cwd = join(process.cwd(), workingDirectory)
  const plans = planQrFiles({
    repository: args.repository,
    refName: args.refname,
    refType: args.reftype,
    workingDirectory,
    appName: args.appname,
    logo: args.logo,
    cdnHost: args.cdnhost,
    cdnPath: args.cdnpath
  })

  for (const plan of plans) {
    const dest = join(cwd, plan.qrPath)
    writeQrPng(plan.qrText, dest)
    console.log(`generated ${plan.platform} qr: ${plan.bundleUrl}`)
  }
}

const isDirectRun =
  Boolean(process.argv[1]) &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)

if (isDirectRun) {
  main()
}
