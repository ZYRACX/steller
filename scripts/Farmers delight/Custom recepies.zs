import mods.farmersdelight.CookingPot;
import mods.farmersdelight.CookingPotRecipeBookTab;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:farmersdelight:cooking>.addRecipe("cake_recipe", <item:minecraft:cake>, 
      [<tag:items:forge:eggs>, <tag:items:forge:sugar>, <tag:items:forge:milk>, <tag:items:forge:milk>, <tag:items:forge:grain>], 
        <constant:farmersdelight:cooking_pot_recipe_book_tab:meals>, <item:minecraft:air>, 200, 600);

<recipetype:farmersdelight:cooking>.addRecipe("bison_burger_recipe", <item:alexsdelight:bison_burger>,
      [<tag:items:forge:salad_ingredients>, <item:farmersdelight:tomato>, <item:alexsdelight:bison_patty>, <item:minecraft:beetroot>], 
      <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bread>, 20, 300);

<recipetype:farmersdelight:cooking>.addRecipe("kangaroo_burger_recipe", <item:alexsmobs:kangaroo_burger>,
      [<tag:items:forge:salad_ingredients>, <item:minecraft:carrot>, <tag:items:alexsdelight:cooked_kangaroo>, <tag:items:alexsdelight:cooked_kangaroo>],
        <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bread>, 15, 500);

<recipetype:farmersdelight:cooking>.addRecipe("cheese_burger_recipe", <item:delightful:cheeseburger>,
      [<tag:items:forge:salad_ingredients>, <item:farmersdelight:beef_patty>, <item:farmersdelight:onion>, <item:farmersdelight:tomato>, <tag:items:forge:milk>],
        <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bread>, 30, 500);

<recipetype:farmersdelight:cooking>.addRecipe("pancake_recipe", <item:supplementaries:pancake>*3,
      [<item:minecraft:sugar>, <tag:items:forge:milk>, <tag:items:forge:grain>, <tag:items:forge:eggs>],
        <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 5, 100);

<recipetype:farmersdelight:cooking>.addRecipe("cooked_tentacle_recipe", <item:oceansdelight:baked_tentacle_on_a_stick>,
      [<item:oceansdelight:tentacles>],
        <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:stick>, 15, 200);

<recipetype:farmersdelight:cooking>.addRecipe("elder_gauardian_roll_recipe", <item:oceansdelight:elder_guardian_roll>,
      [<item:oceansdelight:elder_guardian_slice>, <item:oceansdelight:elder_guardian_slice>, <item:farmersdelight:rice>],
        <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 30, 100);

<recipetype:farmersdelight:cooking>.addRecipe("fugu_roll_recipe", <item:oceansdelight:fugu_roll>,
      [<item:oceansdelight:fugu_slice>, <item:oceansdelight:fugu_slice>, <item:farmersdelight:rice>],
        <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 2, 100);

<recipetype:farmersdelight:cooking>.addRecipe("cabbage_wrapped_elder_gaurdain_recipe", <item:oceansdelight:cabbage_wrapped_elder_guardian>,
      [<tag:items:forge:salad_ingredients>, <item:farmersdelight:tomato>, <item:farmersdelight:onion>, <item:oceansdelight:cooked_elder_guardian_slice>],
         <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 25, 300);

<recipetype:farmersdelight:cooking>.addRecipe("seagrass_salad", <item:oceansdelight:seagrass_salad>,
      [<item:minecraft:seagrass>],
         <constant:farmersdelight:cooking_pot_recipe_book_tab:meals>, <item:minecraft:bowl>, 3, 50);

<recipetype:farmersdelight:cooking>.addRecipe("stuffed_cod_recipe", <item:oceansdelight:stuffed_cod>,
      [<item:minecraft:kelp>, <item:farmersdelight:onion>, <item:farmersdelight:tomato>, <tag:items:forge:mushrooms>, <item:minecraft:cod>, <item:farmersdelight:rope>],
         <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 10, 100);

