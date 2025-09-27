---
tags:
  - regex
  - tools
  - programming-languages
---

# regex

Regular expressions: whilst they are completely unreadable to the uninitiated, once you find your way in they are a pleasingly concise syntax capable of expressing very complex patterns.

In bash I use them all the time:
https://gitlab.com/germs-dev/bt/-/blob/main/bin/fetch.sh?ref_type=heads#L13

In C++ they can look a little clumsy, but they're massively improved with raw strings:
https://gitlab.com/germs-dev/deanturpin/-/blob/main/posts/modern.md#raw-strings

And they even turn up in Wireshark (right now I'm filtering XMPP traffic):

```bash
frame matches "from.*[[:alnum:]]+@localhost"
```
