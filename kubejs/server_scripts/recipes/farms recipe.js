ServerEvents.recipes(event => {
    // Bison Burger Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:salad_ingredients' },
            { item: 'farmersdelight:tomato' },
            { item: 'alexsdelight:bison_patty' },
            { item: 'minecraft:beetroot' }
        ],
        result: { item: 'alexsdelight:bison_burger' },
        container: { item: 'minecraft:bread' },
        experience: 20,
        cookingtime: 15,
        recipeBookTab: 'misc'
    });
    // Kangaroo Burger Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:salad_ingredients' },
            { item: 'minecraft:carrot' },
            { tag: 'alexsdelight:cooked_kangaroo' },
            { tag: 'alexsdelight:cooked_kangaroo' }
        ],
        result: { item: 'alexsmobs:kangaroo_burger' },
        container: { item: 'minecraft:bread' },
        experience: 15,
        cookingtime: 25,
        recipeBookTab: 'misc'
    });
    //cheese Burger Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:salad_ingredients' },
            { item: 'farmersdelight:beef_patty' },
            { item: 'farmersdelight:onion' },
            { item: 'farmersdelight:tomato' },
            { tag: 'forge:milk' }
        ],
        result: { item: 'delightful:cheeseburger' },
        container: { item: 'minecraft:bread' },
        experience: 30,
        cookingtime: 25,
        recipeBookTab: 'misc'
    });
    // Pancake Recipe
    event.custom({
    type: 'farmersdelight:cooking',
    ingredients: [
        { item: 'minecraft:sugar' },
        { tag: 'forge:milk' },
        { tag: 'forge:grain' },
        { tag: 'forge:eggs' }
    ],
    result: { item: 'supplementaries:pancake', count: 3 },
    container: { item: 'minecraft:air' },
    experience: 5,
    cookingtime: 5,
    recipeBookTab: 'misc'
    });
    // Cooked Tentacle Recipe
