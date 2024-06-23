// Modifies the recipes for doors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  [
    "regions_unexplored:baobab_trapdoor",
    "regions_unexplored:blackwood_trapdoor",
    "regions_unexplored:blue_bioshroom_trapdoor",
    "regions_unexplored:brimwood_trapdoor",
    "regions_unexplored:cobalt_trapdoor",
    "regions_unexplored:cypress_trapdoor",
    "regions_unexplored:dead_trapdoor",
    "regions_unexplored:eucalyptus_trapdoor",
    "regions_unexplored:green_bioshroom_trapdoor",
    "regions_unexplored:joshua_trapdoor",
    "regions_unexplored:kapok_trapdoor",
    "regions_unexplored:larch_trapdoor",
    "regions_unexplored:magnolia_trapdoor",
    "regions_unexplored:maple_trapdoor",
    "regions_unexplored:mauve_trapdoor",
    "regions_unexplored:palm_trapdoor",
    "regions_unexplored:pine_trapdoor",
    "regions_unexplored:pink_bioshroom_trapdoor",
    "regions_unexplored:redwood_trapdoor",
    "regions_unexplored:socotra_trapdoor",
    "regions_unexplored:willow_trapdoor",
    "regions_unexplored:yellow_bioshroom_trapdoor",
  ].forEach((d) => gregifyTrapdoorRecipe(event, "<identifier>:<name>", d));
});