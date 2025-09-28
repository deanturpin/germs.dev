---
tags:
  - agile
  - project-management
  - methodologies
  - development
---

# Agile Methodologies

## Roles
- Dev team
- Product owner
- Scrum master

One person shouldn't have all these roles!

## Sprint duration
I have tried a month but it's hard to manage and it's not terribly Agile.
Particularly when it's hard to not have any interruptions even on a 2-week
sprint.

## Sprint zero
Trial run.

## Product backlog
The `product backlog` is a living artefact, higher ranked items should be more
refined. It is a placeholder for a conversation.

Each refined story in the sprint must have a weight/complexity for planning
purposes. These estimates must be done by the people actually doing the work.
They should also have a business value and the `product owner` must share a
clear objective/vision for the forthcoming sprint.

## Estimating
Humans are bad at estimating how long will take. But they are good at comparing
the complexity of tasks: is task two more complex than task one? Use complexity
points to move away from thinking about duration.

Use the Fibonacci sequence so you don't overthink it: is it 2.5 or 3 complexity
points?

> Is this piece of work larger or smaller than this other thing we did last
> week?

Estimate against work that's already been performed. New backlog? Estimate
against a known thing. It might be useful to build up and maintain a list of
example tasks and complexities.

```text
1. One line change in a config file.
2. Multiple line change in a config file.
3. One line change in a compiled file.
5. Multiple line change in a compiled file.
8. Create new Visual Studio project.
```

## Daily scrum

Remember that the daily scrum is not a status meeting for the scrum master,
it's a planning meeting for the dev team. It's also intended for the dev team
so doesn't necessarily include the `scrum master` of `product owner`. Don't
look at the `scrum master`, look at the board.

- What did I do yesterday that…
- What will I do today that…
- Do I see any impediment that prevents me or the team from…

## Scrum master
The scrum master's prime responsibility is removing impediments. Learn to
navigate the politics of your organisation. A dead scrum master is a useless
scrum master. `scrum master` is responsible for success of current sprint,
`product owner` is responsible for the planning of upcoming sprints. `scrum
master` is also responsible for ensuring that planning occurs.

## Meeting the sprint goal
- Teams who manually update their burn down chart show more awareness of how
they are pacing toward their goal.
- Invest 10% of time in refining of backlog. Nice Friday afternoon activity.
Not critical that they occur on the same day.
- Wednesday is a good start sprint day.
- Scope bound versus time bound.
- Burn up isn't part of Scrum framework but it is effective: gives you visibility of things added after the sprint has started
- The `product owner` is the only one who sets the direction of the team.

## Sprint Review
The `sprint review` is not the `product owner`'s chance to review work done
during the Sprint. It gives stakeholders the opportunity to give feedback on the
state and direction of the product. And collaborate on the goals for the next
sprint.

Remove rough estimates from backlog prior to sprint planning.

- Efficiency versus effectiveness?
- Cross-functional dev team
- How to introduce Agile gradually
- Planning poker
- Create reference items so the team has something to compare to
- Predictability is the goal, not velocity

## Customer
- Frequent delivery with client feedback.
- Script the manual installation procedure.

## Agile methodologies
- XP
- Produce delivery of software at the end of each scrum
- Who is the customer?
- Feature list? Action > result > object

## User stories

```text
As a <role> I want <feature> so that <benefit>.
Given <context> when <something happens> then <desired result>.
```

Encourage simplicity: don't put the implementation details in the requirement.

## INVEST
Stories should be:
- Independent
- Negotiable
- Valuable
- Estimable
- Sized appropriately
- Testable

## Testing
- How do we test?

## Sprint review
- Schedule demo of actual software on representative hardware.
- Use comments to direct the next batch of work.

## How long is an epic?
- Theme - multi-year
- Epic - 6 months to 1 year
- Feature - One quarter or less
- Story - One Sprint or less

https://www.scrum.org/forum/scrum-forum/16650/best-practice-size-epics

## Example complexities

### 1
- Single line change in script/config file

### 2
- Single line change in compiled code
- Add an `if` statement around existing code

### 3
- Update a single function
- Remove commented code from a whole file

### 5
- Remove redundant code from a whole file

### 8
- Establish network connection between two objects using existing middleware
- Align third-party dependencies between projects

### 13+
- Consider breaking down the task

## References
- [Why you should burn your backlog now](https://thenewstack.io/mary-poppendieck-on-why-you-should-just-burn-your-backlog/)
- [Redefining software engineering](https://www.infoq.com/presentations/redefining-software-engineering/)

## References
- http://agilemanifesto.org/principles.html
- https://en.wikipedia.org/wiki/PM_Declaration_of_Interdependence
- http://pmdoi.org/
