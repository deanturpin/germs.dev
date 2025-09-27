# SDLC

## Waterfall versus agile
Construction of a building is often used to describe the software design
process. But the analogy breaks down the building designer only has one attempt
to compile the building. If he could try a different foundation halfway through
then he probably would.

Actually in Royce's later revisions of the model he stated that the whole
process should be done "twice if possible".

## Software validation versus verification
Validation is concerned with checking that the system will meet the customer’s
actual needs. Verification will help to determine whether the software is of
high quality, but it will not ensure that the system is useful.

Verification is objective (quality), validation is subjective (customer needs).

Validation is the process of checking whether the specification captures the
customer’s needs, while verification is the process of checking that the
software meets the specification.

See [difference between verification and validation](https://www.easterbrook.ca/steve/2010/11/the-difference-between-verification-and-validation/).

## Waterfall
- Conception
- Initiation
- Analysis
- Design
- Construction
- Testing
- Implementation
- Maintenance

## RADCTO
- Requirements capture
- Analysis
- Design
- Coding
- Testing
- Deploy
- Maintain

## Advantages
- The waterfall methodology stresses meticulous record keeping. Having such
records allows for the ability to improve upon the existing program in the
future.
- With the waterfall methodology, the client knows what to expect. They’ll have
an idea of the size, cost, and timeline for the project. They’ll have a
definite idea of what their program will do in the end.
- In the case of employee turnover, waterfall’s strong documentation allows for
minimal project impact.

## Disadvantages
- You don't know if you really need something until you use it to do a job.
- Once a step has been completed, developers can’t go back to a previous stage
and make changes.
- Waterfall methodology relies heavily on initial requirements. However, if
these requirements are faulty in any manner, the project is doomed.
- If a requirement error is found, or a change needs to be made, the project
has to start from the beginning with all new code.
- The whole product is only tested at the end. If bugs are written early, but
discovered late, their existence may have affected how other code was
written. Additionally, the temptation to delay thorough testing is often high,
as these delays allow short-term wins of staying on-schedule.
- The plan doesn’t take into account a client’s evolving needs. If the client
realizes that they need more than they initially thought, and demand change,
the project will come in late and impact budget.

## When should you use waterfall methodology?
- When there is a clear picture of what the final product should be. I think
software engineers work better within an Agile framework. The short bursts of
work help you keep your focus but I think the empowerment is where you see the
difference in peoples' behaviours.
- When clients won’t have the ability to change the scope of the project once
it has begun.
- When definition, not speed, is key to success.

# Agile
- TDD - Test driven design
- BDD - behavioural driven design
- CI - continuous integration
- CD - continuous deployment

# BDD
What to call your test is easy -- it’s a sentence describing the next behaviour
in which you are interested. How much to test becomes moot -- you can only
describe so much behaviour in a single sentence. When a test fails, simply work
through the process described above – either you introduced a bug, the
behaviour moved, or the test is no longer relevant.

- Given some initial context (the givens)
- When an event occurs
- Then ensure some outcomes

# Resources
- [Introducing BDD](https://dannorth.net/introducing-bdd/)
- [https://lizkeogh.com/2009/11/06/translating-tdd-to-bdd/](Translating TDD to BDD)

# TDD
Test-driven development (TDD) is a software development process that relies on
the repetition of a short development cycle: requirements are turned into
specific test cases, then the software is improved to pass the new tests, only.
This is opposed to software development that allows software to be added that
is not proven to meet requirements.

> As a [X] I want [Y] in order to [Z]

# Title: Customer withdraws cash
- As a customer,
- I want to withdraw cash from an ATM,
- so that I don’t have to wait in line at the bank.

## Scenario 1: Account is in credit
- Given the account is in credit
- And the card is valid
- And the dispenser contains cash
- When the customer requests cash
- Then ensure the account is debited
- And ensure cash is dispensed
- And ensure the card is returned

