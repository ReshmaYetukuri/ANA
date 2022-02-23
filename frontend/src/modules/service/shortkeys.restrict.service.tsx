const restrictBrowserActions = () => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
  document.addEventListener(
    'keydown',
    (e) => {
      // remove 73 to enable inspect
      if (
        [65, 69, 70, 72, 73, 74, 76, 78, 79, 80, 83, 84, 87].includes(
          e.keyCode
        ) &&
        (navigator.platform.match('Mac') ? e.metaKey : e.altKey || e.altKey)
      ) {
        e.preventDefault();
      }
    },
    false
  );
  // prevent browser task manager
  document.addEventListener(
    'keydown',
    (e) => {
      if ([27].includes(e.keyCode) && e.shiftKey) {
        e.preventDefault();
      }
    },
    false
  );

  document.addEventListener(
    'mousedown',
    (event) => {
      if (event.detail > 1) {
        event.preventDefault();
      }
    },
    false
  );
};

export const ShortKeysRestrictService = {
  restrictBrowserActions,
};
