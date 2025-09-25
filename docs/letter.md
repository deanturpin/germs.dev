# An open letter

Things I've learned in 20+ years as a software engineer.

## Touch type

When you're deep in the debug zone there's no time for [hunt and peckers](https://en.wiktionary.org/wiki/hunt-and-peck). Curiously, senior engineers can be a little snooty about touch typing, but anything that gets in the way of expressing yourself can only be a bad thing. You should be able to manage at least [50 wpm](https://play.typeracer.com/).

## Eat your own dog food

Use the tools, OS and software you use/write to [do a job](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) -- be it your actual day job or your home side projects -- but aim to use your software as an _end user_. If you target Linux enterprise by day then you should be running latest Ubuntu at night; use Jira at work, then use GitLab Issues to manage your chores. And you need a side-hustle.

## Side hustles

It's important to develop outside of your normal work. When you're not limited by the constraints of your day job you can experiment with new technologies and techniques; you'll often find you want to incorporate these discoveries into your daily work. Family and responsibility will make this harder so do it while you can.

## Learn habitually

Don't just study when somebody thinks you should go on a course. In my whole career I think only one formal training course has had any lasting impact (as it happens it was an introduction to Agile). See if you can convince somebody to pay for a [Pluralsight](https://www.pluralsight.com/) subscription or at least make use of the free trial to pique your interest.

## Document everything

Always. Maybe [build a personal website](https://turpin.one) and [document what you know](https://turpin.dev). You'll never finish but you have to start.

Make sure you use something that is simple and futureproof (like markdown).

## Profile everything

Received wisdom is not as good as your own up-to-date experience. Measure or it didn't happen.

## You need a website

No excuses. You could roll your own but if you're not a web professional it will suck. This is hosted by GitLab Pages.

## Develop in the debugger

There are times when you find yourself debugging with `printf` or `cout` but this should be a last resort: it's incredibly slow and doesn't give you anywhere near the insight of a proper debugger. If this is normal then you need to fix your dev environment. See [gdbgui](https://www.gdbgui.com/) and [some other Linux debuggers](https://www.drdobbs.com/testing/13-linux-debuggers-for-c-reviewed/240156817).

## It's complicated

Get comfortable [describing the complexity of your code](https://www.bigocheatsheet.com/).

## Use git

Even if you don't end up pushing to a repo like [GitLab](https://gitlab.com/). It's useful to have a lightweight config control tool only a `git init` away.

## Learn a fundamentally different language

JavaScript and Python are quite similar to C++ syntactically but also in mindset. Try Haskell and blow your mind.

Additionally, annoyingly, it's tempting to want to be the bleeding edge in a particular language but industry is six years behind so it probably won't help your job hunting. Just learn another language.

## Keep your head in the cloud

Register with a cloud provider, spin up a VM and compile things. Cloud computing isn't going away and just doing this alone exercises a whole heap of
excellent transferable skills. In fact you don't even have to provision a VM, just click "Google Cloud Shell" for ad-hoc command line tests.

## Give credit where it's due

Make sure to credit your colleagues for any help they give you (probably at standup).

## Trigger's broom

Everything you write will be rewritten one day: you just have to decide whether to do it iteratively when you want, or all at once when you don't.

## Implement the basics and then optimise

Not my advice but something I'm still reminded of regularly: sometimes a crude
implementation is good enough and it will let you get a feel for your new
feature's worth before investing additional time.

> Programmers waste enormous amounts of time thinking about, or worrying about,
> the speed of noncritical parts of their programs, and these attempts at
> efficiency actually have a strong negative impact when debugging and
> maintenance are considered. We should forget about small efficiencies, say
> about 97% of the time: premature optimization is the root of all evil. Yet we
> should not pass up our opportunities in that critical 3%.
&mdash; [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth)

## Packet sniffing

Use Wireshark regularly. It's quite the rabbit hole if you want to really into it, but just firing it up and opening the IO graph is informative.
Create filters for TCP and UDP to get a feel for what traffic _you're_ generating.

If you're really desperate Windows 10 has [one built in](https://betanews.com/2020/05/18/windows-10-secret-network-packet-monitor/).

## Come up with some equivalent timings in seconds

E.g., opening your laptop takes one second.

| actions | duration |
| --- | --- |
| execute typical instruction | 1/1,000,000,000 sec = 1 nanosec |
| fetch from L1 cache memory| 0.5 nanosec |
| branch misprediction| 5 nanosec |
| fetch from L2 cache memory| 7 nanosec |
| Mutex lock/unlock| 25 nanosec |
| fetch from main memory| 100 nanosec |
| send 2K bytes over 1Gbps network| 20,000 nanosec |
| read 1MB sequentially from memory| 250,000 nanosec |
| fetch from new disk location (seek)| 8,000,000 nanosec |
| read 1MB sequentially from disk| 20,000,000 nanosec |
| send packet US to Europe and back| 150 milliseconds = 150,000,000 nanosec |

## Use ChatGPT

As a supercharged search engine, to check your code for bugs and within your IDE to learn about the language and streamline any repetitive coding (like defining benchmarks and unit tests). Even better... pay for Claude Code.

## Don't be afraid to change your mind

It can sometimes be difficult to back out of an idea/solution -- especially if you've already invested some time in it -- but do not double down to save face! A week of wasted work is better than a lifetime of pain.

