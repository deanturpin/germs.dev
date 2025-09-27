---
tags:
  - audio
  - pcm
  - digital-audio
  - technical
---



Inspect the hex with `xxd`, a WAV header is 42 bytes and is then followed by
the sample data.

```bash
xxd example.wav | head -10
```

```bash
00000000: 5249 4646 2400 0080 5741 5645 666d 7420  RIFF$...WAVEfmt
00000010: 1000 0000 0100 0100 d007 0000 a00f 0000  ................
00000020: 0100 1000 6461 7461 0000 0080 0000 4582  ....data......E.
00000030: e2d0 126c 9e57 c4b4 308c d41f be7f 0a10  ...l.W..0.......
00000040: 4586 57c2 9f62 9f62 57c2 4586 0a10 be7f  E.W..b.bW.E.....
00000050: d41f 308c c4b4 9e57 126c e2d0 4582 0000  ..0....W.l..E...
00000060: bb7d 1e2f ee93 62a8 3c4b d073 2ce0 4280  .}./..b.<K.s,.B.
00000070: f6ef bb79 a93d 619d 619d a93d bb79 f6ef  ...y.=a.a..=.y..
00000080: 4280 2ce0 d073 3c4b 62a8 ee93 1e2f bb7d  B.,..s<Kb..../.}
00000090: 0000 4582 e2d0 126c 9e57 c4b4 308c d41f  ..E....l.W..0...
```

## Bash

```bash
#!/bin/bash

[[ $# == 1 ]] && count=$1 || count=750

# Fetch some samples
nibbles=8
readarray samples < <(xxd -cols $nibbles -plain -s 42 -len $(( nibbles * count )))

# Loop through samples
i=0
for s in ${samples[*]}; do

    # Extract left channel only
    s=${s:0:4}

    # Shift so all values are positive
    echo -e $i\\t$(( 16#$s + 16#ffff ))
    (( ++i ))
done | graph -T png
```

## JavaScript

```js
<input type="file" id="pcm" /><br>
<p id="status"></p>

<script>
"use strict";

onload = function() {

  // Create a canvas element
  const canvas = document.createElement("canvas");
  const body = document.getElementsByTagName("body")[0];

  // Add it to the DOM
  body.appendChild(canvas);
  const context = canvas.getContext("2d");

  // Set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Create file open handler
  document.getElementById("pcm").onchange = function(e) {

    const file = e.target.files[0];
    const reader = new FileReader(file);
    const status = document.getElementById("status");

    status.innerText = "File size " + file.size + "\n\n";

    // Read WAV header
    var start = 0;
    const headerSize = 44;
    var end = start + headerSize;
    reader.readAsArrayBuffer(file.slice(start, end));
    start += headerSize + 2;

    reader.onload = function(e) {

      // Read a block of samples
      reader.onload = function(e) {

        // const samples = new Uint8Array(e.target.result);
        const samples = new Int16Array(e.target.result);

        for (var i = 0; i < samples.length; i += 1) {

          // const s = ~samples[i] + 1;
          const s = ~(samples[i] - 1) / 0x7fff;
          // const s = samples[i];
          // var s = (samples[i + 1] << 8 | samples[i]) / 128;
          // var s = (samples[i] << 8 | samples[i+1]) / 128;
          // s = ~(s - 1);
          context.fillRect(i/1000, canvas.height * s + canvas.height / 2, .1, .1);
        }
      }

      const block = 2 * 1200 * 1000;
      // const block = 2 * 10;
      end = start + block;
      reader.readAsArrayBuffer(file.slice(start, end));
      start += block;
    }
  }
}
</script>
```

## References
- http://wiki.bash-hackers.org/
- http://www.tldp.org/LDP/abs/html/arithexp.html
- http://shop.oreilly.com/product/0636920010166.do
- http://mywiki.wooledge.org/
