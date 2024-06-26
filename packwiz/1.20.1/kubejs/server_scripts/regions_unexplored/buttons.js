// Modifies the recipes for buttons to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  [
    "regions_unexplored:baobab_button",
    "regions_unexplored:blackwood_button",
    "regions_unexplored:blue_bioshroom_button",
    "regions_unexplored:brimwood_button",
    "regions_unexplored:cobalt_button",
    "regions_unexplored:cypress_button",
    "regions_unexplored:dead_button",
    "regions_unexplored:eucalyptus_button",
    "regions_unexplored:green_bioshroom_button",
    "regions_unexplored:joshua_button",
    "regions_unexplored:kapok_button",
    "regions_unexplored:larch_button",
    "regions_unexplored:magnolia_button",
    "regions_unexplored:maple_button",
    "regions_unexplored:mauve_button",
    "regions_unexplored:palm_button",
    "regions_unexplored:pine_button",
    "regions_unexplored:pink_bioshroom_button",
    "regions_unexplored:redwood_button",
    "regions_unexplored:socotra_button",
    "regions_unexplored:willow_button",
    "regions_unexplored:yellow_bioshroom_button",
  ].forEach((d) => gregifyButtonRecipe(event, "<identifier>:<name>", d));
});
