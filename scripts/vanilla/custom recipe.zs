import crafttweaker.api.recipe.CraftingTableRecipeManager;
import crafttweaker.api.ingredient.IIngredient;

craftingTable.addShaped("philosophers_stone", <item:projecte:philosophers_stone>, [
[<item:minecraft:diamond>,<item:minecraft:netherite_ingot>,<item:minecraft:diamond>],
[<item:minecraft:netherite_ingot>,<item:cataclysm:witherite_block>,<item:minecraft:netherite_ingot>],
[<item:minecraft:diamond>,<item:minecraft:netherite_ingot>,<item:minecraft:diamond>]]);

craftingTable.addShaped("dark_matter",  <item:projecte:dark_matter>, [
[<item:projecte:aeternalis_fuel>*3,<item:projecte:aeternalis_fuel>*3,<item:projecte:aeternalis_fuel>*3],
[<item:projecte:aeternalis_fuel>*3,<item:biggerreactors:uranium_block>*5,<item:projecte:aeternalis_fuel>*3],
[<item:projecte:aeternalis_fuel>*3,<item:projecte:aeternalis_fuel>*3,<item:projecte:aeternalis_fuel>*3]]);

craftingTable.addShaped("klein_star_ein", <item:projecte:klein_star_ein>, [
[<item:projecte:mobius_fuel>,<item:projecte:mobius_fuel>,<item:projecte:mobius_fuel>],
[<item:projecte:mobius_fuel>,<item:cataclysm:ancient_metal_ingot>,<item:projecte:mobius_fuel>],
[<item:projecte:mobius_fuel>,<item:projecte:mobius_fuel>,<item:projecte:mobius_fuel>]]);

craftingTable.addShaped("alchemical_chest", <item:projecte:alchemical_chest>, [
[<item:projecte:low_covalence_dust>,<item:projecte:medium_covalence_dust>,<item:projecte:high_covalence_dust>],
[<tag:items:createbigcannons:stone>,<item:cataclysm:ignitium_ingot>,<tag:items:createbigcannons:stone>],
[<item:minecraft:iron_ingot>,<tag:items:forge:chests/wooden>,<item:minecraft:iron_ingot>]]); 

craftingTable.addShaped('transmutation_tablet', <item:projecte:transmutation_tablet>, [
[<item:cataclysm:ignitium_block>, <item:projecte:dark_matter_block>, <item:cataclysm:ignitium_block>],
[<item:projecte:dark_matter_block>, <item:projecte:transmutation_table>, <item:projecte:dark_matter_block>],
[<item:cataclysm:ignitium_block>, <item:projecte:dark_matter_block>, <item:cataclysm:ignitium_block>]]);

craftingTable.addShapeless("alpine.salt.to.salt", <item:salt:salt> * 1, [
<item:meadow:alpine_salt>]);

craftingTable.addShapeless("sea.salt.to.salt", <item:salt:salt> * 1, [
<item:refurbished_furniture:sea_salt>]);