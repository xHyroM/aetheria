// Modifies the recipes for boats to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  [
    "regions_unexplored:baobab_boat",
    "regions_unexplored:blackwood_boat",
    "regions_unexplored:cypress_boat",
    "regions_unexplored:dead_boat",
    "regions_unexplored:eucalyptus_boat",
    "regions_unexplored:joshua_boat",
    "regions_unexplored:kapok_boat",
    "regions_unexplored:larch_boat",
    "regions_unexplored:magnolia_boat",
    "regions_unexplored:maple_boat",
    "regions_unexplored:mauve_boat",
    "regions_unexplored:palm_boat",
    "regions_unexplored:pine_boat",
    "regions_unexplored:redwood_boat",
    "regions_unexplored:socotra_boat",
    "regions_unexplored:willow_boat",
  ].forEach((b) => gregifyBoatRecipe(event, "<identifier>:<name>", b));

  event.remove({ id: "regions_unexplored:oak_boat" }); // remove recipe for minecraft's oak boat
});
