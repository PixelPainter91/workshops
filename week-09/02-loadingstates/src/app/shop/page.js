//TODO: I want to render the text of my page first and render the slow items component later

import LoadingComponent from "@/component/LoadingComponent";
import { SlowComponent } from "@/component/SlowComponoent";

import { Suspense } from "react";

export default function ShopPage() {
  return (
    <>
      <h1>Shop</h1>
      <h2>
        Browse your favourite images from the gallery and take home an
        invaluable gift
      </h2>
      <p>
        All images will be signed by the artist! DO NOT MISS THIS OPPORTUNITY
      </p>
      {/* Shop items */}
      <Suspense fallback={<LoadingComponent />}>
        <SlowComponent />
      </Suspense>
    </>
  );
}