<recipetype:farmersdelight:cooking>.addRecipe("crab_bar_recipe", <item:quarkdelight:crab_bars>,
      [<item:quark:crab_leg>, <tag:items:forge:raw_fishes>, <item:minecraft:bone_meal>],
         <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 12, 80);

<recipetype:farmersdelight:cooking>.addRecipe("cookie_recipe", <item:minecraft:cookie>,
      [<tag:items:forge:grain>, <item:minecraft:cocoa_beans>, <tag:items:forge:grain>],
         <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 3, 200);

<recipetype:farmersdelight:cooking>.addRecipe("uncanny_cookie_recipe", <item:endersdelight:uncanny_cookies>,
      [<tag:items:forge:grain>, <item:endersdelight:mite_crust>, <tag:items:forge:grain>],
         <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 15, 200);

<recipetype:farmersdelight:cooking>.addRecipe("sweet_berry_cookie_recipe", <item:farmersdelight:sweet_berry_cookie>,
      [<tag:items:forge:grain>, <item:minecraft:sweet_berries>, <tag:items:forge:grain>],
         <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 7, 200);   

<recipetype:farmersdelight:cooking>.addRecipe("honey_cookie_recipe", <item:farmersdelight:honey_cookie>,
      [<tag:items:forge:grain>, <item:minecraft:honey_bottle>, <tag:items:forge:grain>],
         <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 9, 200);   

<recipetype:farmersdelight:cooking>.addRecipe("nether_skewer_recipe", <item:nethersdelight:nether_skewer>,
      [<item:nethersdelight:propelpearl>, <tag:items:nethersdelight:raw_strider>],
         <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:blaze_rod>, 25, 140);

<recipetype:farmersdelight:cooking>.addRecipe("salmonberry_ice_crem_recipe", <item:delightful:salmonberry_ice_cream>,
      [<item:delightful:salmonberries>, <tag:items:forge:milk>, <item:minecraft:ice>, <item:minecraft:sugar>],
         <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bowl>, 5, 140);

<recipetype:farmersdelight:cooking>.addRecipe("matcha_ice_cream_recipe", <item:delightful:matcha_ice_cream>,
      [<item:delightful:matcha>, <tag:items:forge:milk>, <item:minecraft:ice>, <item:minecraft:sugar>],
         <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bowl>, 5, 1400);

<recipetype:farmersdelight:cooking>.addRecipe("honey_glazed_walnut_recipe", <item:delightful:honey_glazed_walnut>,
      [<tag:items:forge:nuts>,<item:minecraft:honey_bottle>],
         <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 2, 100);

<recipetype:farmersdelight:cooking>.addRecipe("crab_rangoon_recipe", <item:delightful:crab_rangoon>,
      [<item:farmersdelight:wheat_dough>, <tag:items:forge:milk>, <item:quark:crab_leg>],
         <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 7, 160); 

<recipetype:farmersdelight:cooking>.addRecipe("smore_recipe", <item:delightful:smore>,
      [<item:farmersdelight:honey_cookie>, <item:minecraft:cocoa_beans>, <tag:items:forge:milk>, <item:minecraft:sugar>, <item:delightful:cooked_marshmallow_stick>, <item:farmersdelight:honey_cookie>],
         <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 20, 70);

<recipetype:farmersdelight:cooking>.addRecipe("berry_matcha_recipe", <item:delightful:berry_matcha_latte>,
      [<tag:items:minecraft:fox_food>, <tag:items:chipped:ice>, <tag:items:forge:milk>, <item:minecraft:honey_bottle>, <item:delightful:matcha>],
             <constant:farmersdelight:cooking_pot_recipe_book_tab:drinks>, <item:minecraft:glass_bottle>, 11, 150);

