ServerEvents.recipes(event => {
	event.recipes.create.haunting(Item.of("minecraft:netherrack").withChance(0.2), "minecraft:andesite");
});
