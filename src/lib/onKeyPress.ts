import { useEffect, useState } from "react";

export function onKeyPress(eventHandler: (key: string) => void) {
  const keyDown = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();

    if (
      (key >= "a" && key <= "z" && key.length == 1) ||
      key === "escape" ||
      key === "backspace" ||
      key === "enter"
    ) {
      eventHandler(key);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDown);

    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  });
}
