"use client";

import { useEffect } from "react";

const bootstrap = () => import("bootstrap/dist/js/bootstrap.bundle.min.js");

export default function BootstrapClient() {
  useEffect(() => {
    bootstrap();
  }, []);

  return null;
}
