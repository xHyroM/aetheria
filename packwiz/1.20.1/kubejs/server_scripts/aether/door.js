// Modifies the recipes for doors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  gregifyDoorRecipe(event, "<identifier>:<name>", "aether:skyroot_door");
});
