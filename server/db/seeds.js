use baking;
db.dropDatabase();

db.projects.insertMany([
  {
    name: "Chocolate Sponge Cake",
    bakingType: "Cake",
    bread: false,
    cookie: false,
    brownie: false,
    cake: true,
    favourite: false,
    inOven: false,
    rating: null,
    cookingTime: "50-60 Minutes",
    difficulty: "Easy",
    serves: "10",
    description: "Chocolate sponge cake, perfect for a birthday, afternoon tea or weekend treat",
    steps: [ ["175g unsalted butter, softened, plus extra for the tin", "175g golden caster sugar", "3 large eggs", "50g cocoa powder", "100g self-raising flour (or same quantity plain flour with 1 tsp baking powder)", "1-2 tsp milk", "50g dark chocolate (or milk chocolate if you prefer)", "85g unsalted butter, softened", "175g icing sugar, sieved" ],
    "Heat oven to 190C/170C fan/gas 5. Butter and line two 20cm sandwich tins with baking parchment.",

    "Use a handheld electric whisk or a freestanding mixer to beat 175g softened unsalted butter and 175g golden caster sugar together in a bowl until creamy and light in colour. Then add 1 large egg, still mixing.",

    "Sieve 50g cocoa powder, 100g self-raising flour and a pinch of salt into another bowl and add a third of that to your wet ingredients.",

    "Once combined, add 1 more large egg and another third of the flour mixture and work that in.",

    "Then add 1 more large egg and the remaining flour and beat until you have a smooth thick batter. If the batter is stiff, stir in a splash of milk to loosen it.",

    "Divide the mixture between the tins and smooth the top with the back of a spoon.",

    "Bake for 20-25 mins until springy to the touch. Take out of the oven and leave in the tins for 10 mins before turning out onto a wire rack to cool completely.",

    "Meanwhile, make the buttercream by melting 50g dark or milk chocolate in the microwave, or in a bowl over just simmering water, making sure the base doesn’t touch the water. Leave to cool. ",

    "Beat 85g softened unsalted butter and half of the 175g sieved icing sugar together until light and fluffy. Add the remaining icing sugar and melted chocolate and mix together. If the icing is runny, chill in the fridge until it is firm but still spreadable.",

    "To assemble the cake, put a small dollop of icing onto a plate and put one of the cakes on top. Spread the top of the cake with half the icing, leaving a 1cm border around the edge.",

    "Put the second cake on top and push down very gently. Spread the remaining icing over the top."]
  },
  {
    name: "Chocolate Chip Cookie",
    bakingType: "Cookie",
    bread: false,
    cookie: true,
    brownie: false,
    cake: false,
    favourite: false,
    inOven: false,
    rating: null,
    cookingTime: "25-30 Minutes",
    difficulty: "Easy",
    serves: "30",
    description: "An easy chocolate chip cookie recipe for soft biscuits with a squidgy middle that will impress family and friends. Make plenty as they're sure to be a hit",
    steps: [ ["150g salted butter, softened", "80g light brown muscovado sugar", "80g granulated sugar", "2 tsp vanilla extract", "1 large egg", "225g plain flour", "½ tsp bicarbonate of soda", "¼ tsp salt", "200g plain chocolate chips or chunks"  ],
    "Heat the oven to 190C/fan170C/gas 5 and line two baking sheets with non-stick baking paper.",

    "Put 150g softened salted butter, 80g light brown muscovado sugar and 80g granulated sugar into a bowl and beat until creamy.",

    "Beat in 2 tsp vanilla extract and 1 large egg.",

    "Sift 225g plain flour, ½ tsp bicarbonate of soda and ¼ tsp salt into the bowl and mix it in with a wooden spoon.",

    "Add 200g plain chocolate chips or chunks and stir well.",

    "Use a teaspoon to make small scoops of the mixture, spacing them well apart on the baking trays. This mixture should make about 30 cookies.",

    "Bake for 8–10 mins until they are light brown on the edges and still slightly soft in the centre if you press them.",

    "Leave on the tray for a couple of mins to set and then lift onto a cooling rack."]
  },
])