event.custom({
    type: 'farmersdelight:cooking',
    ingredients: [
        { item: 'oceansdelight:tentacles' }
    ],
    result: { item: 'oceansdelight:baked_tentacle_on_a_stick' },
    container: { item: 'minecraft:stick' },
    experience: 15,
    cookingtime: 10,
    recipeBookTab: 'misc'
    });
    // Elder Guardian Roll Recipe
    event.custom({
    type: 'farmersdelight:cooking',
    ingredients: [
        { item: 'oceansdelight:elder_guardian_slice' },
        { item: 'oceansdelight:elder_guardian_slice' },
        { item: 'farmersdelight:rice' }
    ],
    result: { item: 'oceansdelight:elder_guardian_roll' },
    container: { item: 'minecraft:air' },
    experience: 30,
    cookingtime: 100,
    recipeBookTab: 'misc'
    });
    // Fugu Roll Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'oceansdelight:fugu_slice' },
            { item: 'oceansdelight:fugu_slice' },
            { item: 'farmersdelight:rice' }
        ],
        result: { item: 'oceansdelight:fugu_roll' },
        container: { item: 'minecraft:air' },
        experience: 2,
        cookingtime: 100,
        recipeBookTab: 'misc'
    });
    // Cabbage Wrapped Elder Guardian Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:salad_ingredients' },
            { item: 'farmersdelight:tomato' },
            { item: 'farmersdelight:onion' },
            { item: 'oceansdelight:cooked_elder_guardian_slice' }
        ],
        result: { item: 'oceansdelight:cabbage_wrapped_elder_guardian' },
        container: { item: 'minecraft:air' },
        experience: 25,
        cookingtime: 300,
        recipeBookTab: 'misc'
    });
    // Seagrass Salad Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:seagrass' }
        ],
        result: { item: 'oceansdelight:seagrass_salad' },
        container: { item: 'minecraft:bowl' },
        experience: 3,
        cookingtime: 50,
        recipeBookTab: 'meals'
    });
    // Stuffed Cod Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:kelp' },
            { item: 'farmersdelight:onion' },
            { item: 'farmersdelight:tomato' },
            { tag: 'forge:mushrooms' },
            { item: 'minecraft:cod' },
            { item: 'farmersdelight:rope' }
        ],
        result: { item: 'oceansdelight:stuffed_cod' },
        container: { item: 'minecraft:air' },
        experience: 10,
        cookingtime: 100,
        recipeBookTab: 'misc'
    });
    // Crab Bar Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'quark:crab_leg' },
            { tag: 'forge:raw_fishes' },
            { item: 'minecraft:bone_meal' }
        ],
        result: { item: 'quarkdelight:crab_bars' },
        container: { item: 'minecraft:air' },
        experience: 12,
        cookingtime: 80,
        recipeBookTab: 'misc'
    });
    // Cookie Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:grain' },
            { item: 'minecraft:cocoa_beans' },
            { tag: 'forge:grain' }
        ],
        result: { item: 'minecraft:cookie' },
        container: { item: 'minecraft:air' },
        experience: 3,
        cookingtime: 200,
        recipeBookTab: 'misc'
    });
    // Uncanny Cookie Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:grain' },
            { item: 'endersdelight:mite_crust' },
            { tag: 'forge:grain' }
        ],
        result: { item: 'endersdelight:uncanny_cookies' },
        container: { item: 'minecraft:air' },
        experience: 15,
        cookingtime: 200,
        recipeBookTab: 'misc'
    });
    // Sweet Berry Cookie Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:grain' },
            { item: 'minecraft:sweet_berries' },
            { tag: 'forge:grain' }
        ],
        result: { item: 'farmersdelight:sweet_berry_cookie' },
        container: { item: 'minecraft:air' },
        experience: 7,
        cookingtime: 200,
        recipeBookTab: 'misc'
    });
    // Honey Cookie Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:grain' },
            { item: 'minecraft:honey_bottle' },
            { tag: 'forge:grain' }
        ],
        result: { item: 'farmersdelight:honey_cookie' },
        container: { item: 'minecraft:air' },
        experience: 9,
        cookingtime: 200,
        recipeBookTab: 'misc'
    });
    // Nether Skewer Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'nethersdelight:propelpearl' },
            { tag: 'nethersdelight:raw_strider' }
        ],
        result: { item: 'nethersdelight:nether_skewer' },
        container: { item: 'minecraft:blaze_rod' },
        experience: 25,
        cookingtime: 140,
        recipeBookTab: 'misc'
    });
    // Salmonberry Ice Cream Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'delightful:salmonberries' },
            { tag: 'forge:milk' },
            { item: 'minecraft:ice' },
            { item: 'minecraft:sugar' }
        ],
        result: { item: 'delightful:salmonberry_ice_cream' },
        container: { item: 'minecraft:bowl' },
        experience: 5,
        cookingtime: 140,
        recipeBookTab: 'misc'
    });
    // Matcha Ice Cream Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'delightful:matcha' },
            { tag: 'forge:milk' },
            { item: 'minecraft:ice' },
            { item: 'minecraft:sugar' }
        ],
        result: { item: 'delightful:matcha_ice_cream' },
        container: { item: 'minecraft:bowl' },
        experience: 5,
        cookingtime: 1400,
        recipeBookTab: 'misc'
    });
    // Honey Glazed Walnut Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:nuts' },
            { item: 'minecraft:honey_bottle' }
        ],
        result: { item: 'delightful:honey_glazed_walnut' },
        container: { item: 'minecraft:air' },
        experience: 2,
        cookingtime: 100,
        recipeBookTab: 'misc'
    });
    // Crab Rangoon Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'farmersdelight:wheat_dough' },
            { tag: 'forge:milk' },
            { item: 'quark:crab_leg' }
        ],
        result: { item: 'delightful:crab_rangoon' },
        container: { item: 'minecraft:air' },
        experience: 7,
        cookingtime: 160,
        recipeBookTab: 'misc'
    });
    // Berry Matcha Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'minecraft:fox_food' },
            { tag: 'chipped:ice' },
            { tag: 'forge:milk' },
            { item: 'minecraft:honey_bottle' },
            { item: 'delightful:matcha' }
        ],
        result: { item: 'delightful:berry_matcha_latte' },
        container: { item: 'minecraft:glass_bottle' },
        experience: 11,
        cookingtime: 150,
        recipeBookTab: 'drinks'
    });
    // Matcha Latte Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:milk' },
            { item: 'minecraft:honey_bottle' },
            { item: 'delightful:matcha' }
        ],
        result: { item: 'delightful:matcha_latte' },
        container: { item: 'minecraft:glass_bottle' },
        experience: 7,
        cookingtime: 300,
        recipeBookTab: 'drinks'
    });
    // Gongylidia Bruschetta Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:salad_ingredients' },
            { item: 'farmersdelight:tomato' },
            { item: 'alexsmobs:gongylidia' },
            { item: 'alexsmobs:fish_oil' }
        ],
        result: { item: 'alexsdelight:gongylidia_bruschetta' },
        container: { item: 'minecraft:bread' },
        experience: 20,
        cookingtime: 220,
        recipeBookTab: 'misc'
    });
    // Maggot Salad Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'alexsmobs:maggot' },
            { item: 'farmersdelight:cabbage' },
            { item: 'farmersdelight:tomato' },
            { item: 'farmersdelight:onion' },
            { item: 'minecraft:beetroot' }
        ],
        result: { item: 'alexsdelight:maggot_salad' },
        container: { item: 'minecraft:bowl' },
        experience: 6,
        cookingtime: 400,
        recipeBookTab: 'misc'
    });
    // Brainfungus Sandwich Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'farmersdelight:red_mushroom_colony' },
            { tag: 'alexsdelight:cooked_bunfungus' },
            { item: 'farmersdelight:red_mushroom_colony' }
        ],
        result: { item: 'alexsdelight:bunfungus_sandwich' },
        container: { item: 'minecraft:bread' },
        experience: 8,
        cookingtime: 240,
        recipeBookTab: 'misc'
    });
    // Field Salad Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:salad_ingredients' },
            { tag: 'forge:salad_ingredients' },
            { item: 'delightful:cactus_steak' },
            { item: 'minecraft:carrot' },
            { item: 'delightful:salmonberries' },
            { item: 'delightful:acorn' }
        ],
        result: { item: 'delightful:field_salad' },
        container: { item: 'minecraft:bowl' },
        experience: 12,
        cookingtime: 380,
        recipeBookTab: 'misc'
    });
    // Nut Butter and Jam Sandwich Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'delightful:nut_butter_bottle' },
            { tag: 'forge:jelly' }
        ],
        result: { item: 'delightful:nut_butter_and_jelly_sandwich' },
        container: { item: 'minecraft:bread' },
        experience: 7,
        cookingtime: 160,
        recipeBookTab: 'misc'
    });
    // Salmonberry Pie Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'delightful:salmonberries' },
            { item: 'delightful:salmonberries' },
            { item: 'minecraft:wheat' },
            { item: 'minecraft:wheat' },
            { item: 'minecraft:sugar' },
            { item: 'minecraft:sugar' }
        ],
        result: { item: 'delightful:salmonberry_pie' },
        container: { item: 'farmersdelight:pie_crust' },
        experience: 9,
        cookingtime: 240,
        recipeBookTab: 'misc'
    });
    // Chorus Pie Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:chorus_fruit' },
            { item: 'minecraft:chorus_fruit' },
            { item: 'minecraft:wheat' },
            { item: 'minecraft:wheat' },
            { item: 'minecraft:sugar' },
            { item: 'minecraft:sugar' }
        ],
        result: { item: 'endersdelight:chorus_pie' },
        container: { item: 'farmersdelight:pie_crust' },
        experience: 20,
        cookingtime: 240,
        recipeBookTab: 'misc'
    });
    // Apple Pie Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:apple' },
            { item: 'minecraft:apple' },
            { item: 'minecraft:wheat' },
            { item: 'minecraft:wheat' },
            { item: 'minecraft:sugar' },
            { item: 'minecraft:sugar' }
        ],
        result: { item: 'farmersdelight:apple_pie' },
        container: { item: 'farmersdelight:pie_crust' },
        experience: 4,
        cookingtime: 240,
        recipeBookTab: 'misc'
    });
    // Chocolate Pie Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'create:bar_of_chocolate' },
            { item: 'create:bar_of_chocolate' },
            { tag: 'forge:milk' },
            { tag: 'forge:milk' },
            { item: 'minecraft:sugar' },
            { item: 'minecraft:sugar' }
        ],
        result: { item: 'farmersdelight:chocolate_pie' },
        container: { item: 'farmersdelight:pie_crust' },
        experience: 9,
        cookingtime: 400,
        recipeBookTab: 'misc'
    });
    // Chorus Juice Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:chorus_fruit' },
            { tag: 'forge:sugar' }
        ],
        result: { item: 'endersdelight:chorus_juice' },
        container: { item: 'minecraft:glass_bottle' },
        experience: 5,
        cookingtime: 200,
        recipeBookTab: 'drinks'
    });
    // Azalea Tea Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'twigs:azalea_flowers' },
            { tag: 'forge:water' },
            { item: 'delightful:matcha' }
        ],
        result: { item: 'delightful:azalea_tea' },
        container: { item: 'minecraft:glass_bottle' },
        experience: 15,
        cookingtime: 200,
        recipeBookTab: 'drinks'
    });
    // Prickly Pear Juice Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:berries' },
            { tag: 'forge:sugar' },
            { tag: 'chipped:ice' },
            { tag: 'forge:water' }
        ],
        result: { item: 'delightful:prickly_pear_juice' },
        container: { item: 'minecraft:glass_bottle' },
        experience: 5,
        cookingtime: 200,
        recipeBookTab: 'drinks'
    });
    // Melon Juice Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:melon_slice' },
            { item: 'minecraft:melon_slice' },
            { item: 'minecraft:melon_slice' },
            { item: 'minecraft:melon_slice' },
            { tag: 'forge:sugar' }
        ],
        result: { item: 'farmersdelight:melon_juice' },
        container: { item: 'minecraft:glass_bottle' },
        experience: 6,
        cookingtime: 200,
        recipeBookTab: 'drinks'
    });
    // Sweet Berry Cheesecake Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:sweet_berries' },
            { item: 'minecraft:sweet_berries' },
            { item: 'minecraft:sweet_berries' },
            { tag: 'forge:milk' },
            { tag: 'forge:milk' }
        ],
        result: { item: 'farmersdelight:sweet_berry_cheesecake' },
        container: { item: 'farmersdelight:pie_crust' },
        experience: 8,
        cookingtime: 400,
        recipeBookTab: 'misc'
    });
    // Melon Popsicle Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:melon_slice' },
            { item: 'minecraft:melon_slice' },
            { item: 'minecraft:melon_slice' },
            { item: 'minecraft:melon_slice' },
            { item: 'minecraft:ice' },
            { item: 'minecraft:ice' }
        ],
        result: { item: 'farmersdelight:melon_popsicle' },
        container: { item: 'minecraft:stick' },
        experience: 4,
        cookingtime: 100,
        recipeBookTab: 'misc'
    });
    // Lush Moss Salad Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'quark:moss_paste' },
            { item: 'quark:moss_paste' },
            { item: 'minecraft:glow_berries' }
        ],
        result: { item: 'quarkdelight:lush_moss_salad' },
        container: { item: 'minecraft:bowl' },
        experience: 7,
        cookingtime: 140,
        recipeBookTab: 'misc'
    });
    // Bowl of Exotic Fruit Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'quark:ancient_fruit' },
            { item: 'minecraft:melon_slice' },
            { item: 'minecraft:chorus_fruit' }
        ],
        result: { item: 'quarkdelight:bowl_of_exotic_fruits' },
        container: { item: 'minecraft:bowl' },
        experience: 7,
        cookingtime: 140,
        recipeBookTab: 'misc'
    });
    // Warped Moldy Meat Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:warped_roots' },
            { item: 'minecraft:warped_roots' },
            { item: 'nethersdelight:hoglin_sirloin' }
        ],
        result: { item: 'nethersdelight:warped_moldy_meat' },
        container: { item: 'minecraft:bowl' },
        experience: 19,
        cookingtime: 240,
        recipeBookTab: 'misc'
    });
    // Improvised Barbecue Stick Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'miners_delight:baked_cave_carrot' },
            { item: 'minecraft:brown_mushroom' },
            { item: 'miners_delight:smoked_bat_wing' },
            { item: 'miners_delight:smoked_bat_wing' }
        ],
        result: { item: 'miners_delight:improvised_barbecue_stick' },
        container: { item: 'minecraft:stick' },
        experience: 16,
        cookingtime: 200,
        recipeBookTab: 'misc'
    });
    // Horse Feed Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:apple' },
            { item: 'minecraft:apple' },
            { item: 'minecraft:golden_carrot' }
        ],
        result: { item: 'farmersdelight:horse_feed' },
        container: { item: 'minecraft:hay_block' },
        experience: 50,
        cookingtime: 600,
        recipeBookTab: 'misc'
    });
    // Grilled Salmon Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:cooked_fishes/salmon' },
            { item: 'minecraft:sweet_berries' },
            { tag: 'forge:salad_ingredients' },
            { item: 'farmersdelight:onion' }
        ],
        result: { item: 'farmersdelight:grilled_salmon' },
        container: { item: 'minecraft:bowl' },
        experience: 20,
        cookingtime: 600,
        recipeBookTab: 'meals'
    });
    // Steak and Potatoes Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:baked_potato' },
            { tag: 'forge:cooked_beef' },
            { item: 'farmersdelight:cooked_rice' },
            { item: 'farmersdelight:onion' }
        ],
        result: { item: 'farmersdelight:steak_and_potatoes' },
        container: { item: 'minecraft:bowl' },
        experience: 12,
        cookingtime: 550,
        recipeBookTab: 'meals'
    });
    // Roasted Mutton Chops Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:cooked_mutton' },
            { item: 'minecraft:beetroot' },
            { item: 'farmersdelight:cooked_rice' },
            { item: 'farmersdelight:tomato' }
        ],
        result: { item: 'farmersdelight:roasted_mutton_chops' },
        container: { item: 'minecraft:bowl' },
        experience: 17,
        cookingtime: 550,
        recipeBookTab: 'meals'
    });
    // Bacon and Eggs Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'farmersdelight:cooked_bacon' },
            { item: 'farmersdelight:cooked_bacon' },
            { item: 'farmersdelight:fried_egg' },
            { item: 'farmersdelight:fried_egg' }
        ],
        result: { item: 'farmersdelight:bacon_and_eggs' },
        container: { item: 'minecraft:bowl' },
        experience: 18,
        cookingtime: 500,
        recipeBookTab: 'meals'
    });
    // Bacon and Eggs Recipe
    event.custom({
    type: 'farmersdelight:cooking',
    ingredients: [
        { item: 'farmersdelight:cooked_bacon' },
        { item: 'farmersdelight:cooked_bacon' },
        { item: 'farmersdelight:fried_egg' },
        { item: 'farmersdelight:fried_egg' }
    ],
    result: { item: 'farmersdelight:bacon_and_eggs' },
    container: { item: 'minecraft:bowl' },
    experience: 18,
    cookingtime: 500,
    recipeBookTab: 'meals'
    });
    // Kelp Roll Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'farmersdelight:cooked_rice' },
            { item: 'minecraft:carrot' },
            { item: 'farmersdelight:cooked_rice' },
            { item: 'minecraft:dried_kelp' },
            { item: 'minecraft:dried_kelp' },
            { item: 'minecraft:dried_kelp' }
        ],
        result: { item: 'farmersdelight:kelp_roll' },
        container: { item: 'minecraft:air' },
        experience: 18,
        cookingtime: 240,
        recipeBookTab: 'misc'
    });
    // Cod Roll Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'farmersdelight:cod_slice' },
            { item: 'farmersdelight:cod_slice' },
            { item: 'farmersdelight:rice' }
        ],
        result: { item: 'farmersdelight:cod_roll', count: 2 },
        container: { item: 'minecraft:air' },
        experience: 18,
        cookingtime: 100,
        recipeBookTab: 'misc'
    });
    // Salmon Roll Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'farmersdelight:salmon_slice' },
            { item: 'farmersdelight:salmon_slice' },
            { item: 'farmersdelight:rice' }
        ],
        result: { item: 'farmersdelight:salmon_roll', count: 2 },
        container: { item: 'minecraft:air' },
        experience: 18,
        cookingtime: 100,
        recipeBookTab: 'misc'
    });
    // Stuffed Potato Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:baked_potato' },
            { tag: 'items:forge:cooked_beef' },
            { tag: 'items:forge:milk' }
        ],
        result: { item: 'farmersdelight:stuffed_potato' },
        container: { item: 'minecraft:air' },
        experience: 16,
        cookingtime: 180,
        recipeBookTab: 'misc'
    });
    // Mutton Wrap Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'items:forge:cooked_mutton' },
            { tag: 'items:forge:salad_ingredients' },
            { item: 'farmersdelight:onion' }
        ],
        result: { item: 'farmersdelight:mutton_wrap' },
        container: { item: 'minecraft:bread' },
        experience: 5,
        cookingtime: 80,
        recipeBookTab: 'misc'
    });
    // Bacon Sandwich Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'items:forge:cooked_bacon' },
            { tag: 'items:forge:salad_ingredients' },
            { item: 'farmersdelight:tomato' }
        ],
        result: { item: 'farmersdelight:bacon_sandwich' },
        container: { item: 'minecraft:bread' },
        experience: 6,
        cookingtime: 120,
        recipeBookTab: 'misc'
    });
    // Hamburger Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'farmersdelight:beef_patty' },
            { item: 'farmersdelight:cabbage_leaf' },
            { item: 'farmersdelight:tomato' },
            { item: 'farmersdelight:onion' }
        ],
        result: { item: 'farmersdelight:hamburger' },
        container: { item: 'minecraft:bread' },
        experience: 6,
        cookingtime: 400,
        recipeBookTab: 'misc'
    });
    // Chicken Sandwich Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:cooked_chicken' },
            { tag: 'forge:salad_ingredients' },
            { item: 'minecraft:carrot' },
            { item: 'farmersdelight:onion' }
        ],
        result: { item: 'farmersdelight:chicken_sandwich' },
        container: { item: 'minecraft:bread' },
        experience: 6,
        cookingtime: 100,
        recipeBookTab: 'misc'
    });
    // Egg Sandwich Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'farmersdelight:fried_egg' },
            { item: 'farmersdelight:fried_egg' }
        ],
        result: { item: 'farmersdelight:egg_sandwich' },
        container: { item: 'minecraft:bread' },
        experience: 2,
        cookingtime: 100,
        recipeBookTab: 'misc'
    });
    // Barbecue on a Stick Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'farmersdelight:onion' },
            { tag: 'forge:foods/meat/cooked' },
            { item: 'farmersdelight:tomato' }
        ],
        result: { item: 'farmersdelight:barbecue_stick' },
        container: { item: 'minecraft:stick' },
        experience: 10,
        cookingtime: 240,
        recipeBookTab: 'misc'
    });
    // Mixed Salad Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'forge:salad_ingredients' },
            { item: 'farmersdelight:tomato' },
            { item: 'minecraft:beetroot' }
        ],
        result: { item: 'farmersdelight:mixed_salad' },
        container: { item: 'minecraft:bowl' },
        experience: 9,
        cookingtime: 140,
        recipeBookTab: 'misc'
    });
    // Fruit Salad Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:apple' },
            { item: 'minecraft:melon_slice' },
            { item: 'farmersdelight:pumpkin_slice' },
            { tag: 'forge:fruits' },
            { tag: 'forge:fruits' },
            { tag: 'forge:fruits' }
        ],
        result: { item: 'farmersdelight:fruit_salad' },
        container: { item: 'minecraft:bowl' },
        experience: 14,
        cookingtime: 140,
        recipeBookTab: 'misc'
    });
    // Crawling Sandwich Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'endersdelight:shulker_loot' },
            { item: 'minecraft:chorus_fruit' }
        ],
        result: { item: 'endersdelight:crawling_sandwich' },
        container: { item: 'minecraft:bread' },
        experience: 8,
        cookingtime: 160,
        recipeBookTab: 'misc'
    });
    // Strange Eclair Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:wheat' },
            { item: 'minecraft:wheat' },
            { tag: 'forge:sugar' },
            { item: 'minecraft:ender_eye' }
        ],
        result: { item: 'endersdelight:strange_eclair' },
        container: { item: 'minecraft:air' },
        experience: 11,
        cookingtime: 160,
        recipeBookTab: 'misc'
    });
    // Twisted Cereal Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'endersdelight:enderman_sight' },
            { tag: 'endersdelight:enderman_loot' },
            { item: 'minecraft:popped_chorus_fruit' },
            { tag: 'forge:milk' }
        ],
        result: { item: 'endersdelight:twisted_cereal' },
        container: { item: 'endersdelight:shulker_bowl' },
        experience: 9,
        cookingtime: 180,
        recipeBookTab: 'misc'
    });
    // Twisted Cereal (Wood Bowl Version) Recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { tag: 'endersdelight:enderman_sight' },
            { tag: 'endersdelight:enderman_loot' },
            { item: 'minecraft:popped_chorus_fruit' },
            { tag: 'forge:milk' }
        ],
        result: { item: 'endersdelight:twisted_cereal_wood' },
        container: { item: 'minecraft:bowl' },
        experience: 9,
        cookingtime: 180,
        recipeBookTab: 'misc'
    });
    // Chorus Stew Recipe (Wood Bowl Version)
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:chorus_fruit' },
            { item: 'minecraft:chorus_flower' }
        ],
        result: { item: 'endersdelight:chorus_stew_wood' },
        container: { item: 'minecraft:bowl' },
        experience: 1,
        cookingtime: 200,
        recipeBookTab: 'misc'
    });
    // Endermite Stew Recipe (Wood Bowl Version)
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:ender_pearl' },
            { item: 'endersdelight:mite_crust' }
        ],
        result: { item: 'endersdelight:endermite_stew_wood' },
        container: { item: 'minecraft:bowl' },
        experience: 1,
        cookingtime: 200,
        recipeBookTab: 'misc'
    });
    // Pearl Pasta Recipe (Wood Bowl Version)
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'minecraft:ender_pearl' },
            { item: 'endersdelight:chorus_juice' },
            { item: 'farmersdelight:raw_pasta' }
        ],
        result: { item: 'endersdelight:pearl_pasta_wood' },
        container: { item: 'minecraft:bowl' },
        experience: 1,
        cookingtime: 200,
        recipeBookTab: 'misc'
    });
    // Ender Paella Recipe (Wood Bowl Version)
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { item: 'endersdelight:enderman_sight' },
            { tag: 'endersdelight:shulker_loot' },
            { item: 'farmersdelight:rice' },
            { item: 'minecraft:chorus_flower' }
        ],
        result: { item: 'endersdelight:ender_paella_wood' },
        container: { item: 'minecraft:bowl' },
        experience: 1,
        cookingtime: 200,
        recipeBookTab: 'misc'
    });
});