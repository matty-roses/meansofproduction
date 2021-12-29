/* eslint-disable no-alert */
import { DistributedLibrary } from "@meansofproduction/domain";
import React from "react";

export const Button = () => (
  <button
    type="button"
    onClick={() => alert(`the meaning if life is ${DistributedLibrary}`)}
  >
    Click me
  </button>
);
