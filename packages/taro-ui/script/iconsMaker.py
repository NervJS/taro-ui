# -*- coding: UTF-8 -*-
# iconfont.svg 通过 woff 字体文件转化而来
# Convert iconfont.svg into svg icons
# excute: python iconsMaker.py ../rn/assets/iconfont.svg
import sys
import re

if len(sys.argv) < 2:
  sys.exit()

with open(sys.argv[1], 'r') as r:
  lines = r.read().split('\n')
  glyphs = [x for x in lines if '<glyph' in x]

  for i in range(0, len(glyphs)):
    filename = re.search(r'glyph-name="([^"]+)"', glyphs[i])
    filename = filename.group(1) if filename else str(i + 1).rjust(3, '0')

    if filename.startswith('.'):
      continue

    with open('../rn/assets/icons/' + filename + '.svg', 'w') as w:
      w.write('<?xml version="1.0" standalone="no"?>\n')
      w.write('<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\n')
      # replace 'glyph' with 'path' and flip vertically
      w.write(glyphs[i].replace('<glyph', '<path transform="translate(0, 128)"') + '\n')
      w.write('</svg>')
