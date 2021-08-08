// For simplicity, I changed the implementation of this module
// and removed Raven. We can always add that in the future
// and this module is the only module we need to modify.

function init() {}

function log(error:string) {
  console.error(error);
}

export const logger={
  init,
  log
};
