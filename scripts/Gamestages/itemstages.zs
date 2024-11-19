import mods.itemstages.ItemStages;


ItemStages.createModRestriction("thermal", "thermal");
ItemStages.createModRestriction("pointblank", "cgm");
ItemStages.restrict(<tag:items:steller:create_starter_machine>, "starter_machine");
ItemStages.restrict(<tag:items:steller:create_production_machine>, "production_machine");
ItemStages.restrict(<tag:items:steller:create_liquid_machine>, "liquid_machine");
ItemStages.restrict(<tag:items:steller:create_brass_machine>, "brass_machine");
ItemStages.createModRestriction("createindustry", "createindustry");
ItemStages.createModRestriction("protection_pixel", "protection_pixel");