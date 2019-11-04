use baking;
db.dropDatabase();

db.projects.insertMany([
  {
    name: "Chocolate Sponge Cake",
    bakeType: "Cake",
    bread: false,
    cookie: false,
    brownie: false,
    cake: true,
    favourite: false,
    inOven: false,
    cookingTime: "50-60 Minutes",
    description: "Chocolate sponge cake, perfect for a birthday, afternoon tea or weekend treat",
    steps: [
    ["175g unsalted butter, softened, plus extra for the tin", "175g golden caster sugar", "3 large eggs", "50g cocoa powder", "100g self-raising flour (or same quantity plain flour with 1 tsp baking powder)", "1-2 tsp milk", "50g dark chocolate (or milk chocolate if you prefer)", "85g unsalted butter, softened", "175g icing sugar, sieved" ],

    "Heat oven to 190C / 170C fan / gas 5. Butter and line two 20cm sandwich tins with baking parchment.",

    "Use a handheld electric whisk or a freestanding mixer to beat 175g softened unsalted butter and 175g golden caster sugar together in a bowl until creamy and light in colour. Then add 1 large egg, still mixing. Sieve 50g cocoa powder, 100g self-raising flour and a pinch of salt into another bowl and add a third of that to your wet ingredients.",

    "Once combined, add 1 more large egg and another third of the flour mixture and work that in. Then add 1 more large egg and the remaining flour and beat until you have a smooth thick batter. If the batter is stiff, stir in a splash of milk to loosen it.",

    "Divide the mixture between the tins and smooth the top with the back of a spoon. Bake for 20-25 mins until springy to the touch. Take out of the oven and leave in the tins for 10 mins before turning out onto a wire rack to cool completely.",

    "Meanwhile, make the buttercream by melting 50g dark or milk chocolate in the microwave, or in a bowl over just simmering water, making sure the base doesn’t touch the water. Leave to cool. Beat 85g softened unsalted butter and half of the 175g sieved icing sugar together until light and fluffy. Add the remaining icing sugar and melted chocolate and mix together. If the icing is runny, chill in the fridge until it is firm but still spreadable.",

    "To assemble the cake, put a small dollop of icing onto a plate and put one of the cakes on top. Spread the top of the cake with half the icing, leaving a 1cm border around the edge. Put the second cake on top and push down very gently. Spread the remaining icing over the top.",]
  },
  {
    name: "Chocolate Chip Cookie",
    bakeType: "Cookie",
    bread: false,
    cookie: true,
    brownie: false,
    cake: false,
    favourite: false,
    inOven: false,
    cookingTime: "25-30 Minutes",
    description: "An easy chocolate chip cookie recipe for soft biscuits with a squidgy middle that will impress family and friends. Make plenty as they're sure to be a hit",
    steps: [
      ["150g salted butter, softened", "80g light brown muscovado sugar", "80g granulated sugar", "2 tsp vanilla extract", "1 large egg", "225g plain flour", "½ tsp bicarbonate of soda", "¼ tsp salt", "200g plain chocolate chips or chunks"  ],

      "Heat the oven to 190C / fan 170C / gas 5 and line two baking sheets with non-stick baking paper. Put 150g softened salted butter, 80g light brown muscovado sugar and 80g granulated sugar into a bowl and beat until creamy.",

      "Beat in 2 tsp vanilla extract and 1 large egg. Sift 225g plain flour, ½ tsp bicarbonate of soda and ¼ tsp salt into the bowl and mix it in with a wooden spoon.",

      "Add 200g plain chocolate chips or chunks and stir well.",

      "Use a teaspoon to make small scoops of the mixture, spacing them well apart on the baking trays. This mixture should make about 30 cookies.",

      "Bake for 8–10 mins until they are light brown on the edges and still slightly soft in the centre if you press them.",

      "Leave on the tray for a couple of mins to set and then lift onto a cooling rack."]
  },
  {
    name: "Banana Loaf",
    bakeType: "Bread",
    bread: true,
    cookie: false,
    brownie: false,
    cake: false,
    favourite: false,
    inOven: false,
    cookingTime: "50-60 Minutes",
    description: "A cross between banana bread and a drizzle cake, this easy banana loaf recipe is a quick bake that can be frozen and is great for using up overripe bananas",
    steps: [
      ["140g butter, softened, plus extra for the tin", "140g caster sugar", "2 large eggs, beaten", "140g self-raising flour", "1 tsp baking powder", "2 very ripe bananas, mashed", "50g icing sugar", "handful dried banana chips, for decoration" ],

      "Heat the oven to 180C / 160C fan / gas 4. Butter a 900g loaf tin and line the base and sides with baking parchment.",

      "Cream 140g softened butter and 140g caster sugar until light and fluffy, then slowly add 2 beaten large eggs with a little of the 140g flour.",

      "Fold in the remaining flour, 1 tsp baking powder and 2 mashed bananas. Pour into the tin and bake for about 30 mins until a skewer comes out clean.",

      "Cool in the tin for 10 mins, then remove to a wire rack.",

      "Mix 50g icing sugar with 2-3 tsp water to make a runny icing. ",

      "Drizzle the icing across the top of the cake and decorate with a handful of banana chips."]
  },
  {
    name: "Chocolate Raspberry Brownie",
    bakeType: "Brownie",
    bread: false,
    cookie: false,
    brownie: true,
    cake: false,
    favourite: false,
    inOven: false,
    cookingTime: "50-60 Minutes",
    description: "A cross between banana bread and a drizzle cake, this easy banana loaf recipe is a quick bake that can be frozen and is great for using up overripe bananas",
    steps: [
      ["200g dark chocolate, broken into chunks", "100g milk chocolate, broken into chunks", "250g pack salted butter", "400g soft light brown sugar", "4 large eggs", "140g plain flour", "50g cocoa powder", "200g raspberries" ],

      "Heat oven to 180C / 160C fan / gas 4.",

      "Line a 20 x 30cm baking tray tin with baking parchment.",

      "Put the chocolate, butter and sugar in a pan and gently melt, stirring occasionally with a wooden spoon. Remove from the heat. Stir the eggs, one by one, into the melted chocolate mixture.",

      "Sieve over the flour and cocoa, and stir in. Stir in half the raspberries, scrape into the tray, then scatter over the remaining raspberries.",

      "Bake on the middle shelf for 30 mins or, if you prefer a firmer texture, for 5 mins more.",

      "Cool before slicing into squares. Store in an airtight container for up to 3 days."]
  },
  {
    name: "Hazelnut Brownies",
    bakeType: "Brownie",
    bread: false,
    cookie: false,
    brownie: true,
    cake: false,
    favourite: false,
    inOven: false,
    cookingTime: "60 Minutes",
    description: "Ferrero Rocher chocolates make an indulgent finishing touch to these fudgy chocolate brownie squares studded with chopped nuts",
    steps: [
      ["box of 16 Ferrero Rocher chocolates", "250g pack salted butter, plus extra for greasing", "250g golden caster sugar", "225g light muscovado sugar", "4 large eggs", "100g cocoa powder", "100g self-raising flour", "85g ready-chopped hazelnuts", "4 tbsp Frangelico or Fratello hazelnut liqueur (or Disaronno)" ],

      "Unwrap the chocolates, place on a tray and pop in the freezer. Lightly grease and line the base and sides of a 21-22cm square tin with baking parchment.",

      " Heat oven to 180C/160C fan/gas 4. Put the butter, sugars and cocoa into your largest saucepan and gently melt together, stirring regularly so the mixture doesn’t catch. Once the sugar granules have just about disappeared, take off the heat, tip into a bowl and leave to cool for 5 mins.",

      "Use a whisk or wooden spoon to beat the eggs, one by one, into the mixture. When they’re completely incorporated and the mixture is smooth and shiny, stir in the flour, hazelnuts and liqueur. Tip the mixture into the prepared tin and bake for 35 mins.",

      "Remove the tin from the oven and use a cutlery knife to mark the top of the brownies into 16 squares (don’t cut through, it’s just as a guide).",

      "Use a teaspoon to push a little dent in the centre of each portion and add a frozen Ferrero Rocher chocolate into each dip. Return to the oven for 3 mins, then remove and leave to cool completely.",

      "Once cool, cut into 16 squares. Will keep for 3 days in an airtight container."]
  }
])
