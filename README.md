# Project Atlas

For a long time now I have been talking about putting together a collection of services focused around improving my personal wellbeing, with a particular focus around personal metadata. The overarching goal here is to pull in and display as much metadata about myself as possible. This may include things like dietary, exercise, mental health, sleep, and financial data - basically anything I can track or collect about myself.

I strongly believe the best way to improve my personal wellbeing at the moment is to loose some (a lot) of weight. I've always been a bigger bloke who likes his food but it's about time I learn that good food doesn't mean unhealthy food.

At the moment I am very much in the research phase of the project. There are some high-level questions I want to answer before I really dig into things;

- [ ] What data can I collect and how?
- [ ] What technologies should I use?
- [x] On a scale of 1-10 how much should I over-engineer this?
- [x] How do I work out my optimal caloric intake?
- [ ] What determines a balanced diet?
- [x] What is my goal weight?
- [x] I want to look good for Matt's Wedding, how quickly do I need to loose weight?

## On a scale of 1-10 how much should I over-engineer this?

The only really acceptable answer is 11. Could this be a series of spreadsheets? Yes. Will it be? Absolutely not.

## How do I work out my optimal caloric intake?

There's definitely a lot of research to be done and ultimately I'd like to speak to a dietician to sanity check anything that I conclude here.

The two Wikipedia pages [here](https://en.wikipedia.org/wiki/Basal_metabolic_rate) and [here](https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation) explain Basal Metabolic Rate (BMR) pretty well I think, as well as provide a number of methods for calculating it. From my reading, once we have BMR we can then multiply it by a factor to approximate our Total Daily Energy Expenditure (TDEE).

From what I have read the Harris–Benedict equation revised by Mifflin and St Jeor seems to be the best way to go about things to calculate BMR, then using your [Physical Activity Level](https://en.wikipedia.org/wiki/Physical_activity_level) (PAL) to determine the factor to multiply by to approximate TDEE.

As an example of what these calculations would look like for me today;

`BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5`

`BMR = (10 × 160) + (6.25 × 180) - (5 × 28) + 5`

`BMR = 2590`

`TDEE = BMR x PAL`

`TDEE = 2590 x 1.4`

`TDEE = 3626`

So that tells us how many calories we need to consume to maintain. But that's not what we're here for, we're here to loose some weight. According to [this](https://en.wikipedia.org/wiki/Caloric_deficit) it takes a deficit of 7000 calories to reduce 1kg of weight. That means in order to loose 1kg a week I need to consume on average `2626` calories a day. This number will also reduce slightly as I do loose weight too.

## What is my goal weight?

Realistically I think this is very subjective and depending on muscle mass I don't think there is a a super good way to really determine this aside from an educated guess. So let's see what the internet has to say about [ideal body weight](https://en.wikipedia.org/wiki/Human_body_weight#Ideal_body_weight) (IBW). It seems that the Devine formula is the goto in the Medical field so let's go with that.

According to Devine my ideal weight should be `50 kg + 0.9 kg × (height − 152)`, or `75.2kg`. Frankly that number is terrifying. That's less than half of me. Half.

While it's not a great single metric let's also take a look at [Body Mass Index](https://en.wikipedia.org/wiki/Body_mass_index) (BMI). BMI is calculated by `weight (kg) / [height (m)]^2`. For me currently that is `160 / 1.8^2`, or `49`. That very obviously puts me in the Obese category. According to [this](https://en.wikipedia.org/wiki/Body_mass_index#Categories) the upper limit of the healthy BMI range is 25. To have a BMI of 25 I would have to weight in at 82kg.

While I do think both of those numbers (75 and 82) are ultimately reasonable, I think a responsible goal for now should be 99kg. That gets me down to double digits (woo!) and should put me (completely unfounded) into a healthy weight range.

## I want to look good for Matt's Wedding...

As of today (7/12/2020), there are 30 weeks between now and Matt's Wedding (7/7/2021). Hitting my goal of 99kg between now and then isn't likely achievable, that would mean dropping on average 2kg per week. I'm no expert but I have a feeling that would be very unhealthy. Looking good is subjective and realistically my desire here it to not look like I do today - anywhere below today is good.

Update: I did nothing...
