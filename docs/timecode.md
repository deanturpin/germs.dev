---
tags:
  - audio
  - video
  - timecode
  - production
---




# SMPTE Timecode Guide

## SMPTE - Society of Motion Picture and Television Engineers

HOURS:MINUTES:SECONDS:FRAMES

> timecode and frame rate are not the same thing

- genlock - generator locking

> The solution to this problem is drop-frame timecode, which is sort of like
> leap year for timecode. At 29.97 fps, every minute (except minutes divisible
> by ten), you skip counting the first two frames. You know you’re looking at
> drop frame timecode because the colon between minutes and frames is usually
> replaced by a semicolon.
-- https://www.davidheidelberger.com/2010/06/10/drop-frame-timecode/

## References

- [s32 Unix clock](https://retr0.id/stuff/2038/)
- https://blog.frame.io/2017/07/17/timecode-and-frame-rates/
- https://en.wikipedia.org/wiki/Linear_timecode
- https://en.wikipedia.org/wiki/Vertical_interval_timecode
