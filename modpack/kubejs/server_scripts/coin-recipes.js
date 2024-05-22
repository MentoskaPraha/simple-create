ServerEvents.recipes(event => {
  event.shaped(
    "kubejs:coin",
    [
      " A ",
      "ABA",
      " A "
    ],
    {
      A: "minecraft:gold_ingot",
      B: "minecraft:emerald"
    }
  );

  event.shaped(
    "kubejs:enchanted_coin",
    [
      " A ",
      "ABA",
      " A "
    ],
    {
      A: "minecraft:gold_block",
      B: "minecraft:ender_eye"
    }
  );
});
