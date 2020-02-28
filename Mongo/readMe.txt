-Why are we using Promises here? We use promises for a few reasons. First off, async and await require a promise to operate.
Secondly, we use promises to set up error codes as well so if something works or goes wrong, we'll know about it.
This makes runing the server easier.
-What benefits are there for breaking out these functions into their own resource? This is called separation of concers.
What it does is it allows code to be broken apart and made easier to work on. This allows for modularity, especially if code needs specifice purposes.
-What other functionality could you foresee leveraging this separation of concerns technique with? With separation of concerns, relacement of said code becomes easier.
As our technology advances, changes are constant. Having it broken up, we can change parts that need it and allow for low cost in maintenance and while we are changing it to adapt.