<recipetype:farmersdelight:cooking>.addRecipe("matcha_latte_recipe", <item:delightful:matcha_latte>,
      [<tag:items:forge:milk>, <item:minecraft:honey_bottle>, <item:delightful:matcha>],
         <constant:farmersdelight:cooking_pot_recipe_book_tab:drinks>, <item:minecraft:glass_bottle>, 7, 300); 

<recipetype:farmersdelight:cooking>.addRecipe("gongylidia_bruschetta_recipe", <item:alexsdelight:gongylidia_bruschetta>,
      [<tag:items:forge:salad_ingredients>, <item:farmersdelight:tomato>, <item:alexsmobs:gongylidia>, <item:alexsmobs:fish_oil>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bread>, 20, 220); 

<recipetype:farmersdelight:cooking>.addRecipe("maggot_salad_recipe", <item:alexsdelight:maggot_salad>,
      [<item:alexsmobs:maggot>, <item:farmersdelight:cabbage>,<item:farmersdelight:tomato>,<item:farmersdelight:onion>,<item:minecraft:beetroot>,],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bowl>, 6, 400); 

<recipetype:farmersdelight:cooking>.addRecipe("brainfungus_sandwich_recipe", <item:alexsdelight:bunfungus_sandwich>,
      [<item:farmersdelight:red_mushroom_colony>,<tag:items:alexsdelight:cooked_bunfungus>,<item:farmersdelight:red_mushroom_colony>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bread>, 8, 240);

<recipetype:farmersdelight:cooking>.addRecipe("field_salad_recipe", <item:delightful:field_salad>,
      [<tag:items:forge:salad_ingredients>,<tag:items:forge:salad_ingredients>,<item:delightful:cactus_steak>,<item:minecraft:carrot>, <item:delightful:salmonberries>, <item:delightful:acorn>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bowl>, 12, 380); 

<recipetype:farmersdelight:cooking>.addRecipe("nut_butter_and_jam_sandwitch_recipe", <item:delightful:nut_butter_and_jelly_sandwich>,
      [<item:delightful:nut_butter_bottle>,<tag:items:forge:jelly>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bread>, 7, 160);     

<recipetype:farmersdelight:cooking>.addRecipe("salmonberry_pie_recipe", <item:delightful:salmonberry_pie>,
      [<item:delightful:salmonberries>,<item:delightful:salmonberries>,<item:minecraft:wheat>,<item:minecraft:wheat>,<item:minecraft:sugar>,<item:minecraft:sugar>],
           <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:farmersdelight:pie_crust>, 9, 240);

<recipetype:farmersdelight:cooking>.addRecipe("chorus_pie_recipe", <item:endersdelight:chorus_pie>,
      [<item:minecraft:chorus_fruit>,<item:minecraft:chorus_fruit>,<item:minecraft:wheat>,<item:minecraft:wheat>,<item:minecraft:sugar>,<item:minecraft:sugar>],
           <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:farmersdelight:pie_crust>, 20, 240);

<recipetype:farmersdelight:cooking>.addRecipe("apple_pie_recipe", <item:farmersdelight:apple_pie>,
      [<item:minecraft:apple>,<item:minecraft:apple>,<item:minecraft:wheat>,<item:minecraft:wheat>,<item:minecraft:sugar>,<item:minecraft:sugar>],
           <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:farmersdelight:pie_crust>, 4, 240);

<recipetype:farmersdelight:cooking>.addRecipe("chocolate_pie_recipe", <item:farmersdelight:chocolate_pie>,
      [<item:create:bar_of_chocolate>,<item:create:bar_of_chocolate>,<tag:items:forge:milk>,<tag:items:forge:milk>,<item:minecraft:sugar>,<item:minecraft:sugar>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:farmersdelight:pie_crust>, 9, 400);   

<recipetype:farmersdelight:cooking>.addRecipe("Chrus_juice_recipe", <item:endersdelight:chorus_juice>,
      [<item:minecraft:chorus_fruit>,<tag:items:forge:sugar>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:drinks>, <item:minecraft:glass_bottle>, 5, 200); 

<recipetype:farmersdelight:cooking>.addRecipe("azalea_tea_recipe", <item:delightful:azalea_tea>,
      [<item:twigs:azalea_flowers>,<tag:items:forge:water>,<item:delightful:matcha>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:drinks>, <item:minecraft:glass_bottle>, 15, 200);

<recipetype:farmersdelight:cooking>.addRecipe("prickly_pear_juice_recipe", <item:delightful:prickly_pear_juice>,
      [<tag:items:forge:berries>,<tag:items:forge:sugar>,<tag:items:chipped:ice>,<tag:items:forge:water>],
         <constant:farmersdelight:cooking_pot_recipe_book_tab:drinks>, <item:minecraft:glass_bottle>, 5, 200);

<recipetype:farmersdelight:cooking>.addRecipe("melon_juice_recipe", <item:farmersdelight:melon_juice>,
      [<item:minecraft:melon_slice>,<item:minecraft:melon_slice>,<item:minecraft:melon_slice>,<item:minecraft:melon_slice>,<tag:items:forge:sugar>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:drinks>, <item:minecraft:glass_bottle>, 6, 200);  

<recipetype:farmersdelight:cooking>.addRecipe("Sweet_berry_cheesecake_recipe", <item:farmersdelight:sweet_berry_cheesecake>,
      [<item:minecraft:sweet_berries>,<item:minecraft:sweet_berries>,<item:minecraft:sweet_berries>,<tag:items:forge:milk>,<tag:items:forge:milk>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:farmersdelight:pie_crust>, 8, 400);

<recipetype:farmersdelight:cooking>.addRecipe("melon_popsicle_recipe", <item:farmersdelight:melon_popsicle>,
      [<item:minecraft:melon_slice>,<item:minecraft:melon_slice>,<item:minecraft:melon_slice>,<item:minecraft:melon_slice>,<item:minecraft:ice>,<item:minecraft:ice>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:stick>, 4, 100);
      
<recipetype:farmersdelight:cooking>.addRecipe("lush_moss_salad_recipe", <item:quarkdelight:lush_moss_salad>,
      [<item:quark:moss_paste>,<item:quark:moss_paste>,<item:minecraft:glow_berries>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bowl>, 7, 140);
<recipetype:farmersdelight:cooking>.addRecipe("bowl_of_exotic_fruit_recipe", <item:quarkdelight:bowl_of_exotic_fruits>,
      [<item:quark:ancient_fruit>,<item:minecraft:melon_slice>,<item:minecraft:chorus_fruit>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bowl>, 7, 140);

<recipetype:farmersdelight:cooking>.addRecipe("warped_moldy_meat_recipe", <item:nethersdelight:warped_moldy_meat>,
      [<item:minecraft:warped_roots>,<item:minecraft:warped_roots>,<item:nethersdelight:hoglin_sirloin>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bowl>, 19, 240);

<recipetype:farmersdelight:cooking>.addRecipe("improvised_barecue_stick_recipe", <item:miners_delight:improvised_barbecue_stick>,
      [<item:miners_delight:baked_cave_carrot>,<item:minecraft:brown_mushroom>,<item:miners_delight:smoked_bat_wing>,<item:miners_delight:smoked_bat_wing>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:stick>, 16, 200);

<recipetype:farmersdelight:cooking>.addRecipe("horse_feed_recipe", <item:farmersdelight:horse_feed>,
      [<item:minecraft:apple>,<item:minecraft:apple>,<item:minecraft:golden_carrot>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:hay_block>, 50, 600);
                                                         
<recipetype:farmersdelight:cooking>.addRecipe("grilled_salmon_recipe", <item:farmersdelight:grilled_salmon>,
      [<tag:items:forge:cooked_fishes/salmon>,<item:minecraft:sweet_berries>,<tag:items:forge:salad_ingredients>,<item:farmersdelight:onion>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:meals>, <item:minecraft:bowl>, 20, 600);

<recipetype:farmersdelight:cooking>.addRecipe("steak_and_potatoes", <item:farmersdelight:steak_and_potatoes>,
      [<item:minecraft:baked_potato>,<tag:items:forge:cooked_beef>,<item:farmersdelight:cooked_rice>,<item:farmersdelight:onion>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:meals>, <item:minecraft:bowl>, 12, 550);

<recipetype:farmersdelight:cooking>.addRecipe("roasted_mutton_chops_recipe", <item:farmersdelight:roasted_mutton_chops>,
      [<tag:items:forge:cooked_mutton>,<item:minecraft:beetroot>,<item:farmersdelight:cooked_rice>,<item:farmersdelight:tomato>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:meals>, <item:minecraft:bowl>, 17, 550);

<recipetype:farmersdelight:cooking>.addRecipe("bacon_and_eggs_recipe", <item:farmersdelight:bacon_and_eggs>,
      [<item:farmersdelight:cooked_bacon>,<item:farmersdelight:cooked_bacon>,<item:farmersdelight:fried_egg>,<item:farmersdelight:fried_egg>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:meals>, <item:minecraft:bowl>, 18, 500);

<recipetype:farmersdelight:cooking>.addRecipe("kelp_roll_recipe", <item:farmersdelight:kelp_roll>,
      [<item:farmersdelight:cooked_rice>,<item:minecraft:carrot>,<item:farmersdelight:cooked_rice>,<item:minecraft:dried_kelp>,<item:minecraft:dried_kelp>,<item:minecraft:dried_kelp>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 18, 240);

<recipetype:farmersdelight:cooking>.addRecipe("cod_roll_recipe", <item:farmersdelight:cod_roll>*2,
      [<item:farmersdelight:cod_slice>,<item:farmersdelight:cod_slice>,<item:farmersdelight:rice>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 18, 100);

<recipetype:farmersdelight:cooking>.addRecipe("salmon_roll_recipe", <item:farmersdelight:salmon_roll>*2,
      [<item:farmersdelight:salmon_slice>,<item:farmersdelight:salmon_slice>,<item:farmersdelight:rice>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 18, 100);

<recipetype:farmersdelight:cooking>.addRecipe("stuffed_potato_recipe", <item:farmersdelight:stuffed_potato>,
      [<item:minecraft:baked_potato>,<tag:items:forge:cooked_beef>,<tag:items:forge:milk>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 16, 180);

<recipetype:farmersdelight:cooking>.addRecipe("mutton_wrap_recipe", <item:farmersdelight:mutton_wrap>,
      [<tag:items:forge:cooked_mutton>,<tag:items:forge:salad_ingredients>,<item:farmersdelight:onion>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bread>, 5, 80);

<recipetype:farmersdelight:cooking>.addRecipe("bacon_sandwich", <item:farmersdelight:bacon_sandwich>,
      [<tag:items:forge:cooked_bacon>,<tag:items:forge:salad_ingredients>,<item:farmersdelight:tomato>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bread>, 6, 120);
     
<recipetype:farmersdelight:cooking>.addRecipe("hamburger_recipe", <item:farmersdelight:hamburger>,
      [<item:farmersdelight:beef_patty>,<item:farmersdelight:cabbage_leaf>,<item:farmersdelight:tomato>,<item:farmersdelight:onion>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bread>, 6, 400);

<recipetype:farmersdelight:cooking>.addRecipe("chicken_sandwich_recipe", <item:farmersdelight:chicken_sandwich>,
      [<tag:items:forge:cooked_chicken>,<tag:items:forge:salad_ingredients>,<item:minecraft:carrot>,<item:farmersdelight:onion>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bread>, 6, 100);

<recipetype:farmersdelight:cooking>.addRecipe("egg_sandwich_recipe", <item:farmersdelight:egg_sandwich>,
      [<item:farmersdelight:fried_egg>,<item:farmersdelight:fried_egg>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bread>, 2, 100);

<recipetype:farmersdelight:cooking>.addRecipe("barbecue_on_a_stick_recipe", <item:farmersdelight:barbecue_stick>,
      [<item:farmersdelight:onion>,<tag:items:forge:foods/meat/cooked>,<item:farmersdelight:tomato>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:stick>, 10, 240);


<recipetype:farmersdelight:cooking>.addRecipe("mixed_salad_recipe", <item:farmersdelight:mixed_salad>,
      [<tag:items:forge:salad_ingredients>,<item:farmersdelight:tomato>,<item:minecraft:beetroot>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bowl>, 9, 140);

<recipetype:farmersdelight:cooking>.addRecipe("fruit_salad_recipe", <item:farmersdelight:fruit_salad>,
      [<item:minecraft:apple>,<item:minecraft:melon_slice>,<item:farmersdelight:pumpkin_slice>,<tag:items:forge:fruits>,<tag:items:forge:fruits>,<tag:items:forge:fruits>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bowl>, 14, 140);

<recipetype:farmersdelight:cooking>.addRecipe("crawling_sandwich_recipe", <item:endersdelight:crawling_sandwich>,
      [<tag:items:endersdelight:shulker_loot>,<item:minecraft:chorus_fruit>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bread>, 8, 160);

<recipetype:farmersdelight:cooking>.addRecipe("crispy_skewer_recipe", <item:endersdelight:crispy_skewer>,
      [<item:minecraft:chorus_fruit>,<item:minecraft:popped_chorus_fruit>,<item:endersdelight:mite_crust>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:stick>, 12, 100);

 <recipetype:farmersdelight:cooking>.addRecipe("strange_eclair_recipe", <item:endersdelight:strange_eclair>,
      [<item:minecraft:wheat>,<item:minecraft:wheat>,<tag:items:forge:sugar>,<item:minecraft:ender_eye>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:air>, 11, 160);
         
<recipetype:farmersdelight:cooking>.addRecipe("twisted_cereal_recipe", <item:endersdelight:twisted_cereal>,
      [<tag:items:endersdelight:enderman_sight>,<tag:items:endersdelight:enderman_loot>,<item:minecraft:popped_chorus_fruit>,<tag:items:forge:milk>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:endersdelight:shulker_bowl>, 9, 180);

<recipetype:farmersdelight:cooking>.addRecipe("twisted_cereal_wood_recipe", <item:endersdelight:twisted_cereal_wood>,
      [<tag:items:endersdelight:enderman_sight>,<tag:items:endersdelight:enderman_loot>,<item:minecraft:popped_chorus_fruit>,<tag:items:forge:milk>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bowl>, 9, 180);   

<recipetype:farmersdelight:cooking>.addRecipe("chorus_stew_recipe", <item:endersdelight:chorus_stew_wood>,
      [<item:minecraft:chorus_fruit>,<item:minecraft:chorus_flower>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bowl>, 1, 200);   

<recipetype:farmersdelight:cooking>.addRecipe("endermite_stew_recipe", <item:endersdelight:endermite_stew_wood>,
      [<item:minecraft:ender_pearl>,<item:endersdelight:mite_crust>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bowl>, 1, 200);   

<recipetype:farmersdelight:cooking>.addRecipe("peral_pasta_recipe", <item:endersdelight:pearl_pasta_wood>,
      [<item:minecraft:ender_pearl>,<item:endersdelight:chorus_juice>,<item:farmersdelight:raw_pasta>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bowl>, 1, 200);   
                
<recipetype:farmersdelight:cooking>.addRecipe("ender_pella_recipe", <item:endersdelight:ender_paella_wood>,
      [<item:endersdelight:enderman_sight>,<tag:items:endersdelight:shulker_loot>,<item:farmersdelight:rice>,<item:minecraft:chorus_flower>],
          <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, <item:minecraft:bowl>, 1, 200);
