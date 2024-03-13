StartupEvents.registry("item", event => {
	event.create("meth")
		.displayName("Meth")
		.tooltip("It's exactly what it sounds like. Enjoy!")
		.glow(false)
		.tag("origins:ignore_diet")
		.food(food => {
			food
				.effect("pickyourpoison:comatose", 200, 0, 0.2)
				.effect("minecraft:nausea", 600, 3, 1)
				.effect("farmersdelight:comfort", 1800, 0, 0.5)
				.effect("minecraft:hunger", 1800, 0, 0.5)
				.alwaysEdible()
				.fastToEat()
		});

	event.create("super_meth")
		.displayName("Super Meth")
		.tooltip("Like regular meth, just better in every way.")
		.glow(true)
		.tag("origins:ignore_diet")
		.food(food => {
			food
				.effect("minecraft:levitation", 200, 99, 0.1)
				.effect("spirit-walker:spirit_walk", 200, 1, 0.1)
				.effect("pickyourpoison:comatose", 200, 0, 0.2)
				.effect("minecraft:nausea", 600, 3, 1)
				.effect("farmersdelight:comfort", 1800, 0, 0.5)
				.effect("minecraft:hunger", 1800, 0, 0.5)
				.alwaysEdible()
				.fastToEat()
		});

	event.create("coin")
		.displayName("Coin")
		.glow(false)
		.maxStackSize(16);

	event.create("enchanted_coin")
		.displayName("Enchanted Coin")
		.glow(true)
		.unstackable()
		.texture("kubejs:item/coin");
});
